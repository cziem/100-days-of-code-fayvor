import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Main,
	Button,
	InputText,
	Label,
	Form,
	FormGroup
} from '../styles/Login';

const intialState = {
	email: '',
	password: '',
	user: {}
};

const Login = () => {
	const [state, setState] = useState(intialState);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	return (
		<Main>
			{console.log(state)}
			<div className="wrap__main">
				<h2>login to writr</h2>

				<Form>
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
