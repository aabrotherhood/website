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
      commentsList: null,
      redFlagsList: null,
      maybe: 0,
      no: 0,
      yes: 0,
      loading: false,
    }
  }

  componentDidMount() {
    this.props.firebase.commentsByRecruit(this.data.uid).on('value', snapshot => {
      const comment = snapshot.val();
      if (comment) {
        const commentersFullName = Object.keys(comment.commenters).map((brother) => (comment.commenters[brother]))
        this.setState({
          commenters: Object.keys(comment.commenters),
          commentersName: commentersFullName,
          commentsList: comment.commentsList,
          redFlagsList: comment.redFlagsList,
          maybe: comment.maybe,
          no: comment.no,
          yes: comment.yes,
          loading: true
        });
      }
    })
  }

  render() {
    const brotherImage = {
      backgroundImage: 'url(' + this.data.imageURL + ')',
      paddingTop: '40%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      marginBottom: '2rem',
    }
    const {commenters, commentersName, commentsList, redFlagsList, maybe, no, yes, loading} = this.state;
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
      commented = commenters.includes(this.props.firebase.currentUser().uid);
      if (commented) {
        commentersList = commentersName.map((brother, indx) => {
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
              {loading ? actualCommentsList : <div></div>}
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