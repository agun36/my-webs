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
          <Col xs={12} sm={6} md={6} style={{ maxWidth: '18rem' }}>
            <Card key={item.id} className=''>
              <Card.Img src={item.project}></Card.Img>
              <Card.Body>
                <Card.Title>
                  <h3 className='mt-3'>{item.title}</h3>
                </Card.Title>
                <Card.Text>
                  <p className='mb-3'> {item.text}</p>
                </Card.Text>
                <Button>{item.link}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProjectOutlook
