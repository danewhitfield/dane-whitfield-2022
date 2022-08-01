import React from 'react';
import IsoRoomModel from './IsoRoom';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { Azimuthal } from '../../utils/azimuthal';

const DisplayIsoRoom = () => {
	return (
		<Canvas style={{ width: '60vw', height: '60vh' }}>
			<Suspense fallback={null}>
				<PerspectiveCamera makeDefault position={[0, 1, 5]} />
				{/* <ambientLight /> */}
				{/* <pointLight color='#98ffdd' intensity={1} position={[0, 0, 0]} /> */}
				<Azimuthal />

				<IsoRoomModel />
				<Environment preset='sunset' />
			</Suspense>
		</Canvas>
	);
};

export default DisplayIsoRoom;
