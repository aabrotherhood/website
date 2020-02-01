import React, {Component} from 'react';
import Brother from '../Brother';
import {withFirebase} from '../Firebase/context';
import {withAuthorization} from '../Sessions';
import {Row,Col} from 'react-bootstrap';
import TopBar from '../TopBar';
import './styles.scss';

class Recruits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitInfo: null,
      loading: false
    }
  }
  componentDidMount() {
    this.props.firebase.recruits().on('value', snapshot => {
      const recruitsList = snapshot.val();
      if (recruitsList) {
        
        const recruitsInfoList = Object.keys(recruitsList).map(key => ({
            ...recruitsList[key],
            uid: key
        }));

        this.setState({recruitInfo: recruitsInfoList, loading: true});
      }   else {
          this.setState({recruitInfo: null, loading: false})
        }
    });
  }
  render() {
    const {recruitInfo, loading} = this.state;
    var recruitsList;
    if (loading) {
      recruitsList = recruitInfo.map(info => {
        return (<Brother info={info} key={info.uid} nextURL={'/recruit/' + info.first + info.last}/>);
      });
    }
    return (
      <Col>
        <TopBar loggedIn="true"/>
        <Row className="recruits">
          {loading ? recruitsList : <div></div>}
        </Row>
      </Col>
    );
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(withFirebase(Recruits));