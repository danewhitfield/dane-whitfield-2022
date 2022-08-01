import { Box } from '@mui/material';
import React from 'react';
import ArduinoUno from '../../svg/ArduinoUno.jsx';
// import DisplayIsoRoom from './DisplayIsoRoom.jsx';
// import DisplayParadise from './paradise/DisplayParadise.jsx';

const Doodles = () => {
	return (
		<Box
			style={{
				marginTop: '8rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1>Doodles</h1>
			{/* <Box marginTop={10}>
				<DisplayIsoRoom />
				<DisplayParadise />
			</Box> */}
			<Box
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '90vw',
					marginTop: '-10rem',
				}}
			>
				<ArduinoUno />
			</Box>
		</Box>
	);
};

export default Doodles;
