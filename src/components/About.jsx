import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import myImg from '../assets/Images/mypic.jpeg'
const About = () => {
  return (
    <Container id='about'>
      <Row className='p-5 m-5 g-5 d-flex align-items-center'>
        <Col sm={{ order: 'first' }}>
          <Image src={myImg} alt='myImg' className=' rounded-circle' />
        </Col>
        <Col sm={6} className='descriptive'>
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
