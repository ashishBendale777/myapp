import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import java from './images/ic_java.jpg'
import js from './images/ic_js.png'
import py from './images/ic_py.png'


const Home = () => {
  
  const langData = [{
    langImage: java,
    langTitle: "JAVA",
    langDesc: "Funny Language"
  }, {
    langImage: js,
    langTitle: "JAVA Script",
    langDesc: "Sweet Language"
  }, {
    langImage: py,
    langTitle: "PYTHON",
    langDesc: "Easy Language"
  }, {
    langImage: py,
    langTitle: "PYTHON",
    langDesc: "Easy Language"
  }, {
    langImage: py,
    langTitle: "PYTHON",
    langDesc: "Easy Language"
  }]

  return (
    <div>
      <Container>
        <Row>
          {
            langData.map((lang) => {
              return (
                <Col lg={4} md={6} sm={12}>
                  <Card>
                    <Card.Img className='imgcard' src={lang.langImage} />
                    <Card.Title>{lang.langTitle}</Card.Title>
                    <Card.Body>
                      <p>{lang.langTitle}</p>
                      <p>{lang.langDesc}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button>Details</Button>
                    </Card.Footer>
                  </Card>
                </Col>

              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default Home