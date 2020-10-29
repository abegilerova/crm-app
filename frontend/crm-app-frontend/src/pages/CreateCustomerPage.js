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
  const [isFistNameInvalid, setIsFirstNameInvalid] = React.useState(false);
  const [isLastNameInvalid, setIsLastNameInvalid] = React.useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = React.useState(false);


  const history = useHistory()


  let tokenCrmApp = localStorage.getItem('token')

  const textChanged = (event) => {
    const currentInput = event.target.value;
    const targetId = event.target.id;
    const isInputInvalid = currentInput === '';

    const isEmailInputInvalid = validateEmail(currentInput)

    if (targetId === 'FN')
      setIsFirstNameInvalid(isInputInvalid);
    else if (targetId === 'LN')
      setIsLastNameInvalid(isInputInvalid);
    else if (targetId === 'EMAIL')
      setIsEmailInvalid(isEmailInputInvalid);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(firstName)

    const customerObject = {
      firstName: event.target.elements[0].value,
      lastName: event.target.elements[1].value,
      email: event.target.elements[3].value
    }

    let invalidFN = customerObject.firstName === "";
    let invalidLN = customerObject.lastName === "";
    let invalidEmail = validateEmail(customerObject.email)

    setIsFirstNameInvalid(invalidFN);
    setIsLastNameInvalid(invalidLN);
    setIsEmailInvalid(invalidEmail);

    if (invalidFN || invalidLN || invalidEmail)
      return;



    customerCreate(firstName, lastName, phoneNumber, emailAddress, dateOfBirth, ssn, address, tokenCrmApp)
      .then(data => {
        console.log(data)
        history.push(`/customers/${data.pk}`)
      })
      .catch(err => console.error(err))
  }

  const validateEmail = (emailAddress) => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("validate email ", emailRex.test(emailAddress))
    return !emailRex.test(emailAddress)
  }

  return (
    <div>
      <h1> Create a new Customer</h1>

      <Form onSubmit={handleSubmit}>
        <Row form>
          <Form.Group controlId="formCustomerFirst">
            <Form.Label>Customer First Name</Form.Label>
            <Form.Control type="text" id="FN" invalid={isFistNameInvalid} onChange={(e) => textChanged} onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            {isFistNameInvalid && <FormFeedback style={{ color: "red" }}>First Name cannot be left blank</FormFeedback>}
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer Last Name</Form.Label>
            <Form.Control type="text" id="LN" invalid={isLastNameInvalid} onChange={(e) => setLastName(e.target.value)} value={lastName} />
            {isLastNameInvalid && <FormFeedback style={{ color: "red" }} >First Name cannot be left blank</FormFeedback>}
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer Phone number</Form.Label>
            <Form.Control type="text" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer Email address</Form.Label>
            <Form.Control type="text" id="EMAIL" invalid={isEmailInvalid} onChange={(e) => textChanged} onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
            {isEmailInvalid && <FormFeedback style={{ color: "red" }} >Email format is  incorrect</FormFeedback>}
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer DOB</Form.Label>
            <Form.Control type="datetime" placeholder="YYYY-MM-DD" onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} />
          </Form.Group>

          <br></br>

          <Form.Group controlId="formCustomerCreation">
            <Form.Label>Customer SSN</Form.Label>
            <Form.Control type="text" onChange={(e) => setSsn(e.target.value)} value={ssn} />
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