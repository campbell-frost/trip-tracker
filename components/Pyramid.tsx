'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import * as THREE from 'three'
import { useTheme } from 'next-themes'


const Pyramid = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === 'dark';

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  const geometry = new THREE.BufferGeometry()
  const vertices = new Float32Array([
    0,  .5,  0,   // top
   -1, -1,  1,   // bottom front left
    1, -1,  1,   // bottom front right
    1, -1, -1,   // bottom back right
   -1, -1, -1    // bottom back left
 ])
 const indices = new Uint16Array([
   0, 1, 2,
   0, 2, 3,
   0, 3, 4,
   0, 4, 1,
 ])
 geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
 geometry.setIndex(new THREE.BufferAttribute(indices, 1))
 geometry.computeVertexNormals()

 let color = dark ? "#FFFFFF" : "#000000"
 return (
   <mesh ref={meshRef} geometry={geometry}>
     <meshBasicMaterial wireframe color={color} transparent opacity={0.5} />
   </mesh>
 )
}

const RotatingPyramid: React.FC = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Pyramid />
      </Canvas>
    </div>
  )
}

export default RotatingPyramid