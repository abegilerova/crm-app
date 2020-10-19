import React, { useState } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { customerEdit } from '../api/CrmAppApi'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const EditCustomerPage = ({ location }) => {
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [newEmailAddress, setNewEmailAddress] = useState('')
  const [newDateOfBirth, setNewDateOfBirth] = useState('')
  const [newSsn, setNewSsn] = useState('')
  const [newAddress, setNewAddress] = useState('')


  const history = useHistory()
  const { pk } = useParams()

  console.log("pk edit ", pk)


  const handleSubmit = (event) => {
    event.preventDefault()
    customerEdit(pk, newFirstName, newLastName, newPhoneNumber, newEmailAddress, newDateOfBirth, newSsn, newAddress)
      .then(data => {
        history.push(`/customers/${data.pk}`)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      {/* <h1> Edit Customer {location.state}</h1> */}
      <h1>Edit Customer </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCustomerName">
          <Form.Label>Customer first name</Form.Label>
          <Form.Control type="text" onChange={(e) => setNewFirstName(e.target.value)} value={newFirstName} />
        </Form.Group>

        <br></br>

        <Form.Group controlId="formCustomerCreation">
          <Form.Label>Customer last Name</Form.Label>
          <Form.Control type="text" onChange={(e) => setNewLastName(e.target.value)} value={newLastName} />
        </Form.Group>

        <br></br>

        <Form.Group controlId="formCustomerCreation">
          <Form.Label>Customer Phone number</Form.Label>
          <Form.Control type="text" onChange={(e) => setNewPhoneNumber(e.target.value)} value={newPhoneNumber} />
        </Form.Group>

        <br></br>

        <Form.Group controlId="formCustomerCreation">
          <Form.Label>Customer Email address</Form.Label>
          <Form.Control type="text" onChange={(e) => setNewEmailAddress(e.target.value)} value={newEmailAddress} />
          {/* {isEmailValid && <FormFeedback >Must provide value for email field</FormFeedback>} */}
        </Form.Group>

        <br></br>

        <Form.Group controlId="formCustomerCreation">
          <Form.Label>Customer DOB</Form.Label>
          <Form.Control type="datetime" placeholder="YYYY-MM-DD" onChange={(e) => setNewDateOfBirth(e.target.value)} value={newDateOfBirth} />
        </Form.Group>

        <br></br>

        <Form.Group controlId="formCustomerCreation">
          <Form.Label>Customer SSN</Form.Label>
          <Form.Control type="password" onChange={(e) => setNewSsn(e.target.value)} value={newSsn} />
        </Form.Group>

        <br></br>

        <Form.Group controlId="formCustomerCreation">
          <Form.Label>Customer Address</Form.Label>
          <Form.Control type="text" onChange={(e) => setNewAddress(e.target.value)} value={newAddress} />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default EditCustomerPage