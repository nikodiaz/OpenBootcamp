import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

  	useEffect(() => {
    	console.log('Created Task');

    	return () => {
      		console.log(`Task: ${ task.name } is going to unmount...`);
    	}
  	}, [task])

	// Function that return a Badge depending on the level of the task

	function taskLevelBadge() {
		switch (task.level) {
			case LEVELS.NORMAL:
				return(
				<h6 className='mb-0'>
					<span className='badge bg-primary'>{task.level}</span>
				</h6>
				)
			case LEVELS.URGENT:
				return(
					<h6 className='mb-0'>
						<span className='badge bg-warning'>{task.level}</span>
					</h6>
				)
			case LEVELS.BLOCKING:
				return(
					<h6 className='mb-0'>
						<span className='badge bg-danger'>{task.level}</span>
					</h6>
				)
			default:
				break;
		}
	}

	// Function that returning icon depending on completion of the task

	function taskIconCompleted() {
		if(task.completed) {
			return (<i onClick={ () => complete(task)} className='bi-toggle-on task-action' style={ {color:'green'} }></i>)
		}else {
			return (<i onClick={ () => complete(task)} className='bi-toggle-off task-action'  style={ {color:'grey'} }></i>)
		}
	}

  	return (

		<tr className={task.completed ? 'task-completed' : 'task-pending'}>
			<th>
				<span className=''>{ task.name }</span>
			</th>
			<td className='align-middle'>
				<span>{task.description}</span>
			</td>
			<td className='align-middle'>
			{/* Execution of function  to return a badge element */}
				<span>{taskLevelBadge()}</span>
			</td>
			<td className='align-middle'>
				<span>{taskIconCompleted()}
					<i onClick={ () => remove(task) } className='bi-trash task-action' style={ {color:'tomato'} }></i>
				</span>
			</td>
		</tr>
  	)
}

TaskComponent.propTypes = {
  	task: PropTypes.instanceOf( Task ).isRequired,
	complete: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
}

export default TaskComponent
