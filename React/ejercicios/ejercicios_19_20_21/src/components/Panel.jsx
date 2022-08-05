import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

const Panel = ({ refresh, like, dislike, setLike, setDislike }) => {
	return (
		<div>
			<ButtonGroup
				variant='contained'
				aria-label='outlined primary button group'
			>
				<Button onClick={setLike}>Like</Button>
				<Button onClick={refresh}>Refresh</Button>
				<Button onClick={setDislike}>Dislike</Button>
			</ButtonGroup>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginTop: '1rem',
				}}
			>
				<span>Likes: {like}</span>
				<span>Dislikes: {dislike}</span>
			</div>
		</div>
	);
};

export default Panel;
