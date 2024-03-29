import * as THREE from "three";
import React, { PropsWithChildren, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import { Group, Object3D } from "three";
import { GltfObjectMap } from "./utils/threeJsUtils";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { projectStyles } from "./data/styles";

export type LaptopContentFrameProps = PropsWithChildren & {
  style?: React.CSSProperties;
};

function Model(props: LaptopContentFrameProps) {
  const reducedMotion = useReducedMotion();
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF(
    "/models/mac-draco.glb"
  ) as GltfObjectMap;

  useFrame((state) => {
    if (!group.current || reducedMotion) {
      return;
    }
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1
    );
  });
  // Auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes.Cube008.geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>
            {/* Allow html content to be shown within the laptop screen */}
            <Html
              rotation-x={-Math.PI / 2}
              position={[0, 0.04, -0.05]}
              transform
              occlude
              style={{
                width: "334px",
                height: "216px",
              }}
            >
              <div
                className="wrapper"
                onPointerDown={(e) => e.stopPropagation()}
                style={{
                  width: "668px",
                  height: "432px",
                  transform: "scale(0.5)",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  transformOrigin: "top left",
                  padding: "10px",
                }}
              >
                {props.children}
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes.Cube002.geometry}
        />
      </group>
    </group>
  );
}

export default function LaptopContentFrame(props: LaptopContentFrameProps) {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [-5, 0, -15], fov: 55 }} {...props}>
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        {/* Coloured key lights */}
        <pointLight
          position={[0, 10, 5]}
          intensity={1}
          color={projectStyles.colours.primary}
        />
        <pointLight
          position={[0, -10, 10]}
          intensity={0.75}
          color={projectStyles.colours.accent}
        />

        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
            <Model {...props} />
          </group>
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </Suspense>
  );
}
useGLTF.preload("/models/mac-draco.glb");
