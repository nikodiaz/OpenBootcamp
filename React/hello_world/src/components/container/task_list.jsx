import React from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskList = () => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

  const changeState = () => {
    console.log('TODO: Cambiar el estado de una tarea')
  }

  return (
    <div>
      <div>
        Your Tasks:
      </div>
      {/*TODO: Aplicar un For/Map para renderizar una lista de tareas*/}
      <TaskComponent task={defaultTask} />
    </div>
  )
}

export default TaskList