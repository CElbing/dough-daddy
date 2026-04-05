'use client'

{/*  */ }

{/* Note, I don't need to import anything, All three.js objects will be treated as native JSX elements, 
    just like you only need to write <div /> or <span /> in regular ReactDOM. The general rule is that Fiber 
    components are available under the camel-case version of their name in three.js. */}

import { Canvas } from '@react-three/fiber'

export default function BonsaiCanvas() {
    return (
        <div id="canvas-container" style={{ width: '100vw', height: '100vh' }}>
            <Canvas> {/* This sets up a Scene and a Camera for rendering, every frame in a scene is rendered for me.*/}
                <ambientLight intensity={1} />
                <directionalLight color="white" position={[0, 0, 5]} />
                <mesh> {/* Equivalent to THREE.Mesh(), allows me to see what is in the scene*/}
                    <boxGeometry args={[2, 2, 2]} /> {/* Creating a new mesh using BoxGeometry, this is the 3D space */}
                    <meshStandardMaterial color="hotpink" /> {/* This is the surface apperance of the 3D space */}
                </mesh>
            </Canvas>
        </div>
    )
}