import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//Models
import { LEVELS } from '../../../../models/levels.enum';
import { Task } from '../../../../models/task.class';

export default function TaskFormik({ add }) {
	const initialValues = {
		name: '',
		description: '',
		level: LEVELS.NORMAL,
	};

	const taskSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		description: Yup.string().required('Description is required'),
		level: Yup.string()
			.oneOf(
				[LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
				'You must select a Level: Normal / Urgent / Blocking',
			)
			.required('Level is required'),
	});

	return (
		<div>
			<h4>Task Formik</h4>
			<Formik
				initialValues={initialValues}
				validationSchema={taskSchema}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 1000));
					const newTask = new Task(
						values.name,
						values.description,
						false,
						values.level,
					);
					add(newTask);
				}}
			>
				{({ touched, errors, isSubmitting }) => (
					<Form>
						<Field
							id='name'
							type='text'
							name='name'
							placeholder='Task name'
						/>
						{errors.name && touched.name && (
							<ErrorMessage name='name' component='div' />
						)}
						<Field
							id='description'
							type='text'
							name='description'
							placeholder='Task description'
						/>
						{errors.description && touched.description && (
							<ErrorMessage name='description' component='div' />
						)}
						<Field id='level' name='level' component='select'>
							<option value={LEVELS.NORMAL}>
								{LEVELS.NORMAL}
							</option>
							<option value={LEVELS.URGENT}>
								{LEVELS.URGENT}
							</option>
							<option value={LEVELS.BLOCKING}>
								{LEVELS.BLOCKING}
							</option>
						</Field>
						<button type='submit'>Add Task</button>
						{isSubmitting ? <p>Adding task</p> : null}
					</Form>
				)}
			</Formik>
		</div>
	);
}

TaskFormik.protoTypes = {
	add: PropTypes.func.isRequired,
};
