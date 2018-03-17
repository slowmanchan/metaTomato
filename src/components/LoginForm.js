import { Input, Button, Icon } from 'antd';
import React from 'react';

const LoginForm = ({ handleFormSubmit, handleInputChange }) => {
	const style = {
      input: {
		 marginBottom: '10px'
	  },
	  icon: {
		 color: 'rgba(0,0,0,.25)'
	  }
    }

    return ( 
	    <div>
		  <Input
			style={style.input}
			placeholder="Enter your email"
			prefix={<Icon type='user' style={style.icon} />}
			name='email'
			onChange={(e) => { handleInputChange(e)}}
		  />
		  <br/><br/>
		  <Input
			style={style.input}
			placeholder="Password please..."
			prefix={<Icon type='key' style={style.icon} />}
			name='password'
			onChange={(e) => { handleInputChange(e) }}
		  />
		  <br/><br/>
		  <Button
			style={{ width: '100%' }}
			type='primary'
			onClick={(e) => { handleFormSubmit(e) }}
		  >
			Log In
		  </Button>
		</div>
	  )
}
 
export default LoginForm;