import { Center, PresentationControls } from '@react-three/drei';
import Plane from './Plane';

const Scene = () => {
  return (
    <>
      <PresentationControls global snap speed={2}>
        <Center>
          <Plane />
        </Center>
      </PresentationControls>
    </>
  );
};

export default Scene;
