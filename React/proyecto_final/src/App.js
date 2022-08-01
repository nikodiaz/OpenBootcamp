import './App.css';
import TaskList from './components/container/task_list';
import TaskFormik from './components/pure/forms/ejercicios-13-14-15/TaskFormik';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<TaskList></TaskList>
			</header>
		</div>
	);
}

export default App;
