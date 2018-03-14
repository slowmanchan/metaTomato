import React, { Component } from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';
import { Input, Icon, Button, notifcation } from 'antd';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
        name: ''
      },
      visible: false
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
        errors: errors.response.data
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

    const inputStyle = {
      marginBottom: '20px',
      width: '300px'
    }
    return (
      <div>

        <form
          onSubmit={this.handleFormSubmit}
        >
          <Input
            style={inputStyle}
            placeholder="Enter your email"
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)'}} />}
            name='email'
            onChange={this.handleInputChange}
          />
          <span>{this.state.errors.errors ? this.state.errors.errors.email : null}</span>
          <br/>
          <Input
            style={inputStyle}
            placeholder="Password please..."
            prefix={<Icon type='key' style={{ color: 'rgba(0,0,0,.25)' }} />}
            name='password'
            onChange={this.handleInputChange}
          />
          <span>{this.state.errors.errors ? this.state.errors.errors.password : null}</span>
          <br/>
          <Button
            style={{ width: '100%' }}
            type='primary'
            onClick={this.handleFormSubmit}
          >
            Log In
          </Button>

        </form>
      </div>

    )
  }
}

export default LoginPage;
