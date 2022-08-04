import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
} from 'react-router-dom';
import NotFound from './pages/404/NotFound';
import Home from './pages/home/Home';
import About from './pages/About';
import { RegisterForm } from './components/pure/forms/registerForm';
import LoginForm from './components/pure/forms/loginForm';
import AuthContext, { AuthProvider } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
	const { auth } = useContext(AuthContext);
	console.log(auth);
	if (!auth) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

const AppRouting = () => {
	return (
		<AuthProvider>
			<Router>
				<div>
					<aside>
						<Link to='/'>||HOME|</Link>
						<Link to='/about'>|ABOUT|</Link>
						<Link to='/faqs'>|FAQS|</Link>
						<Link to='/register'>|REGISTER|</Link>
						<Link to='/login'>|LOGIN||</Link>
					</aside>
				</div>
				<Routes>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					></Route>
					<Route path='/register' element={<RegisterForm />} />
					<Route path='/login' element={<LoginForm />} />
					<Route path='/about' element={<About />} />
					<Route path='/faqs' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default AppRouting;
