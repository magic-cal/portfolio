import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export declare type GltfObjectMap = GLTF & {
  nodes: {
    [name: string]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.Material;
  };
};
