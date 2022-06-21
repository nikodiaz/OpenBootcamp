import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/Greeting';
import GreetingF from './components/pure/GreetingF';
// import TaskList from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name={'Nicolás'}/> */}
        <GreetingF name={'Nicolás'}/>
        {/* Componente de listado de tareas */}
        {/* <TaskList></TaskList> */}
      </header>
    </div>
  );
}

export default App;
