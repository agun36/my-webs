import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const About = () => {
  return (
    <Container id='about'>
      <Row className='p-5 m-5 g-5 justify-content-center d-flex align-items-center'>
        <Col className='descriptive text-center'>
          <h1>
            Hi,
            <span className='text-primary'>
              I'm Akindele <br /> Agun
            </span>
          </h1>
          <p>
            I'm a Software Engineer that welcomes challenges and Frontend Design
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
