import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Data } from './Data'
import { Link } from 'react-router-dom'
const ProjectOutlook = () => {
  return (
    <Container id='project'>
      <h2 className='text-center  mb-5'>
        Frontend Mentor <br /> Project Outlook
      </h2>
      <Row className=' g-4 justify-content-center  p-5 '>
        {Data.map((item) => (
          <Col xs={12} md={6} style={{ maxWidth: '20rem' }}>
            <Card key={item.id} className=''>
              <Card.Img src={item.project}></Card.Img>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <Link to={item.link}>
                  <Button
                    onClick={() => {
                      window.location.href = item.link
                    }}
                  >
                    Find More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProjectOutlook
