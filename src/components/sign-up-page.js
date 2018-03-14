import React, { Component } from 'react';
import axios from 'axios';
import { Input, Icon, Button } from 'antd';

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

      <div>


        <Input
          style={this.inputStyle}
          placeholder="Enter your name..."
          prefix={<Icon type='key' style={{ color: 'rgba(0,0,0,.25)' }} />}
          name='name'
          onChange={this.handleInputChange}
        />
        <br/><br/>
        <Input
          style={this.inputStyle}
          placeholder="Enter your email"
          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)'}} />}
          name='email'
          onChange={this.handleInputChange}
        />
        <br/><br/>
        <Input
          style={this.inputStyle}
          placeholder="Password please..."
          prefix={<Icon type='key' style={{ color: 'rgba(0,0,0,.25)' }} />}
          name='password'
          onChange={this.handleInputChange}
        />

        <br/><br/>
        <Button
          style={{ width: '100%' }}
          type='primary'
          onClick={this.handleFormSubmit}
        >
          Sign Up
        </Button>


      </div>
    )
  }
}

export default SignUpPage;
