"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const GOLD = "#a59b75";
const CHAMPAGNE = "#d7ccaa";
const BLACK = "#0d0d0b";
const ROAD_RADIUS = 3.2;

type Props = { reduceMotion?: boolean };

function Building({
  position,
  size,
  delay,
  reduceMotion,
}: {
  position: [number, number, number];
  size: [number, number, number];
  delay: number;
  reduceMotion?: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  const [w, h, d] = size;
  const floors = Math.floor(h / 0.35);

  // Torres "crescem" do chão: patrimônio sendo construído.
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = reduceMotion ? 1 : THREE.MathUtils.clamp((clock.elapsedTime - delay) / 1.6, 0, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    ref.current.scale.y = Math.max(eased, 0.001);
  });

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, h / 2, 0]}>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={BLACK} metalness={0.6} roughness={0.35} />
        <Edges color={GOLD} />
      </mesh>
      {Array.from({ length: floors }, (_, i) => (
        <mesh key={i} position={[0, 0.25 + i * 0.35, d / 2 + 0.002]}>
          <planeGeometry args={[w * 0.8, 0.05]} />
          <meshBasicMaterial color={CHAMPAGNE} transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

function Villa() {
  return (
    <group position={[0, 0, 0.3]}>
      {/* Térreo */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[2.2, 0.7, 1.3]} />
        <meshStandardMaterial color={BLACK} metalness={0.5} roughness={0.4} />
        <Edges color={GOLD} />
      </mesh>
      {/* Pano de vidro iluminado */}
      <mesh position={[-0.2, 0.35, 0.652]}>
        <planeGeometry args={[1.4, 0.5]} />
        <meshBasicMaterial color={CHAMPAGNE} transparent opacity={0.55} />
      </mesh>
      {/* Pavimento superior em balanço */}
      <mesh position={[0.45, 1.0, -0.1]}>
        <boxGeometry args={[1.8, 0.6, 1.2]} />
        <meshStandardMaterial color={BLACK} metalness={0.5} roughness={0.4} />
        <Edges color={GOLD} />
      </mesh>
      <mesh position={[0.45, 1.0, 0.502]}>
        <planeGeometry args={[1.5, 0.35]} />
        <meshBasicMaterial color={CHAMPAGNE} transparent opacity={0.4} />
      </mesh>
      {/* Laje de cobertura */}
      <mesh position={[0.45, 1.33, -0.1]}>
        <boxGeometry args={[2.1, 0.06, 1.45]} />
        <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.25} />
      </mesh>
      {/* Piscina */}
      <mesh position={[-0.5, 0.03, 1.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.1, 0.45]} />
        <meshBasicMaterial color={CHAMPAGNE} transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function Car({ reduceMotion }: Props) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const a = reduceMotion ? 0.9 : clock.elapsedTime * 0.35;
    ref.current.position.set(Math.cos(a) * ROAD_RADIUS, 0, Math.sin(a) * ROAD_RADIUS);
    ref.current.rotation.y = -a - Math.PI / 2;
  });

  const wheels: [number, number, number][] = [
    [0.32, 0.09, 0.2],
    [0.32, 0.09, -0.2],
    [-0.32, 0.09, 0.2],
    [-0.32, 0.09, -0.2],
  ];

  return (
    <group ref={ref}>
      <mesh position={[0, 0.16, 0]}>
        <boxGeometry args={[0.95, 0.14, 0.42]} />
        <meshStandardMaterial color={CHAMPAGNE} metalness={0.4} roughness={0.35} emissive={GOLD} emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[-0.05, 0.28, 0]}>
        <boxGeometry args={[0.45, 0.11, 0.36]} />
        <meshStandardMaterial color={BLACK} metalness={0.8} roughness={0.15} />
        <Edges color={CHAMPAGNE} />
      </mesh>
      {wheels.map((p, i) => (
        <mesh key={i} position={p} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.06, 16]} />
          <meshStandardMaterial color="#1a1a17" roughness={0.8} />
        </mesh>
      ))}
      {/* Faróis */}
      <mesh position={[0.476, 0.17, 0.13]}>
        <boxGeometry args={[0.01, 0.04, 0.08]} />
        <meshBasicMaterial color="#fff6dc" />
      </mesh>
      <mesh position={[0.476, 0.17, -0.13]}>
        <boxGeometry args={[0.01, 0.04, 0.08]} />
        <meshBasicMaterial color="#fff6dc" />
      </mesh>
    </group>
  );
}

function Scene({ reduceMotion }: Props) {
  const root = useRef<THREE.Group>(null);

  // Giro lento + leve inclinação seguindo o mouse.
  useFrame(({ pointer, clock }, delta) => {
    if (!root.current) return;
    if (!reduceMotion) root.current.rotation.y = clock.elapsedTime * 0.08;
    const targetX = reduceMotion ? 0 : pointer.y * 0.08;
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, targetX, 4, delta);
  });

  return (
    <group ref={root} position={[0, -1.4, 0]}>
      {/* Plataforma */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[3.8, 3.8, 0.2, 96]} />
        <meshStandardMaterial color={BLACK} metalness={0.4} roughness={0.6} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
        <ringGeometry args={[3.78, 3.8, 128]} />
        <meshBasicMaterial color={GOLD} />
      </mesh>
      {/* Pista do carro */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
        <ringGeometry args={[ROAD_RADIUS - 0.3, ROAD_RADIUS + 0.3, 128]} />
        <meshStandardMaterial color="#161613" roughness={0.9} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.004, 0]}>
        <ringGeometry args={[ROAD_RADIUS - 0.006, ROAD_RADIUS + 0.006, 128]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.5} />
      </mesh>
      <gridHelper args={[5, 20, "#2e2b22", "#2e2b22"]} position={[0, 0.003, 0]} />

      <Villa />
      <Building position={[-1.3, 0, -1.4]} size={[0.7, 3.2, 0.7]} delay={0.3} reduceMotion={reduceMotion} />
      <Building position={[-0.3, 0, -1.8]} size={[0.6, 4.2, 0.6]} delay={0.5} reduceMotion={reduceMotion} />
      <Building position={[0.8, 0, -1.6]} size={[0.8, 2.6, 0.6]} delay={0.7} reduceMotion={reduceMotion} />
      <Building position={[1.8, 0, -0.9]} size={[0.5, 1.9, 0.5]} delay={0.9} reduceMotion={reduceMotion} />

      <Car reduceMotion={reduceMotion} />

      {!reduceMotion && (
        <Sparkles count={60} scale={[7, 5, 7]} position={[0, 2.5, 0]} size={2} speed={0.25} color={CHAMPAGNE} opacity={0.6} />
      )}
    </group>
  );
}

export default function PatrimonioScene({ reduceMotion }: Props) {
  return (
    <Canvas
      camera={{ position: [10, 7.8, 11.7], fov: 32 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduceMotion ? "demand" : "always"}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 4]} intensity={1.6} color="#fff1d0" />
      <pointLight position={[-4, 3, -3]} intensity={12} color={GOLD} />
      <Scene reduceMotion={reduceMotion} />
    </Canvas>
  );
}
