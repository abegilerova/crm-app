const BASE_URL = 'http://localhost:8000/crm_app/';

export const customerGetAll = () => {
  return fetch(`${BASE_URL}customers`)
    .then((response) => response.json())
}

export const customerCreate = (first_name, last_name, phone_number, email_address, date_of_birth, ssn, address) => {
  return fetch(`${BASE_URL}customers/`, {
    method: 'post',
    body: JSON.stringify({
      'first_name': first_name,
      'last_name': last_name,
      'phone_number': phone_number,
      'email_address': email_address,
      'date_of_birth': date_of_birth,
      'ssn': ssn,
      'address': address

    }),
    headers: { "Content-Type": "application/json" }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP status " + response.status)
      }
      return response.json()
    })
}





