import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import Loading from '../../assets/loading.gif';
import {Form, Col, Row, Button} from 'react-bootstrap';
import './styles.scss';

class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitsDict: {
        '09drnf7vijzkzr6ntt5nqy': 'Alexander Arber',
        '0mf62cwonebrd2p2hj8bnr': "Robert Harraka",
        '0w2h6jzmcaaozrn9ojq79ss': "Caroline Ko",
        '2htilapljom926d367p1s': "Reddy  Lee",
        '39ms52xa56krilswdcksa': "David Cao",
        '4mhlcumk31byigj8a7xg7d': "Josh Zhu",
        '4q1qpc5vwxar1c0nprbouf': "Matthew Chang",
        '7c9zqkqaxfjfidqs9f4irs': "Juliette Low Fleury",
        '7otx56f1ca8tw3epzuclw': "Joshua Fang",
        '859cfyz15aw0c1t27l6df': "Jennifer Chu",
        '92ze2cmv1l34yazst9qvh': "Howie Guo",
        '9u9j1eup4zeqjfaey2wp8d': "Joon Kim",
        '9ziwpehiui3gkihbdnjln': "Brian Ma",
        'avcndeg4l2g1tqk1vu5l9b': "Brandon Won",
        'ayp15rbs59hyvzmze5tkns': "Ilyas Mardin",
        'bozlnv6edp6asy8fkshil': "Richard Kim",
        'cam6ygowj68a1bggtqy74i': "Kevin  Chew",
        'cc5ar2wdxesjo0tdr3715p': "Matthew Li",
        'crd3z2z6onvdaf9z94ivb': "Dennis Lin",
        'd0i27tgtjxcohjjcw2pt1k': "Daran Zhao", 
        'dl8wjynmyvlxm2wrxlf8h': "Amanda Su",
        'f1e1pib9r4h1gkvsodn0rm': "Aaron Sun",
        'ftccy3f8l0k1jzlcei3odm': "Jaron Zhou",
        'g8kqrat19al86t7a6jeo2e': "Jack Li",
        'gantv8sljhmyrkrjwfm6ts': "Ethan Whang",
        'gh2fuxcio7fugqoj8jnr8': "Lawrence Jia",
        'gkc4r5c3b49nthohq7nwo': "Roger  Cawdette",
        'iciwb8rnacn3yvrxndwh6y': "Eric Sun",
        'jcmijoq7vljp0sp5binpue': "Danny Kim",
        'n52gq8sz2429wrbqq91p4': "Adam Xiao",
        'n952qpm78g9mg6kl2s2ph': "Cindy Liu",
        'psb503a6wod0oxw86uylq': "Benjamin Chun",
        'qcluhnw8shja1uuhpmnu0e': "Jonathan Zhang",
        'qcouk1q5ayfg1d50laosjm': "Jimmy Lin",
        's406fq19g3d8ud9gfz3osw': "Christopher Ma",
        'ugbckdn2a5ny6o8afd9wg9': "David Cho",
        'vb9nfajj8u98jrknmsiqb': "Saimun Habib",
        'w84s41kckip1mv9e2wen': "Lilia Gonzales",
        'wdfi19vj3qcszj1va80xb': "Alex Zhu",
        'wulbaq8ta9mvzndwe3nxgm': "Cat Hyeon",
        'zhqk6vl35el174g92hxkgz': "Christopher Cheng",      },
        loading: false,
        'recruitVotes': {

          '09drnf7vijzkzr6ntt5nqy': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '0mf62cwonebrd2p2hj8bnr': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '0w2h6jzmcaaozrn9ojq79ss': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '2htilapljom926d367p1s': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '39ms52xa56krilswdcksa': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '4mhlcumk31byigj8a7xg7d': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '4q1qpc5vwxar1c0nprbouf': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '7c9zqkqaxfjfidqs9f4irs': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '7otx56f1ca8tw3epzuclw': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '859cfyz15aw0c1t27l6df': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '92ze2cmv1l34yazst9qvh': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '9u9j1eup4zeqjfaey2wp8d': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '9ziwpehiui3gkihbdnjln': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'avcndeg4l2g1tqk1vu5l9b': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'ayp15rbs59hyvzmze5tkns': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'bozlnv6edp6asy8fkshil': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'cam6ygowj68a1bggtqy74i':{
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'cc5ar2wdxesjo0tdr3715p': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'crd3z2z6onvdaf9z94ivb': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'd0i27tgtjxcohjjcw2pt1k': {
            'yes': 0,
            'no': 0,
            'maybe': 0, }, 
          'dl8wjynmyvlxm2wrxlf8h': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'f1e1pib9r4h1gkvsodn0rm': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'ftccy3f8l0k1jzlcei3odm': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'g8kqrat19al86t7a6jeo2e': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'gantv8sljhmyrkrjwfm6ts': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'gh2fuxcio7fugqoj8jnr8': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'gkc4r5c3b49nthohq7nwo': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'iciwb8rnacn3yvrxndwh6y': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'jcmijoq7vljp0sp5binpue':{
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'n52gq8sz2429wrbqq91p4': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'n952qpm78g9mg6kl2s2ph': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'psb503a6wod0oxw86uylq': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'qcluhnw8shja1uuhpmnu0e': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'qcouk1q5ayfg1d50laosjm': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          's406fq19g3d8ud9gfz3osw': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'ugbckdn2a5ny6o8afd9wg9': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'vb9nfajj8u98jrknmsiqb': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'w84s41kckip1mv9e2wen': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'wdfi19vj3qcszj1va80xb': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'wulbaq8ta9mvzndwe3nxgm': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'zhqk6vl35el174g92hxkgz': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },  
        }

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});
    this.props.firebase.final().once('value', snapshot => {
      const finalVotes = snapshot.val();
      if (finalVotes) {
        Object.keys(finalVotes).forEach(key => {
          const newYes = this.state.recruitVotes[key]['yes'] + finalVotes[key]['yes'];
          const newNo = this.state.recruitVotes[key]['no'] + finalVotes[key]['no'];
          const newMaybe = this.state.recruitVotes[key]['maybe'] + finalVotes[key]['maybe'];
          this.setState({'recruitVotes': {
            ...this.state.recruitVotes,
            [key]: {
              yes: newYes,
              no: newNo,
              maybe: newMaybe
            }
          }})
        });
      }
      this.props.firebase.final().set(this.state.recruitVotes, error => {
        if (error) {
          console.log('something went wrong');
        } else {
          console.log('successfully updated votes');
          this.props.history.push('/home')
        }
      })
    });
  }

  componentDidMount() {
    const recruitsDict = this.state.recruitsDict;
    var recruitsList = [];
    const handleChange = val => {
      const recruit = val.target.value.split(',');
      switch (recruit[0]) {
        case 'yes': 
          this.setState({'recruitVotes': {
            ...this.state.recruitVotes,
            [recruit[1]]: {
            yes: 1,
            no: 0,
            maybe: 0
          }}});
          break;
        case 'no':
          this.setState({'recruitVotes':{
            ...this.state.recruitVotes,

            [recruit[1]]: {
            yes: 0,
            no: 1,
            maybe: 0
          }}});
          break;
        default:
          this.setState({'recruitVotes':{
            ...this.state.recruitVotes,

            [recruit[1]]: {
            yes: 0,
            no: 0,
            maybe: 1
          }}});
          break;
      }
    };

    Object.keys(recruitsDict).forEach(key => {
      recruitsList.push(
        <Row key={key} className="vote">
            <p>{recruitsDict[key]}</p>
            <div>
              <Form.Check custom inline value={"yes,"+key} onChange={handleChange} label="Yes" type="checkbox" id={`custom-inline-checkbox-1-${key}`}/>
              <Form.Check custom inline value={"no,"+key} onChange={handleChange} label="No" type="checkbox" id={`custom-inline-checkbox-2-${key}`}/>
              <Form.Check custom inline value={"maybe,"+key} onChange={handleChange} label="Maybe" type="checkbox" id={`custom-inline-checkbox-3-${key}`}/>
            </div>
          </Row>
      );
    });
    this.setState({recruitsList: recruitsList, loading: true});
  }

  render() {
    const {recruitsList, loading} = this.state;
    return(
      <Col className="recruitVotes">
        {this.state.submitted ?
          <div className="loading">
            <img src={Loading} alt="loading gif" className="spinner"/>
          </div> : <div></div>}
        <Form onSubmit={this.handleSubmit} className="recruitForm">
          {loading ? recruitsList : <div></div>}
          <Button className="customButton" type="submit">Submit</Button>
        </Form>
      </Col>
    );
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Final);