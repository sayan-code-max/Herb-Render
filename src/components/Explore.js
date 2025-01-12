// import React, { useState } from 'react';
// import './Explore.css'; 
// import { Canvas } from "@react-three/fiber";
// import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

// function Model(props) {
//   const { scene } = useGLTF("/land.glb");
//   return <primitive object={scene} {...props} />
// }

// const Explore = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     setShowPopup(true);  // Show the pop-up when search is clicked
//   };

//   const closePopup = () => {
//     setShowPopup(false); // Close the pop-up
//   };

//   return (
//     <div style={{ width: '100%', backgroundColor: 'rgb(17, 9, 16)', zIndex: '200', color: 'white', height: '100vh' }}>
//       <h1 className='heading' style={{zIndex: '2'}}>Explore the Herbs</h1>
//       <form className="d-flex" role="search" onSubmit={handleSearch} style={{ position: 'relative', zIndex: 2 }}>
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>

//       <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
//         <color attach="background" args={["#101010"]} />
//         <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
//           <Stage environment={"sunset"}>
//             <Model scale={0.01} />
//           </Stage>
//         </PresentationControls>
//       </Canvas>

//       {/* Pop-up Code */}
//       {showPopup && (
//         <div className={`popup ${showPopup ? 'open' : ''}`} style={{ zIndex: 3 }}>
//           <div className="popup-content">
//             <span className="close-btn" onClick={closePopup}>&times;</span>
//             <img src="/images/herb.jpeg" alt="Herb" className="popup-image" />
//             <div className="popup-info">
//               <h2>Herb Name</h2>
//               <p>Description about the herb and its medicinal benefits.</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Explore;





























// import React, { useState, useEffect, useRef } from 'react';
// import './Explore.css'; 
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
// import { Vector3 } from "three";

// // Load the main environment model
// function Model(props) {
//   const { scene } = useGLTF("/land.glb");  // Ensure the path to your 3D model is correct
//   return <primitive object={scene} {...props} />;
// }

// // Load character model (Replace with your own model or a simple placeholder cube for now)
// function Character({ position }) {
//   const characterRef = useRef();

//   // Optional: You can load a 3D model of a character here using `useGLTF` or `useFBX`
//   const { scene } = useGLTF('/character.glb');

//   // For now, using a simple box as a placeholder for the character
//   return (
//     <mesh ref={characterRef} position={position}>
//       <boxGeometry args={[0.5, 1, 0.5]} /> {/* A simple box for character */}
//       <meshStandardMaterial color={'orange'} />
//     </mesh>
//   );
// }

// const Explore = () => {
//   const [characterPosition, setCharacterPosition] = useState(new Vector3(0, 0, 0)); // Character's initial position

//   const handleKeyDown = (event) => {
//     const { key } = event;
//     setCharacterPosition((prevPosition) => {
//       const newPosition = prevPosition.clone(); // Clone the previous position

//       // Movement logic: Adjust the character's position based on arrow keys or WASD
//       switch (key) {
//         case 'ArrowUp':
//         case 'w':
//           newPosition.z -= 0.1; // Move forward
//           break;
//         case 'ArrowDown':
//         case 's':
//           newPosition.z += 0.1; // Move backward
//           break;
//         case 'ArrowLeft':
//         case 'a':
//           newPosition.x -= 0.1; // Move left
//           break;
//         case 'ArrowRight':
//         case 'd':
//           newPosition.x += 0.1; // Move right
//           break;
//         default:
//           break;
//       }

//       return newPosition; // Return the updated position
//     });
//   };

//   // Listen for keyboard events
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown); // Clean up event listener
//     };
//   }, []);

//   return (
//     <div style={{ width: '100%', backgroundColor: 'rgb(17, 9, 16)', zIndex: '200', color: 'white', height: '100vh' }}>
//       <h1 className='heading' style={{zIndex: '2'}}>Explore the Herbs</h1>

//       <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 2, 5] }} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
//         <color attach="background" args={["#101010"]} />
//         <Stage environment={"sunset"}>
//           <Model scale={0.01} />  {/* Model reintroduced here */}
//         </Stage>

//         {/* Render the roaming character */}
//         <Character position={characterPosition} />

//         {/* Enable Orbit Controls for roaming */}
//         <OrbitControls 
//           enablePan={true} 
//           enableZoom={true} 
//           enableRotate={true} 
//           maxPolarAngle={Math.PI / 2} 
//           minPolarAngle={0} 
//         />
//       </Canvas>
//     </div>
//   );
// };

// export default Explore;




























// import React, { useState, useEffect, useRef } from 'react';
// import './Explore.css'; 
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
// import { Vector3 } from "three";

// // Model component for loading the GLTF scene (land.glb) with textures preserved
// function Model(props) {
//   const { scene } = useGLTF("/land.glb");
//   return <primitive object={scene} {...props} />;
// }

// // Character component for roaming (now with scaled-down character)
// function Character({ position }) {
//   const characterRef = useRef();

//   // Load the character model (replace '/character.glb' with the path to your textured character)
//   const { scene: characterScene } = useGLTF('/character.glb');

//   // Apply a scale to the character model to make it small enough to fit the land
//   return <primitive object={characterScene} position={position} scale={[0.1, 0.1, 0.1]} />;
// }

// const Explore = () => {
//   const [characterPosition, setCharacterPosition] = useState(new Vector3(0, 0, 0)); // Character's initial position
//   const [searchQuery, setSearchQuery] = useState(''); // For search input
//   const [showPopup, setShowPopup] = useState(false);

//   // Handle the movement of the character
//   const handleKeyDown = (event) => {
//     const { key } = event;
//     setCharacterPosition((prevPosition) => {
//       const newPosition = prevPosition.clone(); // Clone the previous position

//       // Movement logic: Adjust the character's position based on arrow keys or WASD
//       switch (key) {
//         case 'ArrowUp':
//         case 'w':
//           newPosition.z -= 0.1; // Move forward
//           break;
//         case 'ArrowDown':
//         case 's':
//           newPosition.z += 0.1; // Move backward
//           break;
//         case 'ArrowLeft':
//         case 'a':
//           newPosition.x -= 0.1; // Move left
//           break;
//         case 'ArrowRight':
//         case 'd':
//           newPosition.x += 0.1; // Move right
//           break;
//         default:
//           break;
//       }

//       return newPosition; // Return the updated position
//     });
//   };

//   // Handle search input
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Handle search submission
//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     setShowPopup(true);  // Show the pop-up when search is clicked
//   };

//   const closePopup = () => {
//     setShowPopup(false); // Close the pop-up
//   };

//   // Listen for keyboard events for character movement
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown); // Clean up event listener
//     };
//   }, []);

//   return (
//     <div style={{ width: '100%', backgroundColor: 'rgb(17, 9, 16)', zIndex: '200', color: 'white', height: '100vh' }}>
//       <h1 className='heading' style={{zIndex: '2'}}>Explore the Herbs</h1>
//       <form className="d-flex" role="search" onSubmit={handleSearch} style={{ position: 'relative', zIndex: 2 }}>
//         <input 
//           className="form-control me-2" 
//           type="search" 
//           placeholder="Search" 
//           aria-label="Search" 
//           value={searchQuery} 
//           onChange={handleSearchChange}
//         />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>

//       <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 2, 5] }} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
//         <color attach="background" args={["#101010"]} />
//         <Stage environment={"sunset"}>
//           <Model scale={0.01} />
//         </Stage>

//         {/* Render the roaming character with scaled size */}
//         <Character position={characterPosition} />

//         {/* Enable Orbit Controls for roaming */}
//         <OrbitControls 
//           enablePan={true} 
//           enableZoom={true} 
//           enableRotate={true} 
//           maxPolarAngle={Math.PI / 2} 
//           minPolarAngle={0} 
//         />
//       </Canvas>

//       {/* Pop-up Code */}
//       {showPopup && (
//         <div className={`popup ${showPopup ? 'open' : ''}`} style={{ zIndex: 3 }}>
//           <div className="popup-content">
//             <span className="close-btn" onClick={closePopup}>&times;</span>
//             <img src="/images/herb.jpeg" alt="Herb" className="popup-image" />
//             <div className="popup-info">
//               <h2>{searchQuery}</h2>
//               <p>Description about the herb and its medicinal benefits.</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Explore;




























// import React, { useState, useEffect, useRef } from 'react';
// import './Explore.css'; 
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
// import { Vector3 } from "three";

// // Load the land model with original textures
// function Model(props) {
//   const { scene } = useGLTF("/land2.glb");
  
//   // Ensure that the original materials and textures are preserved
//   return <primitive object={scene} {...props} />;
// }

// // Character component for roaming, with scaled-down size
// function Character({ position }) {
//   const characterRef = useRef();

//   // Load the character model with textures
//   const { scene: characterScene } = useGLTF('/character.glb');

//   // Apply a scale to the character to make it small enough to fit the land
//   return <primitive object={characterScene} position={position} scale={[0.1, 0.1, 0.1]} />;
// }

// const Explore = () => {
//   const [characterPosition, setCharacterPosition] = useState(new Vector3(0, 0, 0)); // Character's initial position
//   const [searchQuery, setSearchQuery] = useState(''); // For search input
//   const [showPopup, setShowPopup] = useState(false);

//   // Handle the movement of the character
//   const handleKeyDown = (event) => {
//     const { key } = event;
//     setCharacterPosition((prevPosition) => {
//       const newPosition = prevPosition.clone(); // Clone the previous position

//       // Movement logic: Adjust the character's position based on arrow keys or WASD
//       switch (key) {
//         case 'ArrowUp':
//         case 'w':
//           newPosition.z -= 0.1; // Move forward
//           break;
//         case 'ArrowDown':
//         case 's':
//           newPosition.z += 0.1; // Move backward
//           break;
//         case 'ArrowLeft':
//         case 'a':
//           newPosition.x -= 0.1; // Move left
//           break;
//         case 'ArrowRight':
//         case 'd':
//           newPosition.x += 0.1; // Move right
//           break;
//         default:
//           break;
//       }

//       return newPosition; // Return the updated position
//     });
//   };

//   // Handle search input
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Handle search submission
//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     setShowPopup(true);  // Show the pop-up when search is clicked
//   };

//   const closePopup = () => {
//     setShowPopup(false); // Close the pop-up
//   };

//   // Listen for keyboard events for character movement
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown); // Clean up event listener
//     };
//   }, []);

//   return (
//     <div style={{ width: '100%', backgroundColor: 'rgb(17, 9, 16)', zIndex: '200', color: 'white', height: '100vh' }}>
//       <h1 className='heading' style={{zIndex: '2'}}>Explore the Herbs</h1>
//       <form className="d-flex" role="search" onSubmit={handleSearch} style={{ position: 'relative', zIndex: 2 }}>
//         <input 
//           className="form-control me-2" 
//           type="search" 
//           placeholder="Search" 
//           aria-label="Search" 
//           value={searchQuery} 
//           onChange={handleSearchChange}
//         />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>

//       <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 2, 5] }} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
//         <color attach="background" args={["#101010"]} />
//         <Stage environment={"sunset"}>
//           {/* Ensure the land model retains its original textures */}
//           <Model scale={0.01} />
//         </Stage>

//         {/* Render the roaming character with scaled size */}
//         <Character position={characterPosition} />

//         {/* Enable Orbit Controls for roaming */}
//         <OrbitControls 
//           enablePan={true} 
//           enableZoom={true} 
//           enableRotate={true} 
//           maxPolarAngle={Math.PI / 2} 
//           minPolarAngle={0} 
//         />
//       </Canvas>

//       {/* Pop-up Code */}
//       {showPopup && (
//         <div className={`popup ${showPopup ? 'open' : ''}`} style={{ zIndex: 3 }}>
//           <div className="popup-content">
//             <span className="close-btn" onClick={closePopup}>&times;</span>
//             <img src="/images/herb.jpeg" alt="Herb" className="popup-image" />
//             <div className="popup-info">
//               <h2>{searchQuery}</h2>
//               <p>Description about the herb and its medicinal benefits.</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Explore;

























// import React, { useState, useEffect, useRef } from 'react';
// import './Explore.css'; 
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
// import { Vector3 } from "three";

// // Load a dynamic model based on the search query
// function Model({ modelPath, ...props }) {
//   const { scene } = useGLTF(modelPath); // Load the model based on the dynamic path
//   return <primitive object={scene} {...props} />;
// }

// const Explore = () => {
//   const [characterPosition, setCharacterPosition] = useState(new Vector3(0, 0, 0)); // Character's initial position
//   const [searchQuery, setSearchQuery] = useState(''); // For search input
//   const [showPopup, setShowPopup] = useState(false);
//   const [modelPath, setModelPath] = useState('/land.glb'); // Default model path

//   // Handle the movement of the character
//   const handleKeyDown = (event) => {
//     const { key } = event;
//     setCharacterPosition((prevPosition) => {
//       const newPosition = prevPosition.clone(); // Clone the previous position

//       // Movement logic: Adjust the character's position based on arrow keys or WASD
//       switch (key) {
//         case 'ArrowUp':
//         case 'w':
//           newPosition.z -= 0.1; // Move forward
//           break;
//         case 'ArrowDown':
//         case 's':
//           newPosition.z += 0.1; // Move backward
//           break;
//         case 'ArrowLeft':
//         case 'a':
//           newPosition.x -= 0.1; // Move left
//           break;
//         case 'ArrowRight':
//         case 'd':
//           newPosition.x += 0.1; // Move right
//           break;
//         default:
//           break;
//       }

//       return newPosition; // Return the updated position
//     });
//   };

//   // Handle search input
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Handle search submission
//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     // Change the model path based on the search query
//     if (searchQuery === 'land') 
//     {
//       setModelPath('/land.glb'); // Load 1.glb if '1' is searched
//     } 
//     else if (searchQuery === 'Ashwagandha')
//     {
//       setModelPath('/Ashwagandha_Plant_0928175057.glb'); // Load a default model if no match is found
//     }
//     else if (searchQuery === 'Tulsi')
//       {
//         setModelPath('/h1-Tulsi.glb'); // Load a default model if no match is found
//       }
//     else if (searchQuery === 'Insulin')
//     {
//       setModelPath('/h2-insulin.glb'); // Load a default model if no match is found
//     }
//     else if (searchQuery === 'Verdant Foliage')
//       {
//         setModelPath('/h4-Verdant_Foliage.glb'); // Load a default model if no match is found
//       }
//     else if (searchQuery === 'Tawa')
//     {
//       setModelPath('/h6-tawa.glb'); // Load a default model if no match is found
//     }  
//     else if (searchQuery === 'Rosemary')
//       {
//         setModelPath('/h8-Rosemary.glb'); // Load a default model if no match is found
//       } 
//     else if (searchQuery === 'Basil')
//     {
//       setModelPath('/h9-Basil.glb'); // Load a default model if no match is found
//     }     
//     else
//     {
//       setModelPath('/.glb');
//     }

//     setShowPopup(true);  // Show the pop-up when search is clicked
//   };

//   const closePopup = () => {
//     setShowPopup(false); // Close the pop-up
//   };

//   // Listen for keyboard events for character movement
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown); // Clean up event listener
//     };
//   }, []);

//   return (
//     <div style={{ width: '100%', backgroundColor: 'rgb(17, 9, 16)', zIndex: '200', color: 'white', height: '100vh' }}>
//       <h1 className='heading' style={{zIndex: '2'}}>Explore the Herbs</h1>
//       <form className="d-flex" role="search" onSubmit={handleSearch} style={{ position: 'relative', zIndex: 2 }}>
//         <input 
//           className="form-control me-2" 
//           type="search" 
//           placeholder="Search" 
//           aria-label="Search" 
//           value={searchQuery} 
//           onChange={handleSearchChange}
//         />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>

//       <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 2, 5] }} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
//         <color attach="background" args={["#101010"]} />
//         <Stage environment={"sunset"}>
//           {/* Dynamically load the model based on search query */}
//           <Model modelPath={modelPath} scale={0.01} />
//         </Stage>

//         {/* Enable Orbit Controls for roaming */}
//         <OrbitControls 
//           enablePan={true} 
//           enableZoom={true} 
//           enableRotate={true} 
//           maxPolarAngle={Math.PI / 2} 
//           minPolarAngle={0} 
//         />
//       </Canvas>

//       {/* Pop-up Code */}
//       {showPopup && (
//         <div className={`popup ${showPopup ? 'open' : ''}`} style={{ zIndex: 3 }}>
//           <div className="popup-content">
//             <span className="close-btn" onClick={closePopup}>&times;</span>
//             <img src="/images/herb.jpeg" alt="Herb" className="popup-image" />
//             <div className="popup-info">
//               <h2>{searchQuery}</h2>
//               <p>Description about the herb and its medicinal benefits.</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Explore;



































import React, { useState, useEffect, useRef } from 'react';
import './Explore.css'; 
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

// Load a dynamic model based on the search query
function Model({ modelPath, ...props }) {
  const { scene, materials } = useGLTF(modelPath); // Load the model based on the dynamic path

  // Traverse the scene to ensure the materials keep their original colors and don't fade
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = materials[child.material.name];
      child.material.needsUpdate = true;
    }
  });

  return <primitive object={scene} {...props} />;
}

const Explore = () => {
  const [characterPosition, setCharacterPosition] = useState(new Vector3(0, 0, 0)); // Character's initial position
  const [searchQuery, setSearchQuery] = useState(''); // For search input
  const [showPopup, setShowPopup] = useState(false);
  const [modelPath, setModelPath] = useState('/land.glb'); // Default model path

  // Handle the movement of the character
  const handleKeyDown = (event) => {
    const { key } = event;
    setCharacterPosition((prevPosition) => {
      const newPosition = prevPosition.clone(); // Clone the previous position

      // Movement logic: Adjust the character's position based on arrow keys or WASD
      switch (key) {
        case 'ArrowUp':
        case 'w':
          newPosition.z -= 0.1; // Move forward
          break;
        case 'ArrowDown':
        case 's':
          newPosition.z += 0.1; // Move backward
          break;
        case 'ArrowLeft':
        case 'a':
          newPosition.x -= 0.1; // Move left
          break;
        case 'ArrowRight':
        case 'd':
          newPosition.x += 0.1; // Move right
          break;
        default:
          break;
      }

      return newPosition; // Return the updated position
    });
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Change the model path based on the search query
    if (searchQuery === 'land') 
    {
      setModelPath('/land.glb'); // Load land.glb if 'land' is searched
    } 
    else if (searchQuery === 'Ashwagandha')
    {
      setModelPath('/Ashwagandha_Plant_0928175057.glb');
    }
    else if (searchQuery === 'Tulsi')
      {
        setModelPath('/h1-Tulsi.glb');
      }
    else if (searchQuery === 'Insulin')
    {
      setModelPath('/h2-insulin.glb');
    }
    else if (searchQuery === 'Verdant Foliage')
      {
        setModelPath('/h4-Verdant_Foliage.glb');
      }
    else if (searchQuery === 'Tawa')
    {
      setModelPath('/h6-tawa.glb');
    }  
    else if (searchQuery === 'Rosemary')
      {
        setModelPath('/h8-Rosemary.glb');
      } 
    else if (searchQuery === 'Basil')
    {
      setModelPath('/h9-Basil.glb');
    }     
    else
    {
      setModelPath('/.glb'); // Load default if nothing matches
    }

    setShowPopup(true);  // Show the pop-up when search is clicked
  };

  const closePopup = () => {
    setShowPopup(false); // Close the pop-up
  };

  // Listen for keyboard events for character movement
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Clean up event listener
    };
  }, []);

  return (
    <div style={{ width: '100%', backgroundColor: 'rgb(17, 9, 16)', zIndex: '200', color: 'white', height: '100vh' }}>
      <h1 className='heading' style={{zIndex: '2'}}>Explore the Herbs</h1>
      <form className="d-flex" role="search" onSubmit={handleSearch} style={{ position: 'relative', zIndex: 2 }}>
        <input 
          className="form-control me-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search" 
          value={searchQuery} 
          onChange={handleSearchChange}
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 2, 5] }} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <color attach="background" args={["#101010"]} />
        <Stage environment={"studio"} intensity={1.5} contactShadow={false}>
          {/* Dynamically load the model based on search query */}
          <Model modelPath={modelPath} scale={0.01} />
        </Stage>

        {/* Enable Orbit Controls for roaming */}
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={true} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={0} 
        />
      </Canvas>

      {/* Pop-up Code */}
      {showPopup && (
        <div className={`popup ${showPopup ? 'open' : ''}`} style={{ zIndex: 3 }}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <img src="/images/herb.jpeg" alt="Herb" className="popup-image" />
            <div className="popup-info">
              <h2>{searchQuery}</h2>
              <p>Description about the herb and its medicinal benefits.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
