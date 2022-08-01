import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Paradise from './PARADISE';

const DiplayParadise = () => {
	return (
		<Canvas style={{ width: '60vw', height: '60vh' }}>
			<Suspense fallback={null}>
				<OrbitControls enablePan={false} enableZoom={false} />
				<PerspectiveCamera makeDefault position={[0, 1, 5]} />
				<ambientLight />
				{/* <pointLight color='#98ffdd' intensity={1} position={[0, 0, 0]} /> */}

				<Paradise />
				<Environment preset='sunset' />
			</Suspense>
		</Canvas>
	);
};

export default DiplayParadise;
