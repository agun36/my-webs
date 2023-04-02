import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'

const FooterBar = () => {
  return (
    <div id='contact' className='bg-primary footer'>
      <Container>
        <Row className='p-4'>
          <Col sm={4}>
            <h3 className='text-info'>
              AKi<sub>n</sub>
              <sup className='text-light'>Tech</sup>
            </h3>
            <p className='text-light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Col>

          <Col sm={4}>
            <h3 className='text-light'>Contact Us</h3>
            <p className='text-light'>Email: aguntoroti10@gmail.com</p>
            <p className='text-light'>Phone: +234-706-047-629-1</p>
          </Col>
          <Col sm={4} className='media-icons'>
            <Stack direction='horizontal' gap={3} className='media-icon'>
              <div>
                <i className='fa fa-facebook'></i>
              </div>
              <div>
                <i className='fa fa-github'></i>
              </div>
              <div>
                <i className='fa fa-instagram'></i>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterBar
