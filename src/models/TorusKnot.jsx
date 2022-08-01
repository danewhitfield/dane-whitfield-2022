import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	PerspectiveCamera,
	MeshDistortMaterial,
	Environment,
} from '@react-three/drei';
import { Suspense } from 'react';
// import { Azimuthal } from '../../utils/azimuthal';

const Model = () => {
	return (
		<Canvas style={{ width: '500px', height: '500px' }}>
			<OrbitControls enablePan={false} enableZoom={false} />
			{/* <Azimuthal /> */}
			<PerspectiveCamera makeDefault position={[0, 1, 5]} />
			<ambientLight />
			<pointLight color='#ffffff' intensity={1} position={[0, 0, 0]} />
			<Suspense fallback={null}>
				<mesh rotation={[0, 0, 0]} position={[0, 0, 0]} scale={2}>
					<torusKnotGeometry args={[0.5, 0.2, 150, 22]} />
					{/* <sphereGeometry args={[1, 32, 30]} /> */}
					<MeshDistortMaterial
						color={'#8362fd'}
						distort={0.3}
						speed={1.6}
						roughness={0.2}
					/>
				</mesh>
				<Environment files={'hdr.hdr'} />
			</Suspense>
		</Canvas>
	);
};

export default Model;
