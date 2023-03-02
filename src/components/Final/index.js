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
        '2zg2ucutigk9rgcwj0joxr': "Eric Li (S)",
        '33lsglc0b621ux54n4jgb7': "Khanh Le",
        '512fa2i0cv84a1o37gbdan': "Brandon Kwon",
        '5sh19dgh3dnnk8c7fstp': "Henry Xuan",
        '5u7vjkmkdhs8tex3f8xd9a': "Justin Liu",
        '7tp8c874unoklhbk13vdd': "Adam Mohamed",
        '88shi35m5ji82hemr7r8el': "Sean Meng",
        '8fhm29j59rhb2o1v6m84k': "Albert Shin",
        '8hzdceh877jyt8lq54417': "Dylan Rhee", 
        '9m7ve4wbp6g8f68iutz42b': "Jeffrey Shi", 
        'be1ts50h4b5ctjp5h0y96c': "Sean Yu",
        'eeomh5olx9etzkh1qk1eec': "Hank Yang", 
        'f53rp5ytvp5zq4z0igcqc8': "Kevin Wang",
        'fsd3mu2axurk0deynjs8uk': "Eric Li", 
        'gf32p5tsvwmftqd54742n': "Kyle Neeley", 
        'gujxqelc7hjyb1z84dahp': "Matthew Kim", 
        'h0t9714q3zsy8fnawz4td': "Josh Zhang", 
        'i6zc72qj8fjviw1d8pvim9': "Lucie Bai", 
        'i8405c2mg58wluy19tei9': "Connor Lee", 
        'irl9p0suuxjsouk4ujwwe': "Beier Nelson", 
        'joxmf1kaysb2lsiov4xfjb': "Victor Ghosh", 
        'khtjyhi15pgrvz5esfl8j': "Minkai Li", 
        'kwozd2fs34amzjunqu28f': "Nick Gu", 
        'mha40ib7cmj6km15409509': "Aidan Chen",
        'mnlwyf46ody0kxgrc91i': "Ryan Jung", 
        'mwalfhyjo357ot3visndc': "Jane Oh", 
        'notn3kh17obrptqqp3ltn': "Lei Hanna",
        'o3vcfpnqd99s9dsjtyjsl': "Francis Puente",
        'q4pdzs9av1dtlihcqoqy3k': "Kelly Nguyen",
        'q8a1a9qk6sqtquuizop6r': "Roy Han",
        'qds5qs4m46jmhlj84tt6al': "Derek Zheng",
        'rvmvpx4iq2nj5ndkhi7hu': "Dylan Jin-Ngo",
        'rwwqzx9aopcsw0iifqocp': "Darren Tran",
        'w5g1doaefnon6356r49r8': "Atticus Lee",
        'ys8siehhxshfiyq6zztnfl': "Aidan Zhou", 
        'yua2bcfchhdrfnqiogunz': "Lauryn Wilson",  },
        loading: false,
        'recruitVotes': {
          '2zg2ucutigk9rgcwj0joxr': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '33lsglc0b621ux54n4jgb7': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '512fa2i0cv84a1o37gbdan': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '5sh19dgh3dnnk8c7fstp': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '5u7vjkmkdhs8tex3f8xd9a': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '7tp8c874unoklhbk13vdd': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '88shi35m5ji82hemr7r8el': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '8fhm29j59rhb2o1v6m84k': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '8hzdceh877jyt8lq54417': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '9m7ve4wbp6g8f68iutz42b': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'be1ts50h4b5ctjp5h0y96c': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'eeomh5olx9etzkh1qk1eec': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'f53rp5ytvp5zq4z0igcqc8': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'fsd3mu2axurk0deynjs8uk': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'gf32p5tsvwmftqd54742n': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'gujxqelc7hjyb1z84dahp': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'h0t9714q3zsy8fnawz4td': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'i6zc72qj8fjviw1d8pvim9': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'i8405c2mg58wluy19tei9': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'irl9p0suuxjsouk4ujwwe': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'joxmf1kaysb2lsiov4xfjb': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'khtjyhi15pgrvz5esfl8j': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'kwozd2fs34amzjunqu28f': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'mha40ib7cmj6km15409509': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'mnlwyf46ody0kxgrc91i': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'mwalfhyjo357ot3visndc': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'notn3kh17obrptqqp3ltn': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'o3vcfpnqd99s9dsjtyjsl': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'q4pdzs9av1dtlihcqoqy3k': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'q8a1a9qk6sqtquuizop6r': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'qds5qs4m46jmhlj84tt6al': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'rvmvpx4iq2nj5ndkhi7hu': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'rwwqzx9aopcsw0iifqocp': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'w5g1doaefnon6356r49r8': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ys8siehhxshfiyq6zztnfl': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'yua2bcfchhdrfnqiogunz': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
           
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