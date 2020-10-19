import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import CreateCustomerPage from './pages/CreateCustomerPage'
import CustomersListPage from './pages/CustomersListPage'
import CustomerPage from './pages/CustomerPage'
import EditCustomerPage from './pages/EditCustomerPage'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/customers/new" component={CreateCustomerPage} />
            <Route exact path="/customers" component={CustomersListPage} />
            <Route exact path="/customers/:pk" component={CustomerPage} />
            <Route exact path="/customers/:pk/edit" component={EditCustomerPage} />

          </Switch>
        </Router>
      </div>
    )
  }
}

export default App