import React, { useState, useEffect } from 'react'
import { customerGetAll } from '../api/CrmAppApi'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory, Link } from "react-router-dom"

const CustomersListPage = () => {
  const [customers, setCustomers] = useState(null)
  const history = useHistory()

  useEffect(() => {
    customerGetAll().then(d => setCustomers(d))
  }, [])

  function handleClick(pk, customerName) {
    history.push(`/customers/${pk}/edit/`, { name: customerName });
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
          </li>)}
      </ul>
    </div >
  )
}

export default CustomersListPage