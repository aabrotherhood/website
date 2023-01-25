import React, {Component} from 'react';
import Brother from '../Brother';
import {withFirebase} from '../Firebase/context';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';

class Brothers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brotherDictInfo: null,
      loading: false,
    }
  }
  componentDidMount() {
    this.props.firebase.brothers().on('value', snapshot => {
      const brothersList = snapshot.val();
      var brotherInfoList;
      if (this.props.loggedIn) {
        brotherInfoList = Object.keys(brothersList).map(key => ({
          first: brothersList[key]['first'],
          last: brothersList[key]['last'],
          imageURL: brothersList[key]['imageURL'],
          year: brothersList[key]['year'],
          house: brothersList[key]['house'],
          location: brothersList[key]['location'],
          occupation: brothersList[key]['occupation'],
          birthday: brothersList[key]['birthday'],
          personalEmail: brothersList[key]['personalEmail'],
          schoolEmail: brothersList[key]['schoolEmail'],
          phone: brothersList[key]['phone'],
          uid: key,
        }));
      } else {
        brotherInfoList = Object.keys(brothersList).map(key => ({
          first: brothersList[key]['first'],
          last: brothersList[key]['last'],
          imageURL: brothersList[key]['imageURL'],
          year: brothersList[key]['year'],
          house: brothersList[key]['house'],
          uid: key,
        }));
      }
      var brotherDict = {};

      for (var brother in brotherInfoList) {
        if (parseInt(brotherInfoList[brother].year) in brotherDict) {
          brotherDict[parseInt(brotherInfoList[brother].year)].push(brotherInfoList[brother])
        } else {
          brotherDict[parseInt(brotherInfoList[brother].year)] = [brotherInfoList[brother]]
        }
      }
      for (var key in brotherDict) {
        brotherDict[key] = brotherDict[key].map(info => {
          return (<Brother info={info} key={info.uid} nextURL={'/brother/' + info.first + info.last}/>);
        });
      }
      this.setState({brotherDictInfo: brotherDict, loading: true});
    });
  }

  render() {
    const { brotherDictInfo, loading} = this.state;
    return(
      <Col className="brotherCol justify-content-center">
        {loading ? 
          Object.keys(brotherDictInfo).map(obj => 
          <Col key={obj} className="yearCols"><h1 className="year">{obj}</h1><Row>{brotherDictInfo[obj]}</Row></Col>)
         : <div></div>}
      </Col>      
    )
  }
}

export default withFirebase(Brothers);