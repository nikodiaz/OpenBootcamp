import React, { createContext, useState } from 'react';

const AuthContext = createContext('');

const initialAuth = false;

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialAuth);

	const login = () => {
		setAuth(true);
	};

	const logout = () => {
		setAuth(false);
	};
	const data = { auth, login, logout };
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
export { AuthProvider };
