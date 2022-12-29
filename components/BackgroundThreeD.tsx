import * as React from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Plane, PerspectiveCamera } from "@react-three/drei";
import { useScroll } from "./hooks/scroll";
import { useReducedMotion } from "./hooks/useReducedMotion";

const panPlaneSpeed = 0.0001;
const scrollPlaneSpeed = 0.0005;

const canvas = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  width: "100%",
  minHeight: "100vh",
};

export default function BackgroundThreeD(props: React.PropsWithChildren<{}>) {
  // Allows turning off of motion if user prefers reduced motion
  return (
    <div>
      <Canvas style={canvas}>
        <StarsScene />
      </Canvas>
      {props.children}
    </div>
  );
}

function StarsScene() {
  const { scrollOffset } = useScroll();
  const ref = useRef<any>();
  const reducedMotion = useReducedMotion();

  useFrame(() => {
    if (!reducedMotion) {
      ref.current.rotation.x = scrollOffset * scrollPlaneSpeed;
      ref.current.rotation.z += panPlaneSpeed;
    }
  });

  return (
    <>
      <Stars radius={100} />
      <Stars radius={500} />
      <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]} />
      <PerspectiveCamera ref={ref} makeDefault />
    </>
  );
}
