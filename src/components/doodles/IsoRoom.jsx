import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import angleToRadians from '../../utils/angleToRadians';

export default function IsoRoomModel({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('models/iso-room/IsoRoom.glb');
	return (
		<group
			ref={group}
			{...props}
			dispose={null}
			scale={0.25}
			rotation={[angleToRadians(10), angleToRadians(-45), 0]}
		>
			<group scale={4}>
				<mesh geometry={nodes.Plane_1.geometry} material={materials.Wall} />
				<mesh geometry={nodes.Plane_2.geometry} material={materials.Floor} />
			</group>
			<mesh
				geometry={nodes.Couch.geometry}
				material={materials.Leather}
				position={[-0.03, 0.32, 2.46]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={[2.72, 0.88, 0.88]}
			>
				<mesh
					geometry={nodes.Circle.geometry}
					material={materials.Metal}
					scale={[0.37, 1.29, 1.13]}
				/>
				<mesh
					geometry={nodes.Plane002.geometry}
					material={materials.Leather}
					position={[0.43, 0.47, 0.16]}
					scale={[0.4, 1.13, 0.81]}
				/>
				<mesh
					geometry={nodes.Plane003.geometry}
					material={materials.Leather}
					position={[-0.41, 0.47, 0.16]}
					scale={[0.44, 1.13, 0.81]}
				/>
				<mesh
					geometry={nodes.Plane005_2.geometry}
					material={materials.Leather}
					position={[0.22, 1.46, -0.63]}
					rotation={[1.44, 0, 0]}
					scale={[0.24, 1.27, 0.49]}
				/>
				<mesh
					geometry={nodes.Plane006.geometry}
					material={materials.Leather}
					position={[-0.23, 1.46, -0.63]}
					rotation={[1.44, 0, 0]}
					scale={[0.24, 1.27, 0.49]}
				/>
				<mesh
					geometry={nodes.Plane007.geometry}
					material={materials.Leather}
					position={[-0.72, 1.46, -0.63]}
					rotation={[1.44, 0, 0]}
					scale={[0.27, 1.27, 0.49]}
				/>
				<mesh
					geometry={nodes.Plane008.geometry}
					material={materials.Leather}
					position={[0.89, 0.83, 0.43]}
					rotation={[1.78, -1.43, 1.67]}
					scale={[0.58, 1.26, 0.12]}
				/>
				<mesh
					geometry={nodes.Plane009.geometry}
					material={materials.Leather}
					position={[-0.89, 0.83, 0.43]}
					rotation={[-1.74, -1.41, -1.6]}
					scale={[0.58, 1.26, 0.12]}
				/>
			</mesh>
			<group position={[0.32, 3.59, -4]}>
				{/* <mesh geometry={nodes.Plane004.geometry} material={materials.TV} /> */}
				<mesh
					geometry={nodes.Plane004_1.geometry}
					material={materials['TV Screen']}
				/>
				<mesh
					geometry={nodes.Plane004_2.geometry}
					material={materials.Backlit}
				/>
			</group>
			<group position={[0, 0.39, -3.38]} scale={[2.99, 1, 0.53]}>
				<mesh geometry={nodes.Plane005.geometry} material={materials.Unit} />
				<mesh
					geometry={nodes.Plane005_1.geometry}
					material={materials['Unit Backlit']}
				/>
			</group>
			<mesh
				geometry={nodes.Untitled_Artwork.geometry}
				material={materials.Untitled_Artwork}
				position={[-3.94, 3.15, -0.33]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
				scale={2.46}
			/>
			<mesh
				geometry={nodes.Sphere.geometry}
				material={materials.Balls}
				position={[2.55, 1.49, -3.46]}
				scale={0.21}
			/>
			<mesh
				geometry={nodes.Sphere001.geometry}
				material={materials.Balls}
				position={[2.29, 1.38, -3.29]}
				scale={0.11}
			/>
		</group>
	);
}

useGLTF.preload('/models/iso-room/IsoRoom.glb');
