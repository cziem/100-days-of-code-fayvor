import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
import ButtonLoader from '../components/utils/ButtonLoader';
import Loading from '../components/utils/Loading';
import Error from '../components/utils/Error';
import { ADD_NEW_USER } from '../helpers/queries';
import LoadLoginPage from '../components/shared/LoadLoginPage';

const SchemaValidation = Yup.object().shape({
	name: Yup.string().trim(),
	username: Yup.string()
		.min(3)
		.required('username is required'),
	email: Yup.string()
		.email('Provide a valid email')
		.required('email is required'),
	password: Yup.string()
		.trim()
		.required('password is required'),
	roles: Yup.string()
});

const initialValues = {
	name: '',
	username: '',
	email: '',
	password: '',
	roles: ''
};

const Signup = ({ history }) => {
	const [verify, setVerification] = useState(false);
	const [addNewUser, { loading, error }] = useMutation(ADD_NEW_USER);

	if (error)
		return (
			<Error ErrorText={error.message.split(':').slice(1)} history={history} />
		);
	if (loading) return <Loading />;

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={SchemaValidation}
			onSubmit={(data, { resetForm, setSubmitting }) => {
				addNewUser({
					variables: { ...data }
				})
					.then(async ({ data }) => {
						if (data.addUser) {
							setVerification(true);
							setSubmitting(false);
						}
					})
					.catch(err => {
						console.log('Err: ', err);
						resetForm();
					});
			}}
			render={({
				values: { name, username, email, password, roles },
				errors,
				touched,
				handleBlur,
				handleChange,
				handleSubmit,
				isSubmitting
			}) => {
				return verify ? (
					<LoadLoginPage />
				) : (
					<Main>
						<div className="wrap__main">
							<h2>get started, writr</h2>

							{verify && <LoadLoginPage />}

							<Form onSubmit={handleSubmit}>
								<FormGroup>
									<Label htmlFor="name">name:</Label>
									<InputText
										type="name"
										placeholder="Jon Snow"
										name="name"
										value={name}
										onChange={handleChange}
										onBlur={handleBlur}
										className={errors.name && touched.name ? 'error' : ''}
										autoFocus
									/>
									{errors.name && touched.name && (
										<div className="input-feedback">{errors.name}</div>
									)}
								</FormGroup>

								<FormGroup>
									<Label htmlFor="username">username:</Label>
									<InputText
										type="username"
										placeholder="snow"
										name="username"
										value={username}
										onChange={handleChange}
										onBlur={handleBlur}
										className={
											errors.username && touched.username ? 'error' : ''
										}
										required
									/>
									{errors.username && touched.username && (
										<div className="input-feedback">{errors.username}</div>
									)}
								</FormGroup>

								<FormGroup>
									<Label htmlFor="email">email:</Label>
									<InputText
										type="email"
										placeholder="user@writr.com"
										name="email"
										value={email}
										onChange={handleChange}
										onBlur={handleBlur}
										className={errors.email && touched.email ? 'error' : ''}
										required
									/>
									{errors.email && touched.email && (
										<div className="input-feedback">{errors.email}</div>
									)}
								</FormGroup>

								<FormGroup>
									<Label htmlFor="password">password:</Label>
									<InputText
										type="password"
										placeholder="Enter password"
										name="password"
										value={password}
										onChange={handleChange}
										onBlur={handleBlur}
										className={
											errors.password && touched.password ? 'error' : ''
										}
										required
									/>
									{errors.password && touched.password && (
										<div className="input-feedback">{errors.password}</div>
									)}
								</FormGroup>

								<FormGroup>
									<Label htmlFor="roles">role:</Label>
									<SelectOption
										type="roles"
										placeholder="Enter roles"
										name="roles"
										value={roles}
										onBlur={handleBlur}
										onChange={handleChange}
										className={
											errors.password && touched.password ? 'error' : ''
										}
										required
									>
										<OptionItem value={0}>select role</OptionItem>
										<OptionItem name="editor">EDITOR</OptionItem>
										<OptionItem name="writer">WRITER</OptionItem>
										<OptionItem name="member">MEMBER</OptionItem>
										<OptionItem name="visitor">VISITOR</OptionItem>
									</SelectOption>
									{errors.roles && touched.roles && (
										<div className="input-feedback">{errors.roles}</div>
									)}
								</FormGroup>

								<div className="cta">
									<Button primary type="submit">
										{isSubmitting ? <ButtonLoader /> : 'Signup'}
									</Button>
									<Link to="/login">
										<Button fill="true">login</Button>
									</Link>
								</div>
							</Form>
						</div>
					</Main>
				);
			}}
		/>
	);
};

export default Signup;
