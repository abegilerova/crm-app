import React, { useState, useEffect } from 'react'
import { customerGetAll, customerDelete } from '../api/CrmAppApi'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory, Link } from "react-router-dom"
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'


const CustomersListPage = () => {
  const [customers, setCustomers] = useState(null)
  const history = useHistory()

  useEffect(() => {
    customerGetAll().then(d => setCustomers(d))
  }, [])

  function handleClick(pk, customerName) {
    history.push(`/customers/${pk}/edit/`, { name: customerName });
  }

  function handleDelete(pk, customerName) {
    confirmAlert({
      title: 'Confirm to delete customer',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          //onClick: () => alert('Click Yes')
          onClick: () => customerDelete(pk)
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
      <h1> Customers Page </h1>
      <LinkContainer to="/customers/new">
        <Button>Create a new customer</Button>
      </LinkContainer>
      <ul>
        {customers && customers.map(item =>
          <li key={item.pk}>
            <Link to={`/customers/${item.pk}`}>{item.first_name}</Link>
            <Button onClick={() => handleClick(item.pk, item.first_name)}>Edit</Button>

            <Button onClick={() => handleDelete(item.pk)}>Delete</Button>
          </li>)}
      </ul>
    </div >
  )
}

export default CustomersListPage