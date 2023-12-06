import { OrbitControls, useHelper} from '@react-three/drei';
import AnimatedStars from './AnimatedStars';
import Earth from './Earth';
import { useRef } from 'react'
import * as THREE from 'three'
 const MainComponent = () => { 
  

          const directionalLightRef = useRef();
          const directionalLightRefTwo = useRef();

    useHelper(directionalLightRef,THREE.DirectionalLightHelper, 1, 'hotpink')
    useHelper(directionalLightRefTwo,THREE.DirectionalLightHelper, 1, 'hotpink')

 
  return (
 <>
    
        <color attach='background' args={['black']}/>
        <AnimatedStars/>
        <OrbitControls/>
        {/* <directionalLight ref={directionalLightRef} position={[0,0,10]} intensity={5} color={0xffbb6} /> */}
        {/* <directionalLight ref={directionalLightRefTwo} position={[0,0,-10]} /> */}
        <ambientLight/>
        <Earth displacementScale={0.15}/>
  
 </>
  )
}
export default MainComponent;
