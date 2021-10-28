import React, { useRef,Suspense  } from "react";
import { Canvas,useFrame, useLoader } from "@react-three/fiber";
import { PointMaterial, Stars } from "@react-three/drei";
import * as three from "three";
import About from "../pages/about";
import normalImg from '../models/pux.png_specular.png';
import aoImg from '../models/pux.png_ambient.png';
import specImg from '../models/pux.png_specularreal.png';
// import disImg from '../models/pux.png_displacement.png';
function Inside() {

  const sphereRef = useRef();


  const [normal, ao, spec] = useLoader(three.TextureLoader, [normalImg, aoImg,specImg]);

  useFrame(() => {
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.01;
  });

  return(
  <mesh ref={sphereRef} scale={3}>
    <boxGeometry/>

    <meshPhysicalMaterial  
      attach="material" 
      color="#ffffff"
      roughness={0.1}
        metalness={0.1}
      normalMap = {normal}
      // displacementMap = {displacement}
      aoMap = {ao}
      specularIntensityMap = {spec}
      />
  </mesh>
)}
  
export default function ThreeCanvas() {
  return (
    <Canvas className="webgl">
        <Suspense fallback={null}>
            <Inside />
        </Suspense>
        <ambientLight intensity={3}/>
        <pointLight intensity={2} position={[10, 10, 10]} color="#0000ff"/>
        {/* <directionalLight intensity={0.5} /> */}
    </Canvas>
  );
}
