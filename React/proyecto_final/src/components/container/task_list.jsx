import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskFormik from '../pure/forms/ejercicios-13-14-15/TaskFormik';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskList = () => {
	const defaultTask1 = new Task(
		'Example1',
		'Default description1',
		true,
		LEVELS.NORMAL,
	);
	const defaultTask2 = new Task(
		'Example2',
		'Default description2',
		false,
		LEVELS.URGENT,
	);
	const defaultTask3 = new Task(
		'Example3',
		'Default description3',
		false,
		LEVELS.BLOCKING,
	);

	//Estado del componente
	const [tasks, setTasks] = useState([
		defaultTask1,
		defaultTask2,
		defaultTask3,
	]);
	const [loading, setLoading] = useState(true);

	//Control del ciclo de vida
	useEffect(() => {
		console.log('Tasks State has been modified');
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			console.log('TasksList component is going to unmount...');
		};
	}, [tasks]);

	function completeTask(task) {
		console.log('Complete this task: ', task);
		const index = tasks.indexOf(task);
		const tempTask = [...tasks];
		tempTask[index].completed = !tempTask[index].completed;
		// We update the state of the component with the new list of tasks and it will update the Iteration of the task in order to show the task updated

		setTasks(tempTask);
	}

	function deleteTask(task) {
		const index = tasks.indexOf(task);
		const tempTask = [...tasks];
		tempTask.splice(index, 1);

		setTasks(tempTask);
	}

	function addTask(task) {
		const tempTask = [...tasks];
		tempTask.push(task);
		setTasks(tempTask);
	}

	const TasksTable = () => {
		return (
			<table>
				<thead>
					<tr>
						<th scope='col'>Title</th>
						<th scope='col'>Description</th>
						<th scope='col'>Priority</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task, index) => {
						return (
							<TaskComponent
								task={task}
								key={index}
								complete={completeTask}
								remove={deleteTask}
							/>
						);
					})}
				</tbody>
			</table>
		);
	};

	let taskTable;

	if (tasks.length > 0) {
		taskTable = <TasksTable />;
	} else {
		taskTable = (
			<div>
				<h3>There are not tasks to show</h3>
				<h4>Please, create one</h4>
			</div>
		);
	}

	const loadingStyle = {
		color: 'grey',
		fontSize: '30px',
		fontWeight: 'bold',
	};

	return (
		<div>
			<div className='col-12'>
				<div className='card'>
					{/* Card Header  {title} */}
					<div className='card-header p-3'>
						<h5>Your Tasks:</h5>
					</div>
					{/* Card Body {Content}  */}

					<div
						className='card-body'
						style={{ position: 'relative', height: '400px' }}
						data-mdb-perfect-scrollbar='true'
					>
						{loading ? (
							<p style={loadingStyle}>Loading Tasks...</p>
						) : (
							taskTable
						)}
					</div>
				</div>
				{/* <TaskForm
					add={addTask}
					length={tasks.length}
				/> */}
				<TaskFormik add={addTask} />
			</div>
			{/*TODO: Aplicar un For/Map para renderizar una lista de tareas*/}
		</div>
	);
};

export default TaskList;
