import { Card, CardContent, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getRandomJoke } from '../services/axiosService';
import Panel from './Panel';

const Jokes = () => {
	const [joke, setJoke] = useState({});
	const [score, setScore] = useState({
		likes: 0,
		dislikes: 0,
	});

	const handleLikes = () => {
		const newScore = {
			likes: score.likes + 1,
			dislikes: score.dislikes,
		};
		setScore(newScore);
	};

	const handleDislikes = () => {
		const newScore = {
			likes: score.likes,
			dislikes: score.dislikes + 1,
		};
		setScore(newScore);
	};

	useEffect(() => {
		getRandomJoke(setJoke);
	}, []);

	if (joke !== null || joke !== undefined) {
		return (
			<Card
				sx={{ minWidth: 275 }}
				style={{
					width: '300px',
					background: '#121212',
					color: 'white',
				}}
			>
				<CardContent>
					<p>{joke.value}</p>
					<Panel
						refresh={() => getRandomJoke(setJoke)}
						like={score.likes}
						dislike={score.dislikes}
						setLike={handleLikes}
						setDislike={handleDislikes}
					/>
				</CardContent>
			</Card>
		);
	}
	return null;
};

export default Jokes;
