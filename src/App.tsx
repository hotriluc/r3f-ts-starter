import { Canvas } from '@react-three/fiber';
import Overlay from './components/overlay/Overlay';
import Scene from './components/scene/Scene';

const App = () => {
  return (
    <>
      <Overlay />
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Scene />
      </Canvas>
    </>
  );
};

export default App;
