import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three";

const ThreeDModel = () => {
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 }); // Use ref instead of state to avoid re-renders
  const clock = useRef(new THREE.Clock()); // Clock for tracking animation time
  const targetRotation = useRef({ x: 0, y: 0 }); // Target rotation based on touch or mouse
  const currentRotation = useRef({ x: 0, y: 0 }); // Current rotation of the model

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

        // Smooth rotation toward target
        currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.1;
        currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.1;

        modelRef.current.rotation.x = currentRotation.current.y * Math.PI * 0.3; // Horizontal rotation effect
        modelRef.current.rotation.y = currentRotation.current.x * Math.PI * 0.3; // Vertical rotation effect
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) - 0.5;
      const y = (event.clientY / window.innerHeight) - 0.5;
      targetRotation.current = { x, y }; // Update target rotation based on mouse position
    };

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      const x = (touch.clientX / window.innerWidth) - 0.5;
      const y = (touch.clientY / window.innerHeight) - 0.5;

      // Set the target rotation based on touch position
      targetRotation.current = { x, y };
    };

    const handleTouchMove = (event) => {
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        const x = (touch.clientX / window.innerWidth) - 0.5;
        const y = (touch.clientY / window.innerHeight) - 0.5;

        // Update the target rotation position based on touch movement
        targetRotation.current = { x, y };
      }
    };

    const handleDeviceOrientation = (event) => {
      const tiltX = event.beta; // Rotation around X-axis (tilt forward/backward)
      const tiltY = event.gamma; // Rotation around Y-axis (tilt left/right)

      if (modelRef.current) {
        // Invert the direction of rotation for opposite movement
        targetRotation.current = {
          x: -tiltY / 90, // Normalize tilt values to [-1, 1] range
          y: -tiltX / 90,
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("deviceorientation", handleDeviceOrientation);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="threeDModel-container" ref={sceneRef} />;
};

export default ThreeDModel;


// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { TextureLoader } from "three";

// const ThreeDModel = () => {
//   const sceneRef = useRef(null);
//   const modelRef = useRef(null);
//   const mousePos = useRef({ x: 0, y: 0 }); // Use ref instead of state to avoid re-renders
//   const clock = useRef(new THREE.Clock()); // Clock for tracking animation time
//   const targetRotation = useRef({ x: 0, y: 0 }); // Target rotation based on touch or mouse
//   const currentRotation = useRef({ x: 0, y: 0 }); // Current rotation of the model

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     scene.background = null;

//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     if (sceneRef.current) {
//       sceneRef.current.appendChild(renderer.domElement);
//     }

//     const light = new THREE.AmbientLight(0xffffff, 1);
//     scene.add(light);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 5, 5).normalize();
//     scene.add(directionalLight);

//     const textureLoader = new TextureLoader();
//     const diffuseTexture = textureLoader.load("/assets/textures/texture_diffuse.png");
//     const normalTexture = textureLoader.load("/assets/textures/texture_normal.png");
//     const metallicTexture = textureLoader.load("/assets/textures/texture_metallic.png");
//     const roughnessTexture = textureLoader.load("/assets/textures/texture_roughness.png");

//     const objLoader = new OBJLoader();
//     objLoader.load("/assets/models/base.obj", (object) => {
//       modelRef.current = object;

//       object.traverse((child) => {
//         if (child.isMesh) {
//           child.material.map = diffuseTexture;
//           child.material.normalMap = normalTexture;
//           child.material.metalnessMap = metallicTexture;
//           child.material.roughnessMap = roughnessTexture;
//           child.material.needsUpdate = true;
//         }
//       });

//       object.scale.set(5, 5, 5);
//       object.position.set(0, 0, -4);
//       scene.add(object);
//     });

//     camera.position.z = 5;

//     const animate = () => {
//       requestAnimationFrame(animate);

//       const elapsedTime = clock.current.getElapsedTime(); // Get elapsed time for floating effect

//       // Apply smooth rotation and floating effect
//       if (modelRef.current) {
//         // Floating effect
//         modelRef.current.position.y = Math.sin(elapsedTime * 0.1) * 0.4;
//         modelRef.current.position.x = Math.sin(elapsedTime * 0.1) * 0.2; // Adjust amplitude and speed here

//         // Smooth rotation toward target
//         currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.1;
//         currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.1;

//         modelRef.current.rotation.x = currentRotation.current.y * Math.PI * 0.3; // Horizontal rotation effect
//         modelRef.current.rotation.y = currentRotation.current.x * Math.PI * 0.3; // Vertical rotation effect
//       }

//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleMouseMove = (event) => {
//       const x = (event.clientX / window.innerWidth) - 0.5;
//       const y = (event.clientY / window.innerHeight) - 0.5;
//       targetRotation.current = { x, y }; // Update target rotation based on mouse position
//     };

//     const handleTouchStart = (event) => {
//       const touch = event.touches[0];
//       const x = (touch.clientX / window.innerWidth) - 0.5;
//       const y = (touch.clientY / window.innerHeight) - 0.5;

//       // Set the target rotation based on touch position
//       targetRotation.current = { x, y };
//     };

//     const handleTouchMove = (event) => {
//       if (event.touches.length === 1) {
//         const touch = event.touches[0];
//         const x = (touch.clientX / window.innerWidth) - 0.5;
//         const y = (touch.clientY / window.innerHeight) - 0.5;

//         // Update the target rotation position based on touch movement
//         targetRotation.current = { x, y };
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchmove", handleTouchMove);

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//       if (sceneRef.current) {
//         sceneRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div className="threeDModel-container" ref={sceneRef} />;
// };

// export default ThreeDModel;
