import React, { Component } from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';
import LoginForm from '../components/LoginForm';

class LoginContainer extends Component {
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
      this.props.alert()
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
    console.log(this.state.user)
    return (
       <LoginForm
	     handleFormSubmit={this.handleFormSubmit}
		 handleInputChange={this.handleInputChange}
 	   />
    )
  }
}

export default LoginContainer;
