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
	FormGroup
} from '../styles/Login';
import { validateLoginDetails } from '../helpers/validator';
import getUser from '../helpers/getUser';
import ButtonLoader from '../components/utils/ButtonLoader';
import Loading from '../components/utils/Loading';
import Error from '../components/utils/Error';

// Import queries
import { LOGIN_USER } from '../helpers/queries';

const SchemaValidation = Yup.object().shape({
	email: Yup.string()
		.email('Provide a valid email')
		.required('email is required'),
	password: Yup.string()
		.trim()
		.required('password is required')
});

const initialValues = {
	email: '',
	password: ''
};

const intialState = {
	email: '',
	password: '',
	user: {}
};

const Login = ({ history }) => {
	const [state, setState] = useState(intialState);
	const [isLoading, setIsLoading] = useState(false);
	const [userLogin, { loading, error }] = useMutation(LOGIN_USER, {
		onCompleted({ loginUser }) {
			localStorage.setItem('token', loginUser.token);

			const user = getUser(loginUser.token);
			setState(prevState => ({ ...prevState, user }));

			const location = {
				pathname: 'dashboard',
				user
			};

			return history.push(location);
		}
	});

	if (error)
		return (
			<Error ErrorText={error.message.split(':').slice(1)} history={history} />
		);
	if (loading) return <Loading />;

	// const handleChange = ({ target }) => {
	// 	const { name, value } = target;
	// 	setState(prevState => ({ ...prevState, [name]: value }));
	// };

	// const handleSubmit = e => {
	// 	e.preventDefault();

	// 	const payload = {
	// 		email: state.email,
	// 		password: state.password
	// 	};

	// 	const isValid = validateLoginDetails(payload);

	// 	if (isValid) {
	// 		setIsLoading(true);

	// 	userLogin({
	// 		variables: {
	// 			...payload
	// 		}
	// 	});

	// 		setState({ email: '', password: '' });
	// 	} else {
	// 		console.log('false');
	// 	}
	// };

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={SchemaValidation}
			onSubmit={(data, { setErrors, resetForm }) => {
				userLogin({
					variables: { ...data }
				});
				setIsLoading(!isLoading);
			}}
			render={({
				values: { email, password },
				errors,
				touched,
				handleBlur,
				handleChange,
				handleSubmit,
				isSubmitting,
				resetForm,
				history,
				submitForm,
				isValid
			}) => (
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
									value={email}
									onChange={handleChange}
									onBlur={handleBlur}
									className={errors.email && touched.email ? 'error' : ''}
									required
									autoFocus
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
									className={errors.password && touched.password ? 'error' : ''}
									required
								/>
								{errors.password && touched.password && (
									<div className="input-feedback">{errors.password}</div>
								)}
							</FormGroup>

							<div className="cta">
								<Button primary type="submit">
									{isLoading ? <ButtonLoader /> : 'login'}
								</Button>
								<Link to="/sign-up">
									<Button fill="true">sign up</Button>
								</Link>
							</div>
						</Form>
					</div>
				</Main>
			)}
		/>
	);
};

export default Login;
