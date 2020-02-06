import React, {Component} from 'react';
import Brother from '../Brother';
import {withFirebase} from '../Firebase/context';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';

class Brothers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brotherInfo: null,
      brotherDictInfo: null,
      loading: false,
      loggedIn: false,
    }
  }
  componentWillUnmount() {
    this.listener();
  }
  componentDidMount() {
    this.props.firebase.brothers().on('value', snapshot => {
      const brothersList = snapshot.val();
      var brotherInfoList;
      if (this.state.loggedIn) {
        brotherInfoList = Object.keys(brothersList).map(key => ({
          first: brothersList[key]['first'],
          last: brothersList[key]['last'],
          imageURL: brothersList[key]['imageURL'],
          year: brothersList[key]['year'],
          house: brothersList[key]['house'],
          location: brothersList[key]['location'],
          occupation: brothersList[key]['occupation'],
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
        
        this.setState({brotherDictInfo: brotherDict, loading: true});
    });
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ loggedIn: true })
          : this.setState({ loggedIn: false });
      },
    );
  }

  render() {
    const { brotherDictInfo, loading} = this.state;
    if (loading) {
      for (var key in brotherDictInfo) {
        brotherDictInfo[key] = brotherDictInfo[key].map(info => {
          console.log(info.uid)
          return (<Brother info={info} key={info.uid} nextURL={'/brother/' + info.first + info.last}/>);
        });
      }
    }
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