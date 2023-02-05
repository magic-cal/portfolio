import { PerspectiveCamera, Plane, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as React from "react";
import { useRef } from "react";
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
  const farStars = useRef<any>(null!);
  const nearStars = useRef<any>(null!);
  const starRefs = [farStars, nearStars];
  const perspectiveCamera = useRef<any>();
  const { scrollOffset } = useScroll();
  const reducedMotion = useReducedMotion();

  useFrame(() => {
    if (!reducedMotion) {
      starRefs.forEach((starRef) => {
        starRef.current.rotation.z += panPlaneSpeed;
      });
      perspectiveCamera.current.rotation.x = scrollOffset * scrollPlaneSpeed;
    }
  });

  return (
    <>
      <Stars ref={farStars} radius={100} />
      <Stars ref={nearStars} radius={500} />
      <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]} />
      <PerspectiveCamera ref={perspectiveCamera} makeDefault />
    </>
  );
}
