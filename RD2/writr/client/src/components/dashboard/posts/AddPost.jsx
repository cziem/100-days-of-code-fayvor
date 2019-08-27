import React, { useState } from 'react';
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

const AddPost = () => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={SchemaValidation}
			onSubmit={(data, { setErrors, resetForm }) => {
				console.log('data', data);
				console.log(setErrors);
				setIsLoading(!isLoading);
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
