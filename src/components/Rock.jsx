/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Rock.glb -o src/components/Rock.jsx -r public 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Rock(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/Rock.glb`)
  return (
    <group name="rock" {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials.mat22} castShadow />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/Rock.glb`)
