import React, { useState, useEffect } from 'react'
import { customerGet, customerDelete } from '../api/CrmAppApi'
import { useHistory, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

const CustomerPage = () => {
  // const [djangoObject, setDjangoObject] = useState(null)
  const [customer, setCustomer] = useState(null)
  const { pk } = useParams()
  const history = useHistory()

  let tokenCrmApp = localStorage.getItem('token')

  useEffect(() => {
    customerGet(pk, tokenCrmApp).then(d => setCustomer(d))
    console.log('pk', pk)
    console.log("customer ", customer)
  }, [pk])


  function handleClick(pk, customerName) {
    history.push(`/customers/${pk}/edit/`, { name: customerName });
  }

  function handleDeleteButtonYesClick() {
    history.push(`/customers`)
  }

  function handleDelete(pk) {
    confirmAlert({
      title: 'Confirm to delete customer',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            customerDelete(pk, tokenCrmApp)
            handleDeleteButtonYesClick()
          }

        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  }

  return (
    <div>
      <h1> {customer && customer.first_name}</h1>
      <h1> {customer && customer.last_name}</h1>
      <Button onClick={() => handleClick(customer.pk, customer.first_name)}>Edit</Button>

      <Button onClick={() => handleDelete(customer.pk)}>Delete</Button>
      <ul>

      </ul>
    </div>
  )
}

export default CustomerPage
