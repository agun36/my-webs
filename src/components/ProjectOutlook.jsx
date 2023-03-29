import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Mac from '../assets/Images/Mac.png'
import creditcard from '../assets/Images/credit-card.png'
import snap from '../assets/Images/snap.png'
import flyo from '../assets/Images/flyo.png'
const ProjectOutlook = () => {
  return (
    <Container id='project'>
      <h2 className='text-center  mb-5'>
        Frontend Mentor <br /> Project Outlook
      </h2>
      <Row className='  '>
        <Col sm={6} className='mb-3 cards-items'>
          <Card style={{ width: 'auto' }}>
            <Card.Img variant='top' src={creditcard} />
            <Card.Body>
              <Card.Title className=''>Frontend Mentor</Card.Title>
              <Card.Text className=' '>
                This project really build me a lot. It is from Mobile design to
                Desktop design.It is a two column website.
              </Card.Text>
              <div className='btn-credit'>
                <Button
                  as={Link}
                  to='https://cardnamereact.netlify.app/'
                  rel='noopener'
                  variant='primary'
                >
                  Go to credit-card access
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} className='mb-3'>
          <Card style={{ width: 'auto' }}>
            <Card.Img variant='top' src={flyo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                as={Link}
                variant='primary'
                to='https://fylo-compon.netlify.app/'
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=''>
        <Col sm={6} className='mb-4'>
          <Card style={{ width: 'auto' }}>
            <Card.Img variant='top' src={Mac} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                as={Link}
                to='https://clipboard-comp.netlify.app/'
                variant='primary'
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card style={{ width: 'auto' }}>
            <Card.Img variant='top' src={snap} />
            <Card.Body>
              <Card.Title>Frontend Mentor</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                as={Link}
                variant='primary'
                to='https://snap-dropdown.netlify.app/'
              >
                Go to snap-dropdown
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='m-5' id='project-link'>
        <Col className='d-flex justify-content-center'>
          <Button as={Link} to=''>
            Find Out More
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectOutlook
