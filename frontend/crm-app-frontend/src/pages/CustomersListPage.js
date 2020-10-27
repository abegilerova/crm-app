import React, { useState, useEffect } from 'react'
import { customerGetAll, customerDelete } from '../api/CrmAppApi'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory, Link } from "react-router-dom"
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { Table } from 'reactstrap';


const CustomersListPage = () => {
  const [customers, setCustomers] = useState(null)
  const history = useHistory()

  let tokenCrmApp = localStorage.getItem('token')

  useEffect(() => {
    customerGetAll(tokenCrmApp).then(d => setCustomers(d))
  }, [])

  function handleClick(pk, customerName) {
    history.push(`/customers/${pk}/edit/`, { name: customerName });
  }

  function handleDelete(pk, tokenCrmApp) {
    confirmAlert({
      title: 'Confirm to delete customer',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          //onClick: () => alert('Click Yes')
          onClick: () => customerDelete(pk, tokenCrmApp)
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
      <h1> List of Customers Page </h1>
      <LinkContainer to="/customers/new">
        <Button>Create a new customer</Button>
      </LinkContainer>
      {/* <ul>
        {customers && customers.map(item =>
          <li key={item.pk}>
            <Link to={`/customers/${item.pk}`}>{item.first_name}</Link>
            <Button onClick={() => handleClick(item.pk, item.first_name)}>Edit</Button>

            <Button onClick={() => handleDelete(item.pk)}>Delete</Button>
          </li>)}
      </ul> */}

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th> DOB</th>
            <th> SNN</th>
            <th> Address</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>
              {customers && customers.map(item => <Link to={`/customers/${item.pk}`}>{item.first_name}</Link>)}
            </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}

          {customers && customers.map(customer =>

            <tr>
              <th scope="row">
                <Link to={`/customers/${customer.pk}`}>{customer.pk}</Link>
              </th>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.phone_number}</td>
              <td>{customer.email_address}</td>
              <td>{customer.date_of_birth}</td>
              <td>{customer.ssn}</td>
              <td>
                {customer.address}

                <Button onClick={() => handleClick(customer.pk, customer.first_name)}>Edit</Button>

                <Button onClick={() => handleDelete(customer.pk)}>Delete</Button>
              </td>
            </tr>

          )}
        </tbody>
      </Table>


    </div >
  )
}

export default CustomersListPage