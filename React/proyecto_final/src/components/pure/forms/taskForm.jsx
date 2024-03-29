import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4' >
            <div className='form-outlined flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />
                <input ref={descriptionRef} id='inputDesc' type='text' className='form-control form-control-lg' placeholder='Task Description' />
                <label htmlFor='selectLevel' className='sr-only' >Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' >
                    <option
                        value={LEVELS.NORMAL} >{LEVELS.NORMAL}</option>
                    <option
                        value={LEVELS.URGENT} >{LEVELS.URGENT}</option>
                    <option
                        value={LEVELS.BLOCKING} >{LEVELS.BLOCKING}</option>
                </select>
            </div>
            <button type='submit' className='btn btn-primary btn-lg ms-2' >{length > 0 ? 'Add New Task' : 'Create Your First Task'}</button>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
}

export default TaskForm;
