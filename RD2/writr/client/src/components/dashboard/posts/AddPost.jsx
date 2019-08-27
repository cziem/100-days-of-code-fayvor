import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
	Main,
	Headers,
	FormWrap,
	TextArea,
	SelectInput,
	SelectItems,
	FormGroup
} from '../../../styles/AddPost';
import { Label, InputText, Button } from '../../../styles/Login';
import ButtonLoader from '../../utils/ButtonLoader';
import { ADD_NEW_POST } from '../../../helpers/queries';
import Loading from '../../utils/Loading';
import Error from '../../utils/Error';

const SchemaValidation = Yup.object().shape({
	title: Yup.string().required('Post title is required'),
	body: Yup.string().trim(),
	category: Yup.string(),
	tags: Yup.string()
});

const initialValues = {
	title: '',
	body: '',
	category: '',
	tags: ''
};

const AddPost = ({ history }) => {
	const [addPost, { loading, error }] = useMutation(ADD_NEW_POST);

	if (error)
		return (
			<Error ErrorText={error.message.split(':').slice(1)} history={history} />
		);
	if (loading) return <Loading />;

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={SchemaValidation}
			onSubmit={(data, { setErrors, resetForm }) => {
				addPost({
					variables: { ...data }
				})
					.then(async ({ data }) => {
						const { addPost } = data;
						console.log(addPost);

						history.push('/dashboard');
					})
					.catch(err => {
						console.log('Err: ', err);
						resetForm();
					});
			}}
			render={({
				values: { title, body, category, tags },
				errors,
				touched,
				handleBlur,
				setFieldValue,
				handleSubmit,
				handleChange,
				isSubmitting,
				submitForm,
				isValid,
				setFieldTouched,
				isRequesting,
				handleClickOpen,
				history,
				resetForm
			}) => (
				<Main>
					<form onSubmit={handleSubmit}>
						{/* Build the form */}
						<Headers>
							<h4>Add New Post</h4>
						</Headers>

						<FormWrap>
							<FormGroup>
								<Label htmlFor="title">Post Title:</Label>
								<InputText
									type="text"
									value={title}
									name="title"
									onBlur={handleBlur}
									onChange={handleChange}
									className={errors.title && touched.title ? 'error' : ''}
								/>
								{errors.title && touched.title && (
									<div className="input-feedback">{errors.title}</div>
								)}
							</FormGroup>
							<FormGroup>
								<Label htmlFor="body">Post Body:</Label>
								<TextArea
									value={body}
									name="body"
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.body && touched.body && (
									<div className="input-feedback">{errors.body}</div>
								)}
							</FormGroup>
							<FormGroup>
								<Label htmlFor="body">Post Category:</Label>
								<SelectInput
									value={category}
									name="category"
									onChange={handleChange}
									onBlur={handleBlur}
								>
									<SelectItems name="poems">poems</SelectItems>
									<SelectItems name="articles">articles</SelectItems>
									<SelectItems name="series">series</SelectItems>
									<SelectItems name="quotes">quotes</SelectItems>
									<SelectItems name="uncategorized">uncategorized</SelectItems>
								</SelectInput>
								{errors.category && touched.category && (
									<div className="input-feedback">{errors.category}</div>
								)}
							</FormGroup>
							<FormGroup>
								<Label htmlFor="body">Post Tags:</Label>
								<InputText
									value={tags}
									name="tags"
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.tags && touched.tags && (
									<div className="input-feedback">{errors.tags}</div>
								)}
							</FormGroup>
							<Button primary block type="submit">
								{isSubmitting ? <ButtonLoader /> : 'Add Post'}
							</Button>
						</FormWrap>
					</form>
				</Main>
			)}
		/>
	);
};
export default AddPost;
