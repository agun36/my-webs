import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import headingImg from '../assets/Images/headingImg.jpg'
const HeadingConcept = () => {
  return (
    <>
      <Container id='hire'>
        <Row className='align-items-center justify-content-center   mt-5 mb-5 pt-5  pb-5 '>
          <Col className=' text-center ' sm={6} md={8}>
            I am a Software Engineer, my goal is to create robust, high-quality
            software solutions that meet the needs of my clients. I strive to
            develop innovative solutions that are easy to use and maintain,
            while providing an exceptional user experience. I am passionate
            about staying up-to-date on the latest technologies and applying
            them in the most efficient manner possible. I am also committed to
            working with my clients to ensure that the software solutions I
            develop are meeting their needs.
          </Col>
          <Col sm={6} md={4}>
            <Image className='thumbnail mb-4' src={headingImg} alt='heading' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HeadingConcept
