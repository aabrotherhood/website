import React, {Component} from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import TopBar from '../TopBar';
import {withAuthorization} from '../Sessions';

class RecruitmentComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first:'', 
      last: '', 
      recruit: '',
      recruitInfo: null,
      loading: false,
      yes: 0,
      no: 0,
      maybe: 0,
      comments: '',
      redFlags: '',
    }

    this.initialState = this.state

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const currentBrother = this.props.firebase.currentUser().uid;
    const recruitComments = this.props.firebase.commentsByRecruit(this.state.recruit);
    const {yes, no, maybe, comments, redFlags} = this.state
    recruitComments.once('value').then(function(snapshot) {
      const comment = snapshot.val();
      if (comment) {
        const currentYes = comment.yes + yes;
        const currentNo = comment.no + no;
        const currentMaybe = comment.maybe + maybe;
        var currentComments = Object.keys(comment.commentsList).map(key => (comment.commentsList[key]));
        currentComments.push(comments);
        var currentRedFlags =  Object.keys(comment.redFlagsList).map(key => (comment.redFlagsList[key]));
        currentRedFlags.push(redFlags);
        var currentCommenters = Object.keys(comment.commenters).map(key => (comment.commenters[key]));
        if (!currentCommenters.includes(currentBrother)) {
          currentCommenters.push(currentBrother);
        }
        recruitComments.set({
          yes: currentYes,
          no: currentNo,
          maybe: currentMaybe,
          commentsList: currentComments,
          redFlagsList: currentRedFlags,
          commenters: currentCommenters
        }, function(error) {
          if (error) {
            console.log('something went wrong', error);
          } else {
            console.log('successfully added in comments');
            window.location.reload(false);
          }
        });
      } else {
        recruitComments.set({
          yes: yes,
          no: no,
          maybe: maybe,
          commentsList: [comments],
          redFlagsList: [redFlags],
          commenters: [currentBrother]
        }, function(error) {
          if (error) {
            console.log('something went wrong', error);
          } else {
            console.log('successfully added in comments');
            window.location.reload(false);
          }
        });
      }
    });

   
  }
  componentDidMount() {
    this.props.firebase.recruits().on('value', snapshot => {
      const recruitsList = snapshot.val();
      if (recruitsList) {
        const recruitsInfoList = Object.keys(recruitsList).map(key => ({
            first: recruitsList[key].first,
            last: recruitsList[key].last,
            uid: key
        }));

        this.setState({recruitInfo: recruitsInfoList, loading: true});
      }   else {
          this.setState({recruitInfo: null, loading: false})
        }
    });
  }
  handleChange(event) {
    if (event.target.name === 'decision') {
      switch (event.target.value) {
        case 'Yes':
          this.setState({yes: 1});
          break;
        case 'No':
          this.setState({no: 1});
          break;
        default:
          this.setState({maybe: 1});
          break;
      }
    } else {
      this.setState({[event.target.name]: event.target.value});
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

    return( 
      <Col>
      <TopBar loggedIn="true"/>
        
        <Form noValidate onSubmit={this.handleSubmit} className="customForm">
          <Form.Row>
            <Form.Group controlId="exampleForm.ControlSelect1"  as={Col} md="12">
              <Form.Label>Select Recruit</Form.Label>
              <Form.Control as="select" onChange={this.handleChange} name="recruit">
                <option></option>
                {loading ? recruitsList : <option></option>}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Decision</Form.Label>
              <Form.Control as="select" onChange={this.handleChange} name="decision">
                <option></option>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </Form.Control>
            </Form.Group>
          </Form.Row> 
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Comments</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={this.handleChange} name="comments"/>
            </Form.Group>
          </Form.Row> 
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Red Flags</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={this.handleChange} name="redFlags"/>
            </Form.Group>
          </Form.Row> 
         
          <Button className="customButton" type="submit">Submit</Button>
        </Form>
      </Col>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(RecruitmentComments);