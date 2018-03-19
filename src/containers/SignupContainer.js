import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from '../components/SignupForm';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';

class SignupContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      errorData: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true
    })
    axios.post('/auth/signup', {
      email: this.state.user.email,
      password: this.state.user.password,
      name: this.state.user.name
    })
    .then((res) => {
      localStorage.setItem('successMessage', res.message);
      message.success('You have Signed up successfully! Please check you email!')
      this.setState({
        isLoading: false
      })
      this.props.history.push('/');
    })
    .catch((errors) => {
      this.setState({
        errorData: errors.response.data,
        isLoading: false
      })
    })
  }

  render() {
    return (
      <SignupForm
        isLoading={this.state.isLoading}
        errorData={this.state.errorData}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
      />
    )
  }
}

export default withRouter(SignupContainer);
