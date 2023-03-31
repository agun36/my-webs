import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Data } from './Data'
const ProjectOutlook = () => {
  return (
    <Container id='project'>
      <h2 className='text-center  mb-5'>
        Frontend Mentor <br /> Project Outlook
      </h2>
      <Row className=' g-4 justify-content-center m-5 p-5 '>
        {Data.map((item) => (
          <Col xs={12} md={6} style={{ maxWidth: '20rem' }}>
            <Card key={item.id} className=''>
              <Card.Img src={item.project}></Card.Img>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <Button>{item.link}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {/* <Col md={6} className='mb-3 cards-items'>
          <Card>
            <Card.Img variant='top' src={creditcard} />
            <Card.Body>
              <Card.Title className=''>Credit card</Card.Title>
              <Card.Text className=' '>
          
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
        </Col> */}
        {/* <Col md={6} className='mb-3'>
          <Card style={{ width: 'auto' }}>
            <Card.Img variant='top' src={flyo} />
            <Card.Body>
              <Card.Title>flyo</Card.Title>
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
        </Col> */}
      </Row>
      {/* <Row className=' d-flex justify-contents-center w-100 m-auto'>
        <Col xs={12} md={6} className='mb-4'>
          <Card>
            <Card.Img variant='top' src={Mac} />
            <Card.Body>
              <Card.Title>clipboard</Card.Title>
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
        <Col xs={12} md={6}>
          <Card>
            <Card.Img variant='top' src={snap} />
            <Card.Body>
              <Card.Title>snap Dropdown</Card.Title>
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
      </Row> */}
    </Container>
  )
}

export default ProjectOutlook
