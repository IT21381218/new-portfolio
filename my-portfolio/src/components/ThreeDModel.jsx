import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three";

const ThreeDModel = () => {
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
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

      object.scale.set(5, 5, 5);
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
        modelRef.current.position.y = Math.sin(elapsedTime * 0.1) * 0.4;
        modelRef.current.position.x = Math.sin(elapsedTime * 0.1) * 0.2; // Adjust amplitude and speed here

        // Default rotation effect based on user input (either mouse or device)
        modelRef.current.rotation.x = 0; // Will be updated based on device orientation
        modelRef.current.rotation.y = 0; // Will be updated based on device orientation
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle mobile device orientation
    const handleOrientation = (event) => {
      const { gamma, beta, alpha } = event; // Get device orientation values

      // Check if gamma and beta are available (they might not be in some browsers)
      if (gamma === null || beta === null) {
        return;
      }

      // Normalize gamma and beta to a more usable scale
      const rotateX = beta / 90; // Adjust to rotate on the X-axis (Up/Down tilt)
      const rotateY = gamma / 90; // Adjust to rotate on the Y-axis (Left/Right tilt)

      // Apply the rotation effect to the 3D model
      if (modelRef.current) {
        // Convert to radians for Three.js rotation
        modelRef.current.rotation.x = rotateX * Math.PI / 180; // Convert to radians
        modelRef.current.rotation.y = rotateY * Math.PI / 180; // Convert to radians
      }
    };

    // Add event listener for device orientation
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="threeDModel-container" ref={sceneRef} />;
};

export default ThreeDModel;
