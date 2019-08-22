import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import {
	Main,
	Button,
	InputText,
	Label,
	Form,
	FormGroup
} from '../styles/Login';
import { validateLoginDetails } from '../helpers/validator';

// Import queries
import { LOGIN_USER } from '../helpers/queries';

const intialState = {
	email: '',
	password: '',
	user: {}
};

const Login = () => {
	const [state, setState] = useState(intialState);
	const [userLogin, { data }] = useMutation(LOGIN_USER);
	// const userLogin = useMutation(LOGIN_USER);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();

		const payload = {
			email: state.email,
			password: state.password
		};

		const isValid = validateLoginDetails(payload);

		if (isValid) {
			userLogin({
				variables: {
					...payload
				}
			});

			console.log(data);
		} else {
			console.log('false');
		}
	};

	return (
		<Main>
			<div className="wrap__main">
				<h2>login to writr</h2>

				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label htmlFor="email">email:</Label>
						<InputText
							type="email"
							placeholder="user@writr.com"
							name="email"
							value={state.email}
							onChange={handleChange}
							required
							autoFocus
						/>
					</FormGroup>

					<FormGroup>
						<Label htmlFor="password">password:</Label>
						<InputText
							type="password"
							placeholder="Enter password"
							name="password"
							value={state.password}
							onChange={handleChange}
							required
						/>
					</FormGroup>

					<div className="cta">
						<Button primary>login</Button>
						<Link to="/sign-up">
							<Button fill="true">sign up</Button>
						</Link>
					</div>
				</Form>
			</div>
		</Main>
	);
};

export default Login;
