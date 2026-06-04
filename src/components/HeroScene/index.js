import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, useTexture } from "@react-three/drei";
import * as THREE from "three";
import iconUrl from "@site/static/img/icon.png";

// Palette (matches the site's blue token family in custom.css)
const C = {
  packet: "#93c5fd",
  packetCore: "#dbeafe",
  node: "#60a5fa",
  link: "#3b82f6",
  wave: "#60a5fa",
};

const REDUCED =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------------------------------------------------------------------------
// Center icon — textured plane with proper PNG alpha
// ---------------------------------------------------------------------------
function CenterIcon() {
  const texture = useTexture(iconUrl);
  const ref = useRef();

  useFrame((state) => {
    if (REDUCED || !ref.current) return;
    // gentle bob + breathing scale so the icon feels alive
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 0.8) * 0.08;
    const s = 1 + Math.sin(t * 1.2) * 0.015;
    ref.current.scale.set(5.6 * s, 5.6 * s, 1);
  });

  return (
    <mesh ref={ref} scale={[5.6, 5.6, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent toneMapped={false} />
    </mesh>
  );
}

// ---------------------------------------------------------------------------
// Animation 1 — data packets flowing along curves toward the icon
// ---------------------------------------------------------------------------
function DataFlow({ count = 7 }) {
  // Build curves from outer points converging on the center (0,0,0).
  const curves = useMemo(() => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + Math.random() * 0.4;
      const radius = 4.2 + Math.random() * 1.6;
      const start = new THREE.Vector3(
        Math.cos(a) * radius,
        Math.sin(a) * radius * 0.55,
        (Math.random() - 0.5) * 1.5
      );
      // a bowed control point so the path arcs instead of going straight in
      const mid = start
        .clone()
        .multiplyScalar(0.45)
        .add(new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, 0));
      const end = new THREE.Vector3(0, 0, 0.2);
      out.push(new THREE.CatmullRomCurve3([start, mid, end]));
    }
    return out;
  }, [count]);

  return (
    <group>
      {curves.map((curve, i) => (
        <Flow key={i} curve={curve} offset={i / count} />
      ))}
    </group>
  );
}

function Flow({ curve, offset }) {
  const head = useRef();
  const trail = useRef();
  const points = useMemo(() => curve.getPoints(48), [curve]);

  useFrame((state) => {
    if (REDUCED || !head.current) return;
    const t = (state.clock.elapsedTime * 0.18 + offset) % 1;
    const p = curve.getPointAt(t);
    head.current.position.copy(p);
    // packet brightens as it nears the icon
    const closeness = 1 - t;
    head.current.scale.setScalar(0.06 + closeness * 0.05);
    if (trail.current) trail.current.material.opacity = 0.08 + closeness * 0.12;
  });

  return (
    <group>
      <Line
        ref={trail}
        points={points}
        color={C.link}
        lineWidth={1}
        transparent
        opacity={0.12}
      />
      <mesh ref={head}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial color={C.packetCore} toneMapped={false} />
      </mesh>
    </group>
  );
}

// ---------------------------------------------------------------------------
// Animation 2 — nodes orbiting the icon, with links back to the core
// ---------------------------------------------------------------------------
function OrbitingNodes({ count = 9 }) {
  const group = useRef();
  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const r = 2.6 + (i % 3) * 0.35;
      arr.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 0.5, Math.sin(a * 2) * 0.6));
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (REDUCED || !group.current) return;
    group.current.rotation.z += delta * 0.08;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });

  return (
    <group ref={group}>
      {nodes.map((pos, i) => (
        <group key={i}>
          <Line
            points={[[0, 0, 0], [pos.x, pos.y, pos.z]]}
            color={C.link}
            lineWidth={1}
            transparent
            opacity={0.1}
          />
          <mesh position={pos}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color={C.node} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ---------------------------------------------------------------------------
// Animation 3 — radiating "wifi" wave rings expanding from the icon
// ---------------------------------------------------------------------------
function WifiWaves({ count = 4 }) {
  const refs = useRef([]);
  const period = 4; // seconds for a ring to travel out

  useFrame((state) => {
    const base = REDUCED ? 0 : state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const ring = refs.current[i];
      if (!ring) continue;
      const phase = ((base / period) + i / count) % 1;
      const scale = 0.4 + phase * 4.2;
      ring.scale.set(scale, scale, scale);
      ring.material.opacity = (1 - phase) * 0.35;
    }
  });

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)}>
          <ringGeometry args={[0.92, 1, 64]} />
          <meshBasicMaterial
            color={C.wave}
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// ---------------------------------------------------------------------------
// Scene + Canvas
// ---------------------------------------------------------------------------
function Scene() {
  return (
    <>
      <WifiWaves />
      <OrbitingNodes />
      <DataFlow />
      <Suspense fallback={null}>
        <CenterIcon />
      </Suspense>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}
