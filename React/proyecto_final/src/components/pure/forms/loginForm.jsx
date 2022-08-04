/** Componente que va a contener un formulario
 * para autenticación de usuarios */

import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthContext from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email format')
		.required('Email is required'),
	password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
	const initialCredentials = {
		email: 'niko@email.com',
		password: '39576901',
	};

	const navigate = useNavigate();
	const { login } = useContext(AuthContext);
	const handleLogin = () => {
		login();
		navigate('/');
	};

	return (
		<div>
			<h4>Login Formik</h4>
			<Formik
				// *** Initial values that the form will take
				initialValues={initialCredentials}
				// *** Yup Validation Schema ***
				validationSchema={loginSchema}
				// ** onSubmit Event
				onSubmit={handleLogin}
			>
				{/* We obtain props from Formik */}

				{({
					values,
					touched,
					errors,
					isSubmitting,
					handleSubmit,
					handleChange,
					handleBlur,
				}) => (
					<Form onSubmit={handleSubmit}>
						<label htmlFor='email'>Email</label>
						<Field
							id='email'
							type='email'
							name='email'
							placeholder='example@email.com'
							values={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>

						{/* Email Errors */}
						{errors.email && touched.email && (
							<ErrorMessage
								name='email'
								component='div'
							></ErrorMessage>
						)}

						<label htmlFor='password'>Password</label>
						<Field
							id='password'
							name='password'
							placeholder='password'
							type='password'
							values={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{/* Password Errors */}
						{errors.password && touched.password && (
							<ErrorMessage
								name='password'
								component='div'
							></ErrorMessage>
						)}
						<button type='submit'>Login</button>
						{isSubmitting ? <p>Login your credentials...</p> : null}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
