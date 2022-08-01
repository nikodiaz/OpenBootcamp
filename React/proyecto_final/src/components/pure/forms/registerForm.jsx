import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

export const RegisterForm = () => {

  	let user = new User();

	const initialValues = {
		username: '',
		email: '',
		password: '',
		confirm: '',
		role: ROLES.USER,
	}

	const registerSchema = Yup.object().shape(
		{
			username: Yup.string()
										.min(6, 'Username too short')
										.max(12, 'Username too long')
										.required('Username is required'),
			email: Yup.string()
								.email('Invalid email format')
								.required('Email is required'),
			role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin').required('Role is required'),
			password: Yup.string()
										.min(8, 'Password too short')
										.required('Password is required')
										.matches(),
			confirm: Yup.string()
									.when('password', {
										is: value => (value && value.length > 0 ? true : false),
										then: Yup.string().oneOf(
											[Yup.ref('password')],
											'Passwords must match!'
										)
									})
									.required('You must confirm the password')
		}
	)

	const submit = ( values ) => {
		alert('Register user', values)
	}

  	return (
    	<div>
			<h4>Register Form</h4>
			<Formik
			// *** Initial values that the form will take
				initialValues={initialValues}
			// *** Yup Validation Schema
				validationSchema={registerSchema}
			// *** onSubmit Event
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 2000));
					alert(JSON.stringify(values, null, 2));
				}} >
				{({
					values,
					touched,
					errors,
					isSubmitting,
					handleChange,
					handleBlur }) => (
						<Form>
							<Field id='username' type='text' name='username' placeholder='Username' />
							{
								errors.username && touched.username &&
								(
									<ErrorMessage name='username' component='div' />
								)
							}
							<Field id='email' type='email' name='email' placeholder='Example@email.com' />
							{
								errors.email && touched.email &&
								(
									<ErrorMessage name='email' component='div'/>
								)
							}
							<Field id='password' name='password' type='password' placeholder='Password' />
							{
								errors.password && touched.password &&
								(
									<ErrorMessage name='password' component='div' />
								)
							}
							<Field id='confirm' name='confirm' type='password' placeholder='Confirm Password' />
							{
								errors.confirm && touched.confirm &&
								(
									<ErrorMessage name='confirm' component='div' />
								)
							}
							<button type='submit'>Register Account</button>
							{isSubmitting ? (<p>Sending your credentials</p>) : null}
						</Form>
					)}
			</Formik>
		</div>
  	)
}
