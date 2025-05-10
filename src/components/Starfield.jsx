"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Starfield() {
  return (
    <Canvas
      className="fixed top-0 left-0 w-full h-full -z-50"
      camera={{ position: [0, 0, 1] }}
    >
      <Stars
        radius={100}
        depth={50}
        count={8000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  );
}
