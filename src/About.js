import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'

const About = () => {

  const [usersData, setusersData] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [selectedUser, setselectedUser] = useState({
    UserName: "",
    UserGender: "",
    UserEmail: "",
    UserMobile: ""
  })

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

  const updateUser = () => {
    const updata = {
      uid: selectedUser._id,
      UserMobile: selectedUser.UserMobile
    }

    axios.post("http://localhost:5000/api/updateuser", updata)
      .then((result) => {
        alert("User Updated")
        setIsShow(false)
        window.location.reload(false)

      }).catch((err) => {
        alert("Update fail")
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
                      <Button className='m-2' onClick={() => {
                        setselectedUser(user)
                        setIsShow(true)
                      }}>Update</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <Modal show={isShow} onHide={() => setIsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control type="text" value={selectedUser.UserName} placeholder='Enter Name' />
            <Form.Control type="text" value={selectedUser.UserMobile}
              onChange={(e) => setselectedUser({ ...selectedUser, UserMobile: e.target.value })}
              placeholder='Enter Mobile' />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => updateUser()}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default About