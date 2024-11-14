import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three";

const ThreeDModel = () => {
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const touchStartPos = useRef({ x: 0, y: 0 });
  const touchDelta = useRef({ x: 0, y: 0 }); // Store touch movement delta

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

      // Apply smooth rotation based on mouse or touch position for the 3D model
      if (modelRef.current) {
        modelRef.current.rotation.x = (mousePos.current.y + touchDelta.current.y) * Math.PI * 0.3;
        modelRef.current.rotation.y = (mousePos.current.x + touchDelta.current.x) * Math.PI * 0.3;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Mouse movement handler
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) - 0.5;
      const y = (event.clientY / window.innerHeight) - 0.5;
      mousePos.current = { x, y };
    };

    // Touch start handler to capture initial touch position
    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    };

    // Touch move handler to calculate the touch delta and update rotation
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const deltaX = (touch.clientX - touchStartPos.current.x) / window.innerWidth;
      const deltaY = (touch.clientY - touchStartPos.current.y) / window.innerHeight;
      touchDelta.current = { x: deltaX, y: deltaY };
    };

    // Reset touch delta on touch end
    const handleTouchEnd = () => {
      touchDelta.current = { x: 0, y: 0 };
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="threeDModel-container" ref={sceneRef} />;
};

export default ThreeDModel;
