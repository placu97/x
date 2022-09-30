import "./index.css";
import { Canvas } from "@react-three/fiber";
//import { Html } from "@react-three/drei";
import Three from "./components/three";
import { Suspense } from "react";
import Points from "./components/points";
import SceneContainer from "./components/SceneContainer";
import { Sphere } from "@react-three/drei";

export default function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={<div>... Loading </div>}>
        {/* <Three /> */}
        {/* <Points /> */}
        <SceneContainer />
        {/* <CBox position={[,-1,1]}/>
        <CBox position={[-1,1,1]} />
        <Sphere position={[-2,0,0]} args={[0.8, 16,16]} />
        <ambientLight /> */}
      </Suspense>
    </Canvas>
  );
}


// import { createRoot } from 'react-dom/client'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>,
// )