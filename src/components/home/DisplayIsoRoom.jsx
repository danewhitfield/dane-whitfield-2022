import React from "react";
import IsoRoomModel from "./IsoRoom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

const DisplayIsoRoom = () => {
  return (
    <Canvas style={{ width: "60vw", height: "60vh" }}>
      <Suspense fallback={null}>
        <OrbitControls enablePan={false} enableZoom={false} />
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        {/* <ambientLight /> */}
        <pointLight color="#98ffdd" intensity={1} position={[0, 0, 0]} />

        <IsoRoomModel />
      </Suspense>
    </Canvas>
  );
};

export default DisplayIsoRoom;
