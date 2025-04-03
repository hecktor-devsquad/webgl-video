/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Chicken.glb -o src/components/Chiken.jsx -r public 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Chicken2(props) {
  const { nodes, materials } = useGLTF('/models/Chicken.glb')

  return (
    <group name="chicken" {...props} dispose={null} scale={[0.002, 0.002, 0.002]} castShadow>
      <mesh geometry={nodes['Cube035_Cube034-Mesh'].geometry} material={materials.FF9800} />
      <mesh geometry={nodes['Cube035_Cube034-Mesh_1'].geometry} material={materials.FFFFFF} />
      <mesh geometry={nodes['Cube035_Cube034-Mesh_2'].geometry} material={materials['1A1A1A']} />
      <mesh geometry={nodes['Cube035_Cube034-Mesh_3'].geometry} material={materials.F44336} />
      <mesh geometry={nodes['Cube035_Cube034-Mesh_4'].geometry} material={materials['455A64']} />
    </group>
  )
}

useGLTF.preload('/models/Chicken.glb')
