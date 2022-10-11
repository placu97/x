import React, { useEffect, useRef } from 'react'
import { Environment, OrbitControls, Torus, PerspectiveCamera } from '@react-three/drei'
import { angleToRadians } from '../utils/angle'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SceneContainer() {
  
  const orbitControlRef = useRef(null)
  const directionalLightRef = useRef(null)

  useFrame((state)=> {
    if (!!orbitControlRef.current) {
      const {x ,y } = state.mouse
      orbitControlRef.current.setAzimuthalAngle( - x* (Math.PI/2))
      orbitControlRef.current.setPolarAngle(y/3 * Math.PI /6 + Math.PI/2.5)
    }
  })
  
  useEffect(()=>  {
    if (!!orbitControlRef.current) {
      console.log(orbitControlRef.current)
      console.log("wwwwwww")
    }
  })

  return (
	<>
    {/* Camera */}
    <PerspectiveCamera makeDefault position={[0,3,12]} />
    <OrbitControls  autoRotate maxPolarAngle={6} ref={orbitControlRef} />

    {/* Environment */}
    <Environment background  >
      <mesh  >
        <sphereGeometry args={[23, 3,3]} />
        <meshBasicMaterial side={THREE.BackSide} color="purple" />
      </mesh>
    </Environment>
    
    {/* Lighting */}
    <ambientLight args={["yellow", 0.5]} />
    <pointLight ref={directionalLightRef} args={["#ffffff", 1.2, 100]} position={[-5, 2, 6]} castShadow />
    <pointLight ref={directionalLightRef} args={["#ffffff", 1.2, 100]} position={[5, 2, 6]} castShadow />

    {/* Ball */}
    <mesh position={[0,1,0]} castShadow >
      <sphereGeometry args={[1,30,30]} />
      <meshStandardMaterial color={'orange'} metalness={0.9} roughness={0.1} emissive={0.1} />
    </mesh>

    {/* Ball 2 */}
    <points position={[0 , 3.8 , 0]} >
      <sphereGeometry args={[1,32,32]} />
      <pointsMaterial size={0.1} />
    </points>

    {/* Floor */}
    <mesh rotation={[ -angleToRadians(90),0,0 ]} receiveShadow >
      <planeGeometry args={[15,15]}  />
      <meshStandardMaterial color={'purple'} />
    </mesh>
    
	</>
  )
}


// export default function CBox() {
//   return (
//     <mesh >
//       <boxGeometry args={[1,1,1]} />
//       <meshStandardMaterial color={'orange'} />
//     </mesh>
//   )
// }

