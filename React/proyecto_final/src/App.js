import './App.css';
import TaskList from './components/container/task_list';
import Loginformik from './components/pure/forms/loginForm';
import { RegisterForm } from './components/pure/forms/registerForm';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{/* <TaskList></TaskList> */}
				{/* <RegisterForm /> */}
				<Loginformik />
			</header>
		</div>
	);
}

export default App;
