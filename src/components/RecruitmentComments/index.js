import React, {Component} from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import { withFirebase } from '../Firebase';

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
    decision: '',
  }
  constructor(props) {
    super(props);

    this.state = this.initialState

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleGetComment = this.handleGetComment.bind(this);
  }

  componentDidMount() {
    // this.handleChangeData();

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
    this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        if (authUser) {
          this.props.firebase.brother(authUser.uid).on('value', function(snapshot) {
              const brother = snapshot.val();
              if (brother) {
                currentComponent.setState({brotherName: brother.first + ' ' + brother.last, brotherUID: authUser.uid});
              }
            });
        } else {
          console.log('nothing')
        }
      },
    );
  }

  handleReset() {
    this.setState({
      recruit: '',
      decision: '',
      yes: 0,
      no: 0,
      maybe: 0,
      comments: '',
      redFlags: '',})
    alert('Thanks! Submit another');
  }

  handleSubmit(event) {
    event.preventDefault();
    const {yes, no, maybe, comments, redFlags,brotherName, brotherUID} = this.state;
    const recruitComments = this.props.firebase.commentsByRecruitBrotherNew(this.state.recruit, brotherUID);
    recruitComments.set({
      yes: yes,
      no: no,
      maybe: maybe,
      comments: comments,
      redFlags: redFlags,
      commenterName: brotherName,
    }, function(error) {
      if (error) {
        console.log('something went wrong', error);
      } else {
        console.log('successfully added in comments');
      }
    });
    this.handleReset()
  }


  handleGetComment() {
    this.props.firebase.commentsByRecruitBrotherNew(this.state.recruit, this.state.brotherUID)
    .once('value', snapshot => {
      const comment = snapshot.val();
      if (comment) {
        this.setState({
          comments: comment['comments'],
          redFlags: comment['redFlags'],
          maybe: comment['maybe'],
          no: comment['no'],
          yes: comment['yes']
        });
        if (comment['maybe'] > 0) {
          this.setState({
            decision: 'Maybe',
          })
        } else if (comment['no'] > 0) {
          this.setState({
            decision: 'No',
          })
        } else if (comment['yes'] > 0) {
          this.setState({
            decision: 'Yes',
          })
        }
      } else {
        this.setState({
          decision: '',
          yes: 0,
          no: 0,
          maybe: 0,
          comments: '',
          redFlags: '',})
      }
    })
  }
  
  handleChange(event) {
    if (event.target.name === 'decision') {
      switch (event.target.value) {
        case 'Yes':
          this.setState({yes: 1, no: 0, maybe: 0, decision: 'Yes'});
          break;
        case 'No':
          this.setState({no: 1, yes: 0, maybe: 0, decision: 'No'});
          break;
        default:
          this.setState({maybe: 1, yes: 0, no: 0, decision: 'Maybe'});
          break;
      }
    } else {
      if (event.target.name === 'recruit') {
        this.setState({[event.target.name]: event.target.value}, () => this.handleGetComment());
      } else {
        this.setState({[event.target.name]: event.target.value});
      }

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
              <Form.Control value={this.state.recruit} as="select" onChange={this.handleChange} name="recruit">
                <option></option>
                {loading ? recruitsList : <option></option>}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Decision</Form.Label>
              <Form.Control value={this.state.decision} as="select" onChange={this.handleChange} name="decision">
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

export default withFirebase(RecruitmentComments);