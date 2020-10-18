import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { customerCreate } from '../api/CrmAppApi'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'reactstrap';
import { FormFeedback, FormText } from 'reactstrap';



const CreateCustomerPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [ssn, setSsn] = useState('')
  const [address, setAddress] = useState('')
  // const { isEmailValid, setIsEmailValid } = useState(false)

  const history = useHistory()


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(firstName)

    customerCreate(firstName, lastName, phoneNumber, emailAddress, dateOfBirth, ssn, address)
      .then(data => {
        console.log(data)
        history.push(`/customers/${data.pk}`)
      })
      .catch(err => console.error(err))
  }

  // const validateEmail = (emailAddress) => {
  //   const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  //   let isEmailValidVar = false

  //   if (emailRex.test(emailAddress)) {

  //     isEmailValidVar = true
  //   } else {
  //     isEmailValidVar = false
  //   }
  //   setIsEmailValid(isEmailValidVar)
  // }

  return (
    <div>
      <h1> Create a new Customer</h1>

      <Form onSubmit={handleSubmit}>
        <Row form>
          <Form.Group controlId="formCustomerFirst">
            <Form.Label>Customer First Name</Form.Label>
            <Form.Control type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer Last Name</Form.Label>
            <Form.Control type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer Phone number</Form.Label>
            <Form.Control type="text" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer Email address</Form.Label>
            <Form.Control type="text" onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
            {/* {isEmailValid && <FormFeedback >Must provide value for email field</FormFeedback>} */}
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer DOB</Form.Label>
            <Form.Control type="datetime" placeholder="YYYY-MM-DD" onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} />
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer SSN</Form.Label>
            <Form.Control type="password" onChange={(e) => setSsn(e.target.value)} value={ssn} />
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer Address</Form.Label>
            <Form.Control type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
          </Form.Group>

        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div >
  )
}

export default CreateCustomerPage