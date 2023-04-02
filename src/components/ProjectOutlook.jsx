import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Data } from './Data'
const ProjectOutlook = () => {
  return (
    <Container id='project'>
      <h2 className='text-center  mb-5'>
        Frontend Mentor <br /> Project Outlook
      </h2>
      <Row
        className=' g-4 pb-4 justify-content-center  '
        style={{
          '@media (min-width:992px)': {
            // width: '50%',
          },
        }}
      >
        {Data.map((item) => (
          <Col
            className=''
            sm={6}
            md={4}
            style={{
              '@media (min-width:767px)': {
                minWidth: '1rem',
              },
            }}
          >
            <Card key={item.id}>
              <Card.Img src={item.project}></Card.Img>
              <Card.Body>
                <Card.Title>
                  <h3 className=''>{item.title}</h3>
                </Card.Title>
                <Card.Text>
                  <p className=''> {item.text}</p>
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
