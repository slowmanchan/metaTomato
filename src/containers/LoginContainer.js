import React, { Component } from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';
import LoginForm from '../components/LoginForm';
import { withRouter } from 'react-router-dom';

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
      Auth.authenticateUser(res.data.token, res.data.user.email, res.data.user.name);
      this.props.handleOk();
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
       <LoginForm
         handleOk={this.props.handleOk}
         handleCancel={this.props.handleCancel}
         handleFormSubmit={this.handleFormSubmit}
         handleInputChange={this.handleInputChange}
 	   />
    )
  }
}

export default withRouter(LoginContainer);
