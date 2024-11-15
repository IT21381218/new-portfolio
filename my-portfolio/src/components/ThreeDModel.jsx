import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three";

const ThreeDModel = () => {
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 }); // Use ref instead of state to avoid re-renders
  const clock = useRef(new THREE.Clock()); // Clock for tracking animation time

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    const textureLoader = new TextureLoader();
    const diffuseTexture = textureLoader.load("/assets/textures/texture_diffuse.png");
    const normalTexture = textureLoader.load("/assets/textures/texture_normal.png");
    const metallicTexture = textureLoader.load("/assets/textures/texture_metallic.png");
    const roughnessTexture = textureLoader.load("/assets/textures/texture_roughness.png");

    const objLoader = new OBJLoader();
    objLoader.load("/assets/models/base.obj", (object) => {
      modelRef.current = object;

      object.traverse((child) => {
        if (child.isMesh) {
          child.material.map = diffuseTexture;
          child.material.normalMap = normalTexture;
          child.material.metalnessMap = metallicTexture;
          child.material.roughnessMap = roughnessTexture;
          child.material.needsUpdate = true;
        }
      });

      object.scale.set(4, 4, 4);
      object.position.set(0, 0, -4);
      scene.add(object);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.current.getElapsedTime(); // Get elapsed time for floating effect

      // Apply smooth rotation and floating effect
      if (modelRef.current) {
        // Floating effect
        modelRef.current.position.y = Math.sin(elapsedTime * 0.8) * 0.4;
        modelRef.current.position.x = Math.sin(elapsedTime * 0.5) * 0.2; // Adjust amplitude and speed here

        // Rotation effect based on mouse or touch position
        modelRef.current.rotation.x = mousePos.current.y * Math.PI * 0.3; // Horizontal rotation effect
        modelRef.current.rotation.y = mousePos.current.x * Math.PI * 0.3; // Vertical rotation effect
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) - 0.5;
      const y = (event.clientY / window.innerHeight) - 0.5;
      mousePos.current = { x, y }; // Update mouse position using ref
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const x = (touch.clientX / window.innerWidth) - 0.5;
      const y = (touch.clientY / window.innerHeight) - 0.5;
      mousePos.current = { x, y }; // Update touch position using ref
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="threeDModel-container" ref={sceneRef} />;
};

export default ThreeDModel;
