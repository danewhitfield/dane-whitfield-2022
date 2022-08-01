import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import angleToRadians from '../../../utils/angleToRadians';

export default function Paradise({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/paradise/PARADISE.glb');
	return (
		<group ref={group} {...props} dispose={null} scale={0.4}>
			<pointLight
				intensity={2000}
				decay={2}
				color='#ec7bff'
				position={[2.1, 10.56, 2.33]}
				rotation={[-1.84, 0.6, 1.93]}
			/>
			<group position={[2.57, 4.3, -2.56]} scale={[1.39, 4.3, 1.39]}>
				<mesh geometry={nodes.Cube005.geometry} material={materials.Tower} />
				<mesh geometry={nodes.Cube005_1.geometry} material={materials.Lights} />
			</group>
			<mesh
				geometry={nodes.Plane.geometry}
				material={materials.Floor}
				scale={191.99}
			/>
			<mesh
				geometry={nodes.Plane001.geometry}
				material={materials.Signage}
				position={[4.12, 7.51, -1.17]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[1, 1, 0.29]}
			/>
			<group
				position={[4.12, 7.51, -1.03]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.35}
			>
				<mesh geometry={nodes.Text_1.geometry} material={materials.Tower} />
				<mesh geometry={nodes.Text_2.geometry} material={materials.Lights} />
			</group>
			<mesh
				geometry={nodes.Cube002.geometry}
				material={materials.Tower}
				position={[2.57, 4.3, -2.56]}
				scale={[1.39, 4.3, 1.39]}
			/>
			<mesh
				geometry={nodes.Plane002.geometry}
				material={materials['Yellow Lines']}
				position={[-2.34, 0, 0]}
				scale={[1, 1, 0.08]}
			/>
			<group
				position={[-1.37, 2.96, -1.36]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.28}
			>
				<mesh geometry={nodes.Circle_1.geometry} material={materials.Signage} />
				<mesh geometry={nodes.Circle_2.geometry} material={materials.Lights} />
				<spotLight
					intensity={200}
					angle={1.12}
					penumbra={0.15}
					decay={2}
					color='#ec7bff'
					position={[0.38, -1.51, -0.06]}
					rotation={[-1.75, -1.3, -0.97]}
					scale={3.52}
				/>
				<spotLight
					intensity={200}
					angle={1.12}
					penumbra={0.15}
					decay={2}
					color='#ec7bff'
					position={[0.38, -1.51, -7.09]}
					rotation={[-1.75, -1.3, -0.97]}
					scale={3.52}
				/>
			</group>
			<group
				position={[-1.37, 2.96, -1.36]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.28}
			>
				<mesh
					geometry={nodes.Circle001_1.geometry}
					material={materials.Signage}
				/>
				<mesh
					geometry={nodes.Circle001_2.geometry}
					material={materials.Lights}
				/>
			</group>
			<group
				position={[-1.37, 2.96, -1.36]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.28}
			>
				<mesh
					geometry={nodes.Circle002_1.geometry}
					material={materials.Signage}
				/>
				<mesh
					geometry={nodes.Circle002_2.geometry}
					material={materials.Lights}
				/>
			</group>
			<group
				position={[-1.37, 2.96, -3.36]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.28}
			>
				<mesh
					geometry={nodes.Circle003_1.geometry}
					material={materials.Signage}
				/>
				<mesh
					geometry={nodes.Circle003_2.geometry}
					material={materials.Lights}
				/>
			</group>
			<group
				position={[-1.37, 2.96, 0.64]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.28}
			>
				<mesh
					geometry={nodes.Circle004_1.geometry}
					material={materials.Signage}
				/>
				<mesh
					geometry={nodes.Circle004_2.geometry}
					material={materials.Lights}
				/>
				<spotLight
					intensity={200}
					angle={1.12}
					penumbra={0.15}
					decay={2}
					color='#ec7bff'
					position={[0.38, -1.51, -0.06]}
					rotation={[-1.75, -1.3, -0.97]}
					scale={3.52}
				/>
			</group>
			<group position={[-0.72, 3, 4.17]} scale={0.26}>
				<mesh geometry={nodes.Plane006.geometry} material={materials.Table} />
				<mesh geometry={nodes.Plane006_1.geometry} material={materials.Floor} />
			</group>
		</group>
	);
}

useGLTF.preload('/models/paradies/PARADISE.glb');
