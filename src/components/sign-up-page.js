import React, { Component } from 'react';

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
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user
    });
  }

  render() {
    console.log(this.state.user)
    return (
      <form>
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
        Name:
        <input
          name='name'
          onChange={this.handleInputChange}
        />
        <button type='submit'>Sign Up</button>
      </form>
    )
  }
}

export default SignUpPage;
