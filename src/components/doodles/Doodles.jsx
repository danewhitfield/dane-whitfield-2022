import { Box } from '@mui/material';
import React from 'react';
import ArduinoUno from '../../svg/ArduinoUno.jsx';
import Keypad from './keypad/Keypad.jsx';

const Doodles = () => {
	return (
		<Box
			style={{
				marginTop: '6rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1>Doodles</h1>
			<Box
				style={{
					padding: '20px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '600px',
					marginTop: '1.5rem',
				}}
			>
				<h2
					style={{
						marginBottom: '-7rem',
						textAlign: 'center',
						fontSize: '1.5rem',
					}}
				>
					Seen as I love Arduino's I thought it'd be cool to do a technical
					drawing/animation of one
				</h2>
				<ArduinoUno />
			</Box>
			<Box
				style={{
					padding: '20px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '600px',
					marginTop: '1rem',
				}}
			>
				<h2
					style={{
						marginBottom: '-13rem',
						textAlign: 'center',
						fontSize: '1.5rem',
					}}
				>
					Use the corresponding keys to try out this cool little keypad
				</h2>
				<Keypad />
			</Box>
		</Box>
	);
};

export default Doodles;
