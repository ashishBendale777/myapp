import React, { useState } from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'

const Contact = () => {

  const [fullName, setfullName] = useState("")

  function onSubmit() {
    console.log(fullName)
  }
  return (
    <div className='page'>
      <Form>
        <FormGroup>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type='text'
            onChange={(e) => setfullName(e.target.value)}
            placeholder='Enter Name'></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter Email'></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Mobile No</Form.Label>
          <Form.Control type='number' placeholder='Enter Mobile Nos'></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Label>Gender</Form.Label>
          <Form.Check type='radio' name="gender" label="Male"></Form.Check>
          <Form.Check type='radio' name="gender" label="FeMale"></Form.Check>
        </FormGroup>

        <FormGroup>
          <Form.Label>Course</Form.Label>
          <Form.Check type='checkbox' name="course" label="MCA"></Form.Check>
          <Form.Check type='checkbox' name="course" label="BCA"></Form.Check>
        </FormGroup>
        <Button onClick={() => onSubmit()}>Submit</Button>

      </Form>
      {/* <h5>{fullName}</h5> */}
    </div>
  )
}

export default Contact