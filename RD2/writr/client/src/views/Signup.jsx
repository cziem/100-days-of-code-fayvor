import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Main,
	Button,
	InputText,
	Label,
	Form,
	FormGroup,
	SelectOption,
	OptionItem
} from '../styles/Signup';
import { validateSignupDetails } from '../helpers/validator';

const intialState = {
	name: '',
	username: '',
	email: '',
	password: '',
	roles: '',
	user: {}
};

const Signup = () => {
	const [state, setState] = useState(intialState);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const handleSelect = ({ target }) =>
		setState(prevState => ({ ...prevState, roles: target.value }));

	const handleSubmit = e => {
		e.preventDefault();

		const payload = {
			name: state.name,
			username: state.username,
			email: state.email,
			password: state.password,
			roles: state.roles
		};

		const isValid = validateSignupDetails(payload);

		if (isValid) {
			console.log('valid');
		} else {
			console.log('false');
		}
	};

	return (
		<Main>
			<div className="wrap__main">
				<h2>get started, writr</h2>

				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label htmlFor="name">name:</Label>
						<InputText
							type="name"
							placeholder="Jon Snow"
							name="name"
							value={state.name}
							onChange={handleChange}
							autoFocus
						/>
					</FormGroup>

					<FormGroup>
						<Label htmlFor="username">username:</Label>
						<InputText
							type="username"
							placeholder="snow"
							name="username"
							value={state.username}
							onChange={handleChange}
							required
						/>
					</FormGroup>

					<FormGroup>
						<Label htmlFor="email">email:</Label>
						<InputText
							type="email"
							placeholder="user@writr.com"
							name="email"
							value={state.email}
							onChange={handleChange}
							required
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

					<FormGroup>
						<Label htmlFor="roles">role:</Label>
						<SelectOption
							type="roles"
							placeholder="Enter roles"
							name="roles"
							value={state.roles}
							// onSelect={handleSelect}
							onChange={handleSelect}
							required
						>
							<OptionItem value={0}>select role</OptionItem>
							<OptionItem name="editor">editor</OptionItem>
							<OptionItem name="writer">writer</OptionItem>
							<OptionItem name="others">others</OptionItem>
						</SelectOption>
					</FormGroup>

					<div className="cta">
						<Button primary>Signup</Button>
						<Link to="/login">
							<Button fill="true">login</Button>
						</Link>
					</div>
				</Form>
			</div>
		</Main>
	);
};

export default Signup;
