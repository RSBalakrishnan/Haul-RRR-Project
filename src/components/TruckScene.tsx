import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function TruckModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.4,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * 0.1,
        0.05
      );
    }
  });

  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.85, 0.88, 0.85),
    metalness: 0.3,
    roughness: 0.4,
  }), []);

  const chassisMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.15, 0.15, 0.15),
    metalness: 0.6,
    roughness: 0.3,
  }), []);

  const wheelMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.08, 0.08, 0.08),
    metalness: 0.2,
    roughness: 0.8,
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0.3, 0.5, 0.6),
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.6,
    transparent: true,
    opacity: 0.7,
  }), []);

  const grillMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.2, 0.2, 0.2),
    metalness: 0.7,
    roughness: 0.2,
  }), []);

  const headlightMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color(1, 1, 0.8),
    emissive: new THREE.Color(1, 1, 0.6),
    emissiveIntensity: 0.5,
  }), []);

  return (
    <group ref={groupRef} position={[0, -0.8, 0]} scale={1.1}>
      {/* Cabin */}
      <mesh position={[0.8, 1.2, 0]} material={bodyMaterial}>
        <boxGeometry args={[2.2, 1.8, 2.2]} />
      </mesh>
      {/* Cabin roof */}
      <mesh position={[0.8, 2.2, 0]} material={bodyMaterial}>
        <boxGeometry args={[2.0, 0.15, 2.1]} />
      </mesh>
      {/* Windshield */}
      <mesh position={[-0.15, 1.4, 0]} rotation={[0, 0, 0.15]} material={glassMaterial}>
        <boxGeometry args={[0.08, 1.2, 1.9]} />
      </mesh>
      {/* Side windows */}
      <mesh position={[0.8, 1.5, 1.05]} material={glassMaterial}>
        <boxGeometry args={[1.5, 0.8, 0.06]} />
      </mesh>
      <mesh position={[0.8, 1.5, -1.05]} material={glassMaterial}>
        <boxGeometry args={[1.5, 0.8, 0.06]} />
      </mesh>

      {/* Front grille */}
      <mesh position={[-0.35, 0.7, 0]} material={grillMaterial}>
        <boxGeometry args={[0.15, 0.8, 2.0]} />
      </mesh>
      {/* Headlights */}
      <mesh position={[-0.4, 0.8, 0.7]} material={headlightMaterial}>
        <boxGeometry args={[0.1, 0.25, 0.35]} />
      </mesh>
      <mesh position={[-0.4, 0.8, -0.7]} material={headlightMaterial}>
        <boxGeometry args={[0.1, 0.25, 0.35]} />
      </mesh>
      {/* Bumper */}
      <mesh position={[-0.5, 0.25, 0]} material={chassisMaterial}>
        <boxGeometry args={[0.2, 0.25, 2.3]} />
      </mesh>

      {/* Cargo bed */}
      <mesh position={[-1.8, 0.9, 0]} material={chassisMaterial}>
        <boxGeometry args={[3.2, 0.1, 2.3]} />
      </mesh>
      {/* Cargo walls - sides */}
      <mesh position={[-1.8, 1.5, 1.1]} material={bodyMaterial}>
        <boxGeometry args={[3.2, 1.1, 0.08]} />
      </mesh>
      <mesh position={[-1.8, 1.5, -1.1]} material={bodyMaterial}>
        <boxGeometry args={[3.2, 1.1, 0.08]} />
      </mesh>
      {/* Cargo wall - back */}
      <mesh position={[-3.35, 1.5, 0]} material={bodyMaterial}>
        <boxGeometry args={[0.08, 1.1, 2.2]} />
      </mesh>
      {/* Cargo wall reinforcements */}
      {[-2.8, -1.8, -0.8].map((x, i) => (
        <mesh key={`reinf-l-${i}`} position={[x, 1.5, 1.14]} material={chassisMaterial}>
          <boxGeometry args={[0.06, 1.1, 0.02]} />
        </mesh>
      ))}
      {[-2.8, -1.8, -0.8].map((x, i) => (
        <mesh key={`reinf-r-${i}`} position={[x, 1.5, -1.14]} material={chassisMaterial}>
          <boxGeometry args={[0.06, 1.1, 0.02]} />
        </mesh>
      ))}

      {/* Chassis frame */}
      <mesh position={[-0.5, 0.15, 0.4]} material={chassisMaterial}>
        <boxGeometry args={[6.5, 0.2, 0.15]} />
      </mesh>
      <mesh position={[-0.5, 0.15, -0.4]} material={chassisMaterial}>
        <boxGeometry args={[6.5, 0.2, 0.15]} />
      </mesh>

      {/* Front wheels */}
      <Wheel position={[0.5, -0.1, 1.2]} />
      <Wheel position={[0.5, -0.1, -1.2]} />
      {/* Rear wheels (dual) */}
      <Wheel position={[-2.2, -0.1, 1.15]} />
      <Wheel position={[-2.2, -0.1, 1.45]} />
      <Wheel position={[-2.2, -0.1, -1.15]} />
      <Wheel position={[-2.2, -0.1, -1.45]} />

      {/* Fenders */}
      <mesh position={[0.5, 0.3, 1.25]} material={bodyMaterial}>
        <boxGeometry args={[0.9, 0.08, 0.5]} />
      </mesh>
      <mesh position={[0.5, 0.3, -1.25]} material={bodyMaterial}>
        <boxGeometry args={[0.9, 0.08, 0.5]} />
      </mesh>

      {/* Exhaust pipe */}
      <mesh position={[1.5, 0.8, 1.15]} material={chassisMaterial}>
        <cylinderGeometry args={[0.06, 0.06, 1.2, 8]} />
      </mesh>

      {/* Side mirrors */}
      <mesh position={[0.2, 1.6, 1.3]} material={chassisMaterial}>
        <boxGeometry args={[0.15, 0.12, 0.2]} />
      </mesh>
      <mesh position={[0.2, 1.6, -1.3]} material={chassisMaterial}>
        <boxGeometry args={[0.15, 0.12, 0.2]} />
      </mesh>
    </group>
  );
}

function Wheel({ position }: { position: [number, number, number] }) {
  const wheelMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.05, 0.05, 0.05),
    metalness: 0.2,
    roughness: 0.9,
  }), []);

  const hubMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.4, 0.4, 0.4),
    metalness: 0.8,
    roughness: 0.2,
  }), []);

  return (
    <group position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]} material={wheelMat}>
        <cylinderGeometry args={[0.38, 0.38, 0.25, 16]} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} material={hubMat}>
        <cylinderGeometry args={[0.15, 0.15, 0.26, 8]} />
      </mesh>
    </group>
  );
}

function LimeGlow() {
  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[12, 8]} />
      <meshBasicMaterial color="#aaff00" transparent opacity={0.03} />
    </mesh>
  );
}

const TruckScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [6, 3, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffffff" />
        <directionalLight position={[-3, 5, -3]} intensity={0.4} color="#aaff00" />
        <pointLight position={[0, 2, 5]} intensity={0.8} color="#aaff00" distance={15} />
        <pointLight position={[0, -1, 0]} intensity={0.3} color="#aaff00" distance={10} />
        <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.5} penumbra={1} color="#ffffff" />

        <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.3}>
          <TruckModel />
        </Float>

        <LimeGlow />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default TruckScene;
