import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "../utils/angle";
import { useRef, useEffect } from "react";
import * as THREE from "three"
import gsap from "gsap"

export default function Three() {
  return (
  <>
  <PerspectiveCamera makeDefault position={[1, 1, 9]} />
	<OrbitControls  />

	{/*BALL*/}
	<mesh position={[-3, 5.5, 0]} castShadow >
	  <sphereGeometry args={[0.5, 32, 32]} />
	  <meshStandardMaterial color={"#fffff"} metalness={0.9} roughness={0.3} />
	</mesh>
	

	<ambientLight args={["#ffffff", 0.25]} />
	</>
  )
}