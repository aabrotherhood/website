import React, {Component} from 'react';
import Brother from '../Brother';
import {withFirebase} from '../Firebase/context';
import {withAuthorization} from '../Sessions';
import {Row,Col} from 'react-bootstrap';
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
        
        const recruitsInfoList = Object.keys(recruitsList).map(key => {
          const newData = {
            ...recruitsList[key],
            uid: key
          };
          return (<Brother info={newData} key={key} nextURL={'/recruit/' + recruitsList[key].first + recruitsList[key].last}/>);
        });

        this.setState({recruitInfo: recruitsInfoList, loading: true});
      }   else {
          this.setState({recruitInfo: null, loading: false})
        }
    });
  }
  render() {
    const {recruitInfo, loading} = this.state;
   
    return (
      <Col>
        <Row className="recruits">
          {loading ? recruitInfo : <div></div>}
        </Row>
      </Col>
    );
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(withFirebase(Recruits));