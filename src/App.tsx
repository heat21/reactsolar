
import { Canvas } from '@react-three/fiber';
import MainComponent from './MainComponent';


function App() {
  return (
    <Canvas camera={{fov:75, near :0.1, far:1000,position:[0,3,3]}}>
    <MainComponent/>

    </Canvas>
     
  
  )
}

export default App
