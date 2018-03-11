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

    const inputStyle = {
      marginBottom: '20px'
    }
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

    return (
      <div>

        <form
          onSubmit={this.handleFormSubmit}
        >
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
