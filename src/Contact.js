import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


const Contact = () => {
  const [fullName, setfullName] = useState("")
  const [email, setemail] = useState("")
  const [mobile, setmobile] = useState("")
  const [gender, setgender] = useState("")

  const [selectedCourses, setCourses] = useState([])

  function submitForm() {
    console.log(fullName)
    if (selectedCourses.length == 0) {
      alert('Please Select course')
    } else {
      console.log(selectedCourses)

    }
    const userdata = {
      UserName: fullName,
      UserEmail: email,
      UserMobile: mobile,
      UserGender: gender
    }
    postData(userdata)
  }

  const postData = (userData) => {
    axios.post("http://localhost:5000/api/adduser", userData)
      .then((result) => {
        alert("USER SAVED")
      }).catch((err) => {
        alert('ERR')
      });
  }


  function handleCourseChange(event) {
    const { value, checked } = event.target
    if (checked) {
      setCourses([...selectedCourses, value])
    } else {
      setCourses((prev) => (
        prev.filter((c) => c !== value)
      ))
    }
  }


  return (
    <div className='page'>
      <Form>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control onChange={(e) => setfullName(e.target.value)} type='text' placeholder='Enter ' />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setemail(e.target.value)} type='email' placeholder='Enter Email' />
        </Form.Group>

        <Form.Group>
          <Form.Label>Mobile No</Form.Label>
          <Form.Control type='number'
            onChange={(e) => setmobile(e.target.value)}
            placeholder='Enter Mobile' />
        </Form.Group>

        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Check type='radio' value="M"
            onChange={(e) => setgender(e.target.value)}
            name='gender' label="MALE" />
          <Form.Check type='radio' value="F"
            onChange={(e) => setgender(e.target.value)}
            name='gender' label="FEMALE" />
        </Form.Group>

        {/* <Form.Group>
          <Form.Label>Courses</Form.Label>
          <Form.Check onChange={(e) => handleCourseChange(e)} type='checkbox' name='course' value="MCA" label="MCA" />
          <Form.Check onChange={(e) => handleCourseChange(e)} type='checkbox' name='course' value="BCA" label="BCA" />
          <Form.Check onChange={(e) => handleCourseChange(e)} type='checkbox' name='courser' value="BSC" label="BSC" />
          <Form.Check onChange={(e) => handleCourseChange(e)} type='checkbox' name='course' value="MSC" label="MSC" />
        </Form.Group> */}

        <Button onClick={() => submitForm()}>OK</Button>
      </Form>
    </div>
  )
}

export default Contact
