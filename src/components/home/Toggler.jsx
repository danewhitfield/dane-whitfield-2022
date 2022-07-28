import React from 'react';
import { Box } from '@mui/material';

const Toggler = ({ darkMode, handleClick }) => {
	const transition = 'all 250ms ease';

	return (
		<Box
			fontSize={'1.5rem'}
			sx={{
				cursor: 'pointer',
				':hover': { transform: 'translateY(-3px)', transition: transition },
			}}
		>
			{darkMode ? (
				<span onClick={handleClick} aria-label='Full Moon' role='img'>
					🌝
				</span>
			) : (
				<span onClick={handleClick} aria-label='New Moon' role='img'>
					🌚
				</span>
			)}
		</Box>
	);
};

export default Toggler;
