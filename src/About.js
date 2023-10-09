import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const About = () => {

  const [usersData, setusersData] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5000/api/allusers')
      .then((userData) => {
        console.table(userData.data)
        setusersData(userData.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])

  const deleteUser = (userId) => {
    axios.post('http://localhost:5000/api/deleteuser',
      {
        uid: userId
      }).then((result) => {
        alert("User Deleted")
        window.location.reload(false)
      }).catch((err) => {

      });
  }

  return (
    <div>
      <h1>USERS</h1>
      <Container>
        <Row>
          {
            usersData.map((user) => {
              return (
                <Col lg="4" md="6" sm="12">
                  <Card>
                    <Card.Title>{user.UserName}</Card.Title>
                    <Card.Body>
                      <p>{user.UserMobile}</p>
                      <p>{user.UserGender}</p>
                      <p>{user.UserEmail}</p>
                      <p>{user._id}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => deleteUser(user._id)}>Delete</Button>
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

export default About