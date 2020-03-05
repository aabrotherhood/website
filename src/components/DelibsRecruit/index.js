import React, {Component} from 'react';
import {Col,Row} from 'react-bootstrap';
import {withAuthorization} from '../Sessions';
import './styles.scss';

class DelibsRecruit extends Component {
  constructor(props) {
    super(props);

    this.data = JSON.parse(this.props.history.location.state.data);
    this.state = {
      commenters: null, 
    }
    
  }

  componentDidMount() {
    this.props.firebase.commentsByRecruitNew(this.data.uid).on('value', snapshot => {
      const comments = snapshot.val();
      var commentersList = [];
      if (comments) {
        Object.keys(comments).forEach(function(key) {
          if (key !== 'commentsFromOld' && key !== 'redFlagsFromOld' && key !== 'maybeFromOld' && key !== 'noFromOld' && key !== 'yesFromOld') {
            commentersList.push(comments[key]['commenterName']);
          }
        });
        this.setState({
          commenters: commentersList,
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
    const {commenters, loading} = this.state;
    var commentersList = [];
    var notGottenMeals = [];
    var brothers = [
      'Jonathan Paek','Aaron Kruk','Sam Carter','Raymond Hu','Victor Li','Justin Szeto','Austin Shin'
      ,'Teddy Ninh','Caleb He','Brian Seo','James Lee','TJ Song','Ryan Jiang','Abe Lee'
      ,'Mariko O\'Neil','Nicolas Yan','Daniel Cho','Ben Wu','Koji Everard','Kendrick Nguyen'
      ,'Charlie Zhu','Charles Chiu','Alex Chen','Amia Ross','Charlie Michael', 'Corey Gonzales', 'Ryan Kim']
    if (loading) {
      if (commenters) {
        brothers.forEach((brother, indx) => {
          if (commenters.indexOf(brother) >= 0) {
            console.log(brother)
            commentersList.push(<p key={indx}>{brother}</p>)
          } else {
            notGottenMeals.push(<p key={indx}>{brother}</p>)
          }
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
        <Row className="recruits">
          <Col className="redFlags">
            <p className="header">Have Gotten Meals</p>
            {loading ? commentersList : <div></div>}
          </Col>
          <Col className="redFlags">
            <p className="header">Have Not Gotten Meals</p>
            {loading ? notGottenMeals : <div></div>}
          </Col>
        </Row>
      </Col>
    );
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(DelibsRecruit);