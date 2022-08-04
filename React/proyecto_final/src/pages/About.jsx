import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const About = () => {
	const location = useLocation();
	const navigate = useNavigate();

	console.log(navigate);

	return (
		<div>
			<h1>About | Faqs</h1>
			<div>
				<button>Go Home</button>
				<button>Go Back</button>
			</div>
		</div>
	);
};

export default About;
