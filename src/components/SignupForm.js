import React from 'react';
import { Form, Row, Col, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;

const SignupForm = ({ handleFormSubmit, handleInputChange }) => {
	const style = {
      input: {

			 maxWidth: '300px'
		  },
		  icon: {
			 color: 'rgba(0,0,0,.25)'
		  },
		  button: {
			  width: '300px'
		  },
			form: {
				margin: '40px',
				textAlign: 'center'
			},
			disclaimer: {
				padding: '50px 0px',
				fontWeight: '900',
				backgroundColor: '#f5da55',
				color: 'darken(0.5, #f5da55)'
			}
  }

	return (
      <div style={style.form}>

				<Row>
					<Col xs={24} md={12}>
						<h1>Register your account dude</h1>
						<Form>
							<FormItem>


								<Input
									style={style.input}
									placeholder="Enter your name..."
									prefix={<Icon type='key' style={style.icon} />}
									name='name'
									onChange={(e) => { handleInputChange(e)}}
								/>
							</FormItem>
							<FormItem>
								<Input
									style={style.input}
									placeholder="Enter your email"
									prefix={<Icon type='user' style={style.icon} />}
									name='email'
									onChange={(e) => { handleInputChange(e)}}
								/>
							</FormItem>
							<FormItem>
								<Input
									style={style.input}
									placeholder="Password please..."
									prefix={<Icon type='key' style={style.icon} />}
									name='password'
									onChange={(e) => { handleInputChange(e)}}
								/>
							</FormItem>
							<FormItem>
								<Button
									style={style.button}
									type='primary'
									onChange={() => { handleFormSubmit }}
								>
									Sign Up
								</Button>
							</FormItem>
						</Form>
					</Col>

					<Col
						xs={24} md={12}
						style={style.disclaimer}
					>
						<h2>Why Signup?</h2>
						<ul>
							<li>Its cool</li>
							<li>Savage</li>
							<li>Fleeky?</li>
							<li>Jane likes it</li>

						</ul>
					</Col>
				</Row>
      </div>
	)
}

export default SignupForm;
