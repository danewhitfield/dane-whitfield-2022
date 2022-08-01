import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import angleToRadians from './angleToRadians';

export const Azimuthal = () => {
	// AZIMUTHAL CAMERA
	const orbitControlsRef = useRef(null);
	useFrame((state) => {
		if (!!orbitControlsRef.current) {
			const { x, y } = state.mouse;
			orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(30));
			orbitControlsRef.current.setPolarAngle(
				(y + 0.5) * angleToRadians(90 - 30)
			);
			orbitControlsRef.current.update();
		}
	});

	return (
		<>
			<OrbitControls
				ref={orbitControlsRef}
				minPolarAngle={angleToRadians(40)}
				maxPolarAngle={angleToRadians(120)}
				enableZoom={false}
				enablePan={false}
			/>
		</>
	);
};
