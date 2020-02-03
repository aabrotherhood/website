import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import './styles.scss';

class Pillars extends Component {
  render() {
    return (
      <Col className="pillars justify-content-center" xs={10}>
        <p className="pillarsMain">Three Pillars</p>
        <Row>
          <Col className="pillarsCol">
            <p className="pillarsTitle">Service</p>
            <p className="pillarsDetail">
              AAB believes that the collective organization of passionate 
              individuals serves best to foster a culture of service and 
              transform communities. Whether we are preparing the Harvard 
              Square Homeless Shelter to open its doors for the season, cleaning 
              along the Charles River, or going on Habitat for Humanity builds, 
              we regularly engage in projects to improve the environment and 
              institutions around us. AAB is committed to working with any and 
              all groups who wish to create a more vibrant community based on 
              civic participation and collaborative partnerships.</p>
          </Col>
          <Col className="pillarsCol">
            <p className="pillarsTitle">Brotherhood</p>
            <p className="pillarsDetail">
              Since its founding, AAB has guided dozens of young men through their 
              undergraduate careers at Harvard. The group's horizontal structure 
              ensures that every voice is respected, and our close-knit membership 
              provides every member the opportunity to be an active and contributing 
              force within the organization. At its core, AAB is committed to exploring 
              the often neglected issue of Asian American masculinity. We embody the ideal 
              that demographics of all colors and genders should be represented in leadership 
              during and after our time at Harvard.
            </p>
          </Col>
          <Col className="pillarsCol">
            <p className="pillarsTitle">Activism</p>
            <p className="pillarsDetail">
              Our organization is also a force for political and social consciousness. AAB joins 
              a rich history of ethnic organization on Harvard's campus, promoting discussions 
              on the state of Asian-America through political, cultural, migratory, and even 
              culinary and medical perspectives. AAB is proud to host Reflections, an end-of-year 
              celebration of graduating seniors who have made significant contributions to Asian 
              American community. To raise awareness of Asian American politicians, musical artists, 
              cultural icons, and journalists, AAB has invited to campus many leaders within our community.
            </p>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Pillars;