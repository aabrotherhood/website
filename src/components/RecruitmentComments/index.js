import React, {Component} from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import {withAuthorization} from '../Sessions';

class RecruitmentComments extends Component {
  initialState = {
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
    brotherName: '',
    brotherUID: '',
  }
  constructor(props) {
    super(props);

    this.state = this.initialState

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
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
    const currentBrotherUID = this.props.firebase.currentUser().uid;
    this.props.firebase.brother(currentBrotherUID).on('value', function(snapshot) {
      const brother = snapshot.val();
      if (brother) {
        currentComponent.setState({brotherName: brother.first + ' ' + brother.last, brotherUID: currentBrotherUID});
      }
    });
  }

  handleReset() {
    this.setState({...this.initialState})
    alert('Thanks! Submit another');
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const recruitComments = this.props.firebase.commentsByRecruit(this.state.recruit);
    const {yes, no, maybe, comments, redFlags,brotherName, brotherUID} = this.state;
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
        var commentersList = Object.keys(comment.commenters).map(key => (comment.commenters[key]));
        commentersList.push(brotherName)
        var commentersUIDList = Object.keys(comment.commentersUID).map(key => comment.commentersUID[key])
        commentersUIDList.push(brotherUID)
        recruitComments.set({
          yes: currentYes,
          no: currentNo,
          maybe: currentMaybe,
          commentsList: currentComments,
          redFlagsList: currentRedFlags,
          commenters: commentersList,
          commentersUID: commentersUIDList,
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
          commenters: [brotherName],
          commentersUID: [brotherUID]
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
    this.handleReset()
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
              <Form.Control value={this.state.comments} as="textarea" rows="3" onChange={this.handleChange} name="comments"/>
            </Form.Group>
          </Form.Row> 
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Red Flags</Form.Label>
              <Form.Control value={this.state.redFlags} as="textarea" rows="3" onChange={this.handleChange} name="redFlags"/>
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