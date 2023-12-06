import { MeshDiscardMaterial } from '@react-three/drei';
import React from 'react'
import { SphereGeometry } from 'three';
import { useTexture } from '@react-three/drei';
import  {useFrame} from '@react-three/fiber'

import {useRef } from 'react'  


 const Earth = ({displacementScale}) => {
  // const earthRef=useRef()
const [earthTexture, earthNormalMap,earthSpecularMap,earthDisplacementMap]= useTexture([
  './assets/2k_earth_daymap.jpg', 
  './assets/spuctlar.jpg', 
    
'./assets/earth2.jpg',
'./assets/displacement.jpg', 
])

// useFrame(()=>{
//   earthRef.current.rotation.y+=0.002;
// })

  return (
    // reduis, x-axis, y-axis
    // ref={useRef}
    <mesh >
        <sphereGeometry args={[1,32,32]}/>
        <meshPhongMaterial color={'blue'} map={earthTexture}
         normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          displacementMap={earthDisplacementMap}
          displacementScale={displacementScale}/>
    </mesh>
  )
}
export default Earth;