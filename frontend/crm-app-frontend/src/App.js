import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import CreateCustomerPage from './pages/CreateCustomerPage'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/customers/new" component={CreateCustomerPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App