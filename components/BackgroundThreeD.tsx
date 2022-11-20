import * as React from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Plane, PerspectiveCamera } from "@react-three/drei";
import { useScroll } from "./scroll";

export default function BackgroundThreeD() {
  return (
    <Canvas>
      <StarsScene />
    </Canvas>
  );
}

function StarsScene() {
  const { scrollOffset } = useScroll();
  const ref = useRef<any>();

  useFrame(() => {
    ref.current.rotation.x = scrollOffset * 0.0005;
    ref.current.rotation.z += 0.0001;
  });

  return (
    <>
      <Stars radius={500} />
      <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]} />
      <PerspectiveCamera ref={ref} makeDefault />
    </>
  );
}
