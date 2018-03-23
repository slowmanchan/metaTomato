import React, { Component } from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';
import LoginForm from '../components/LoginForm';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorData: {},
      isLoading: false,
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

    this.setState({
      isLoading: true
    })

    axios.post('/auth/login', {
      email: this.state.user.email,
      password: this.state.user.password
    })
    .then((res) => {
      Auth.authenticateUser(res.data.token, res.data.user.email, res.data.user.name);

      message.success('You have logged in Successfully!!');
      this.setState({
        isLoading: false
      })
      this.props.history.push('/');
    })
    .catch((errors) => {
      console.log(errors)
      this.setState({
        errorData: errors.response.data,
        isLoading: false
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

         errorData={this.state.errorData}
         isLoading={this.state.isLoading}
         handleOk={this.props.handleOk}
         handleCancel={this.props.handleCancel}
         handleFormSubmit={this.handleFormSubmit}
         handleInputChange={this.handleInputChange}
 	   />
    )
  }
}

export default withRouter(LoginContainer);
