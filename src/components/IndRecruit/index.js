import React, {Component} from 'react';
import {Col,Row} from 'react-bootstrap';
import {withAuthorization} from '../Sessions';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import './styles.scss';

class IndRecruit extends Component {
  constructor(props) {
    super(props);

    this.data = JSON.parse(this.props.history.location.state.data);
    this.state = {
      commenters: null, 
      commentersUID: null,
      commentsList: null,
      redFlagsList: null,
      maybe: 0,
      no: 0,
      yes: 0,
      loading: false,
    }
    this.handleShuffle = this.handleShuffle.bind(this);
    
  }

  handleShuffle(arr) {
    return arr.sort(() => 0.5 - Math.random());
  }

  componentDidMount() {
    this.props.firebase.commentsByRecruitNew(this.data.uid).on('value', snapshot => {
      const comments = snapshot.val();
      var commentersList = [];
      var commentersUIDList = [];
      var commentsList = [];
      var redFlags = [];
      var maybe = 0;
      var no = 0;
      var yes = 0;
      if (comments) {
        Object.keys(comments).forEach(function(key) {
          if (key !== 'commentsFromOld' && key !== 'redFlagsFromOld' && key !== 'maybeFromOld' && key !== 'noFromOld' && key !== 'yesFromOld') {
            commentersList.push(comments[key]['commenterName']);
            commentersUIDList.push(key);
            redFlags.push(comments[key]['redFlags']);
            commentsList.push(comments[key]['comments']);
            maybe += comments[key]['maybe'];
            no += comments[key]['no'];
            yes += comments[key]['yes'];
          }
        });
        if (comments['commentsFromOld']) {
          const oldComments = Object.keys(comments['commentsFromOld']).map(key => {
            return comments['commentsFromOld'][key];
          })
          commentsList.push(oldComments)
        }
        if (comments['redFlagsFromOld']) {
          const oldComments = Object.keys(comments['redFlagsFromOld']).map(key => {
            return comments['redFlagsFromOld'][key];
          })
          redFlags.push(oldComments)
        }
        if (comments['maybeFromOld']) {
          maybe += comments['maybeFromOld']
        }
        if (comments['noFromOld']) {
          no += comments['noFromOld']
        }
        if (comments['yesFromOld']) {
          yes += comments['yesFromOld']
        }
        commentsList = this.handleShuffle(commentsList);
        this.setState({
          commenters: commentersList,
          commentersUID: commentersUIDList,
          commentsList: commentsList,
          redFlagsList: redFlags,
          maybe: maybe,
          no: no,
          yes: yes,
          loading: true
        })
      }
    });
  }

  render() {
    const brotherImage = {
      backgroundImage: 'url(' + this.data.imageURL + ')',
      paddingTop: '40%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      marginBottom: '2rem',
    }
    const {commenters, commentersUID, commentsList, redFlagsList, maybe, no, yes, loading} = this.state;
    var actualCommentsList;
    var actualRedFlagsList;
    var commented = false;
    var commentersList;
    if (loading) {
      if (commentsList) {
        actualCommentsList = commentsList.map((comment, indx) => {
          return <p key={indx}>{comment}</p>
        });
      } else {
        actualCommentsList = <p>No Comments Yet</p>
      }
      if (redFlagsList) {
        actualRedFlagsList = redFlagsList.map((flag, indx) => {
          return <p key={indx}>{flag}</p>
        });
      } else {
        actualRedFlagsList = <p>No Red Flags</p>
      }
      if (commentersUID) {
        commented = commentersUID.includes(this.props.firebase.currentUser().uid);
      }
      if (commenters) {
        commentersList = commenters.map((brother, indx) => {
          return <p key={indx}>{brother}</p>
        })
      }
    }
    return(
      <Col className="indBrother justify-content-center">
        <Row className="infoBox">
          <div className="brotherImage" style={brotherImage}></div>
          <div className="infoDetails">
            <p className="name">{this.data.first + ' ' + this.data.last}</p>
            <p className="other">{this.data.year}</p>
            <p className="other">{this.data.house}</p>
            <p className="other">{this.data.phone}</p>
            <p className="other">{this.data.personalEmail}</p>
            <p className="other">{this.data.schoolEmail}</p>
          </div>
        </Row>
        <Col className="recruits">
          {loading && commented ?
          <Row className="recruitComments justify-content-center">
            <Col className="recruitPieChartCol">
              <ReactMinimalPieChart
                animate
                animationDuration={500}
                animationEasing="ease-out"
                className="recruitPieChart"
                cx={50}
                cy={50}
                data={[
                  {
                    color: '#821122',
                    title: 'No',
                    value: no
                  },
                  {
                    color: '#044B7F',
                    title: 'Yes',
                    value: yes
                  },
                  {
                    color: '#107E7D',
                    title: 'Maybe',
                    value: maybe
                  }
                ]}
                label
                labelPosition={112}
                labelStyle={{
                  fontFamily: 'sans-serif',
                  fontSize: '5px'
                }}
                lengthAngle={360}
                lineWidth={100}
                paddingAngle={0}
                radius={42}
                rounded={false}
                startAngle={0}
                viewBoxSize={[
                  100,
                  100
                ]}
              /> 
              <Col className="pieChartKey">
                <Row>
                  <div className="yes"></div>
                  <p>Yes</p>
                </Row>
                <Row>
                  <div className="no"></div>
                  <p>No</p>
                </Row>
                <Row>
                  <div className="maybe"></div>
                  <p>Maybe</p>
                </Row>
              </Col>
            </Col>
            <Col className="comments justify-content-start">
              <p className="header">Comments</p>
                {actualCommentsList}
            </Col>
          </Row>: <div></div> }
          <Col className="redFlags">
            <p className="header">Red Flags</p>
            {loading ? actualRedFlagsList : <div></div>}
          </Col>
          <Col className="redFlags">
            <p className="header">Have Gotten Meals</p>
            {loading ? commentersList : <div></div>}
          </Col>
        </Col>
      </Col>
    );
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(IndRecruit);