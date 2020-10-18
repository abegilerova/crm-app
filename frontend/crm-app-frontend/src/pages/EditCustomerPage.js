import React, { useState } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { customerEdit } from '../api/CrmAppApi'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const EditCustomerPage = ({ location }) => {
  const [newName, setNewName] = useState('')
  const history = useHistory()
  const { pk } = useParams()


  const handleSubmit = (event) => {
    event.preventDefault()
    customerEdit(pk, newName)
      .then(data => {
        history.push(`/customers/${data.pk}`)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h1> Edit Customer {location.state.name}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCustomerName">
          <Form.Label>Customer name</Form.Label>
          <Form.Control type="text" onChange={(e) => setNewName(e.target.value)} value={newName} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default EditCustomerPage