import React, { useEffect, useRef } from 'react'
import { Environment, OrbitControls, Torus, PerspectiveCamera } from '@react-three/drei'
import { angleToRadians } from '../utils/angle'
import { useFrame } from '@react-three/fiber'

export default function SceneContainer() {
  
  const orbitControlRef = useRef(null)

  useFrame((state)=> {
    if (!!orbitControlRef.current) {
      const {x ,y } = state.mouse
      orbitControlRef.current.setAzimuthalAngle( - x* (Math.PI/2))
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
    <PerspectiveCamera makeDefault position={[0,3,9]} />
    <OrbitControls   autoRotate maxPolarAngle={6} ref={orbitControlRef} />
    

    {/* Ball */}
    <mesh position={[0,1,0]}>
      <sphereGeometry args={[1,30,30]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>

    {/* Floor */}
    <mesh rotation={[ -angleToRadians(90),0,0 ]}  >
      <planeGeometry args={[5,5]}  />
      <meshStandardMaterial color={'purple'} />
    </mesh>
    <ambientLight/>
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

