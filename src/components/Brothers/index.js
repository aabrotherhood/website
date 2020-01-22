import React, {Component} from 'react';
import Brother from '../Brother';
import {withFirebase} from '../Firebase/context';


class Brothers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brotherInfo: null,
      loading: false
    }
  }
  componentDidMount() {
    this.props.firebase.brothers().on('value', snapshot => {
      const brothersList = snapshot.val();
      if (brothersList) {
        
        const brotherInfoList = Object.keys(brothersList).map(key => ({
            ...brothersList[key],
            uid: key
        }));

        this.setState({brotherInfo: brotherInfoList, loading: true});
      }  else {
        this.setState({brotherInfo: null, loading: false})
      }
    });
  }

  render() {
    const {brotherInfo, loading} = this.state;
    var brothersList;
    if (loading) {
      brothersList = brotherInfo.map((info) => {
        return (<Brother info={info} key={info.uid}/>);
      })
    }
    return(
      <div className="brotherCol">
        {loading ? brothersList : <div></div>}
      </div>      
    )
  }
}

export default withFirebase(Brothers);