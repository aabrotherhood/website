import React, {Component} from 'react';
import {Col, Form, Button, InputGroup} from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import Loading from '../../assets/loading.gif';
import imageCompression from 'browser-image-compression';

class RecruitmentImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruit: '',
      image: null,
      loading: false,
      recruitInfo: null,
      submitted: false,
      imageURL: null,
      imageClicked: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentDidMount() {
    let currentComponent = this;
    this.props.firebase.recruits().on('value', snapshot => {
      const recruitsList = snapshot.val();
      if (recruitsList) {
        const recruitsInfoList = Object.keys(recruitsList).map(key => ({
            first: recruitsList[key].first,
            last: recruitsList[key].last,
            uid: key
        }));
        currentComponent.setState({recruitInfo: recruitsInfoList, loading: true});
      }   else {
        currentComponent.setState({recruitInfo: null, loading: false})
        }
    });
  }

  async handleImageUpload(event) {
 
    const imageFile = event.target.files[0];
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
   
    var options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 1024,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      this.setState({image: compressedFile, imageURL: URL.createObjectURL(compressedFile), imageClicked:false}, () => console.log('set image'));
    } catch (error) {
      console.log(error);
    }
  }

  handleChange(event) {
    if (event.target.files) {
      this.setState({imageClicked: true})
      this.handleImageUpload(event);
    } else {
      this.setState({[event.target.name]: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const recruitImageRef = this.props.firebase.currentRecruitImage(this.state.recruit);
    if (this.state.recruit === '') {
      alert('Pick your name!');
      return;
    }
    if (this.state.image != null) {
      this.setState({submitted: true});
      recruitImageRef.put(this.state.image).then(() => {
        console.log('Added image for recruit');
        recruitImageRef.getDownloadURL().then(image => {
          const currentRecruit = this.props.firebase.recruit(this.state.recruit);
          currentRecruit.update({imageURL: image}, error => {
            if (error) {
              console.log('SOMETHING WENT WRONG', error);
            } else {
              console.log('SET IMAGE URL');
              alert('Thanks!');
              this.props.history.push('/');
            }
          })
        })
      })
    } else {
      alert('Pick an image!');
      return;
    }
  }

  render() {
    const recruitInfo = this.state.recruitInfo;
    const loading = this.state.loading;
    var recruitsList;

    if (loading) {
      recruitsList = recruitInfo.map(recruit => {
        return <option key={recruit.uid} value={recruit.uid}>{recruit.first + ' ' + recruit.last}</option>
      })
    }
    const styles = {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      margin: '1em 0'
    }
    const stylesSpinner = {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      margin: '1em 0'
    }
    return (
      <Col>
      {this.state.submitted ? 
        <div className="loading">
          <img src={Loading} alt="loading gif" className="spinner"/>
        </div> :
        <Form noValidate onSubmit={this.handleSubmit} className="customForm">
          <Form.Row>
            <Form.Group controlId="exampleForm.ControlSelect1"  as={Col} md="12">
              <Form.Label>Select Your Name</Form.Label>
              <Form.Control as="select" onChange={this.handleChange} name="recruit">
                <option></option>
                {loading ? recruitsList : <option></option>}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
            <Form.Label>Profile Picture</Form.Label>
              <InputGroup>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={this.handleChange}
                  className="formImage"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your brother name.
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup.Append>
              {this.state.imageURL ?
                <img src={this.state.imageURL} style={styles} alt="recruit"/> : <div></div>}
              {this.state.imageClicked ? 
                <div style={stylesSpinner}>
                  <img src={Loading} alt="loading gif" className="spinner"/>
                </div> : <div></div>}
              </InputGroup.Append>
            </Form.Group>
          </Form.Row> 
          <Button className="customButton" type="submit">Submit</Button>
      </Form> }
      </Col>
    );
  }
};

export default withFirebase(RecruitmentImages);