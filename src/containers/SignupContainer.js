import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from '../components/SignupForm';

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
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

    axios.post('/auth/signup', {
      email: this.state.user.email,
      password: this.state.user.password,
      name: this.state.user.name
    })
    .then((res) => {
      localStorage.setItem('successMessage', res.message)
      this.props.alert()
    })
    .catch((errors) => {
      this.setState({
        errors
      })
    })
  }

  render() {
    return (
      <SignupForm 
	    handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
	  />
    )
  }
}

export default SignUpPage;
