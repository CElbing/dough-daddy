'use client'

{/*  */ }

{/* Note, I don't need to import anything, All three.js objects will be treated as native JSX elements, 
    just like you only need to write <div /> or <span /> in regular ReactDOM. The general rule is that Fiber 
    components are available under the camel-case version of their name in three.js. */}

import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

export default function BonsaiCanvas() {
    return (
        <div id="canvas-container" style={{ width: '100vw', height: '100vh' }}>
            <Canvas> {/* This sets up a Scene and a Camera for rendering, every frame in a scene is rendered for me.*/}
                <Model />
                <OrbitControls />
                <ambientLight intensity={1} />
                <directionalLight color="white" position={[0, 0, 5]} />
            </Canvas>
        </div>
    )
}

function Model() {
    // Place your .glb file in the /public folder
    const { scene } = useGLTF('/3JS-Assets/juniper-dead-wood.glb')
    return <primitive object={scene} />
}

