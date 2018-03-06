import React, { Component } from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
        name: ''
      }
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault()

    axios.post('/auth/login', {
      email: this.state.user.email,
      password: this.state.user.password
    })
    .then((res) => {
      console.log(res)
      Auth.authenticateUser(res.data.token, res.data.user.email, res.data.user.name);
      this.props.history.push('/');
    })
    .catch((errors) => {
      this.setState({
        errors
      })
    })
  }

  handleInputChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user
    })
  }

  render() {

    return (
      <div>
        <h1 style={{'fontWeight': 'bolder'}}>Login</h1>
        <form
          onSubmit={this.handleFormSubmit}
        >
          Email:
          <input
            name='email'
            onChange={this.handleInputChange}
          />
          Password:
          <input
            name='password'
            onChange={this.handleInputChange}
          />
          <button
            type='submit'
          >
            Log In
          </button>
        </form>
      </div>

    )
  }
}

export default LoginPage;
