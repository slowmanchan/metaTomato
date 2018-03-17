import React from 'react';
import { Input, Icon, Button } from 'antd';

const SignupForm = ({ handleFormSubmit, handleInputChange }) => {
	const style = {
      input: {
		 marginBottom: '20px'
	  },
	  icon: {
		 color: 'rgba(0,0,0,.25)'
	  },
	  button: {
		  width: '100%'
	  }
    }
	
	return (
      <div>
        <Input
          style={style.input}
          placeholder="Enter your name..."
          prefix={<Icon type='key' style={style.icon} />}
          name='name'
          onChange={(e) => { handleInputChange(e)}}
        />
        <Input
          style={style.input}
          placeholder="Enter your email"
          prefix={<Icon type='user' style={style.icon} />}
          name='email'
          onChange={(e) => { handleInputChange(e)}}
        />
        <Input
          style={style.input}
          placeholder="Password please..."
          prefix={<Icon type='key' style={style.icon} />}
          name='password'
          onChange={(e) => { handleInputChange(e)}}
        />   
        <Button
          style={style.button}
          type='primary'
          onChange={() => { handleFormSubmit }}
        >
          Sign Up
        </Button>
      </div>
	)
}

export default SignupForm;