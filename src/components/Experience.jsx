import { Backdrop, Environment, OrbitControls, Sky } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Chicken } from "./Chicken";
import { Palm } from "./Palm";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Rock } from "./Rock";

export const Experience = () => {
  const { camera } = useThree();

  // Configurações da câmera
  camera.zoom = 0.4;
  camera.updateProjectionMatrix();

  return (
    <>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />

      <Environment preset="sunset" environmentIntensity={0.3} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      <directionalLight position={[-5, 5, 5]} intensity={0.7} />

      <directionalLight position={[1, 0.1, -5]} intensity={3} color={"red"} />
      <directionalLight position={[-1, 0.1, -5]} intensity={3} color={"blue"} />

      <Backdrop
        floor={1.5} // Stretches the floor segment, 0.25 by default
        segments={20} // Mesh-resolution, 20 by default
        position-z={-4}
        position-y={-.1}
        scale={[100, 20, 5]}
        receiveShadow={true}
      >
        <meshStandardMaterial color="#353540" />
      </Backdrop>

      <Chicken castShadow position={[0, -.05, 0]} />
      <Chicken castShadow position={[1, -.05, .3]} />
      <Palm />
      <Rock position={[-1, 0, -1]}/>
    </>
  );
};
