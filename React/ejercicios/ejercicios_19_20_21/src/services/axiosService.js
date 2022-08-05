import axios from 'axios';

const getRandomJoke = async (state) => {
	try {
		const { data } = await axios.get(
			'https://api.chucknorris.io/jokes/random',
		);
		state(data);
	} catch {
		const error = new Error();
		console.log(`Something went wrong:${error}`);
	}
};

export { getRandomJoke };
