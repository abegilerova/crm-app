import React, { useState, useEffect } from 'react'
import { customerGet } from '../api/CrmAppApi'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CustomerPage = () => {
  // const [djangoObject, setDjangoObject] = useState(null)
  const [customer, setCustomer] = useState(null)
  const { pk } = useParams()

  useEffect(() => {
    customerGet(pk).then(d => setCustomer(d))
    console.log('pk', pk)
    console.log("customer ", customer)
  }, [pk])

  return (
    <div>
      <h1> {customer && customer.first_name}</h1>
      <ul>

      </ul>
    </div>
  )
}

export default CustomerPage
