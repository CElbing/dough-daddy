"use client";

{
  /*  */
}

{
  /* Note, I don't need to import anything, All three.js objects will be treated as native JSX elements, 
    just like you only need to write <div /> or <span /> in regular ReactDOM. The general rule is that Fiber 
    components are available under the camel-case version of their name in three.js. */
}

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ScrollControls, useScroll } from "@react-three/drei";

export default function BonsaiCanvas() {
  return (
    <div
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <Canvas camera={{ fov: 29 }}>
        {" "}
        {/* This sets up a Scene and a Camera for rendering, every frame in a scene is rendered for me.*/}
        <ScrollControls pages={2}>
          <BonsaiTree />
        </ScrollControls>
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
}

function BonsaiTree({ ...props }) {
  // Place your .glb file in the /public folder
  const scroll = useScroll();
  const { scene } = useGLTF("/3JS-Assets/juniper.glb");
  useFrame((state) => {
    const offset = 1 - scroll.offset;
    state.camera.lookAt(0, 0, 0);
    state.camera.zoom = 3 - 2 * offset;
    state.camera.updateProjectionMatrix();
  });
  return <primitive object={scene} {...props} />;
}
