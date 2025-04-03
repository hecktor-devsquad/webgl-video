import { Backdrop, Environment, OrbitControls, Sky } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Chicken } from "./Chicken";
import { Palm } from "./Palm";
import { Rock } from "./Rock";
import { useControls } from "leva";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Experience = () => {
  const { camera, scene } = useThree();

  // Configurações da câmera
  camera.zoom = 0.4;
  camera.updateProjectionMatrix();

  useControls("Wireframe", {
    wireframe: { value: false, label: "Wireframe" },
  }); 

  const { wireframe } = useControls("Wireframe", {
    wireframe: { value: false, label: "Wireframe" },
  });

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function changeMashColors(group) {
    const newMaterial = new THREE.MeshStandardMaterial({ color: "red" });
    const setMaterial = (child) => {
      if (child.isMesh && child.name !== "wireframe") {
        child.material = newMaterial;
      }
    };

    group.traverse((child) => {
      setMaterial(child);

      if(child.isGroup && child.name !== "wireframe") {
        child.traverse((child) => {
          setMaterial(child);
        });
      }
    });
  }

  const handleMouseClick = (event) => {
    const { clientX, clientY } = event;
    const { width, height } = event.target.getBoundingClientRect();

    mouse.x = (clientX / width) * 2 - 1;
    mouse.y = -(clientY / height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
   
    if (intersects.length > 0) {
      intersects.forEach((intersect) => {
        const group = intersect.object.parent;
        group.name && console.log("Clicked on:", group.name);

        if(group.isGroup && group.name) {
            changeMashColors(group);
        }
      });
    }
  };

  useFrame(() => {
    window.addEventListener("click", handleMouseClick);
    return () => window.removeEventListener("click", handleMouseClick);
  });

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
        floor={1.5}
        segments={20}
        position-z={-4}
        position-y={-.1}
        scale={[100, 20, 5]}
        receiveShadow={true}
      >
        <meshStandardMaterial color="#353540" />
      </Backdrop>

      <group name="group-chicken">
        <Chicken castShadow position={[0, -.05, 0]} />
        <mesh name="wireframe" position={[0, .08, 0]} rotation-y={Math.PI / 4} >
          <boxGeometry args={[.5, .5, .5]} />
          <meshBasicMaterial wireframe color="white" transparent opacity={wireframe ? 0.3 : 0} />
        </mesh>
      </group>

      <Chicken castShadow position={[1, -.05, .3]} />
      <Palm />
      <Rock position={[-1, 0, -1]} />
    </>
  );
};
