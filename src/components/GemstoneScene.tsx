import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Crystal({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003 * speed;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.1;
    }
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.3}
          distort={0.15}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh position={position} scale={scale * 1.3}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} />
      </mesh>
    </Float>
  );
}

export default function GemstoneScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fff9e6" />
      <pointLight position={[-3, 2, 4]} intensity={0.6} color="#9B59B6" />
      <pointLight position={[3, -2, 4]} intensity={0.4} color="#F8BBD0" />
      <pointLight position={[0, 3, 3]} intensity={0.4} color="#4A8B3B" />

      <Crystal position={[-3, 1.5, 0]} color="#9B59B6" scale={0.8} speed={0.8} />
      <Crystal position={[3, -1, 0]} color="#F8BBD0" scale={0.7} speed={1.2} />
      <Crystal position={[-1.5, -2, 1]} color="#4A8B3B" scale={0.6} speed={1} />
      <Crystal position={[2, 2, -1]} color="#F4B400" scale={0.5} speed={0.9} />
      <Crystal position={[0, 0.5, 2]} color="#B0C4DE" scale={0.55} speed={1.1} />
    </Canvas>
  );
}
