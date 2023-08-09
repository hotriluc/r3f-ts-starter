import * as THREE from 'three';

import { shaderMaterial } from '@react-three/drei';
import { Object3DNode } from '@react-three/fiber';

import sketchShaderFragment from '../../shaders/sketch/fragment.glsl';
import sketchShaderVertex from '../../shaders/sketch/vertex.glsl';

export type SketchMaterialUniforms = {
  uTime?: number;
  uResolution?: THREE.Vector2 | [x: number, y: number];
};

export type SketchMaterialRef = THREE.ShaderMaterial & SketchMaterialUniforms;
export type SketchMaterialImpl = Object3DNode<
  THREE.ShaderMaterial,
  typeof THREE.ShaderMaterial
> &
  SketchMaterialUniforms;

export const SketchMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
  },
  sketchShaderVertex,
  sketchShaderFragment
);
