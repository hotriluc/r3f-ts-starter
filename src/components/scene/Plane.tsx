import { extend, useThree } from '@react-three/fiber';
import { SketchMaterial } from '../materials/SketchMaterial';

extend({ SketchMaterial });

const Plane = () => {
  const { viewport, size } = useThree();

  return (
    <mesh scale={[4, 1, 1]}>
      <planeGeometry />
      <sketchMaterial
        uResolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
      />
    </mesh>
  );
};

export default Plane;
