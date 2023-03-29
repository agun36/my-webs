import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import headingImg from '../assets/Images/headingImg.jpg'
const HeadingConcept = () => {
  return (
    <>
      <Container id='hire'>
        <Row className='p-5 d-flex align-items-center'>
          <Col sm={6}>
            I am a Software Engineering, my goal is to create robust,
            high-quality software solutions that meet the needs of my clients. I
            strive to develop innovative solutions that are easy to use and
            maintain, while providing an exceptional user experience. I am
            passionate about staying up-to-date on the latest technologies and
            applying them in the most efficient manner possible. I am also
            committed to working with my clients to ensure that the software
            solutions I develop are meeting their needs.
          </Col>
          <Col sm={6}>
            <Image className='thumbnail mb-4' src={headingImg} alt='heading' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HeadingConcept
