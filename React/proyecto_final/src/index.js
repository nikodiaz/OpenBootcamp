import React from 'react';
import ReactDOM from 'react-dom/client';
// * Añadimos bootstrap al proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ! Importante: los estilos propios deben ir debajo de bootstrap
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouting from './AppRouting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AppRouting />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
