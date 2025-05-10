"use client";
import React, { useRef, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const WIZARD_MODEL_PATH = "/models/wizard-transformed.glb";
const COMMON_TRANSFORM = {
  position: [-1.057, 0, 0],
  rotation: [0, 0.224, 0],
  scale: 0.832,
};

// Subcomponent to reduce redundancy
const WizardMesh = ({ geometry, material }) => (
  <mesh
    castShadow
    receiveShadow
    geometry={geometry}
    material={material}
    {...COMMON_TRANSFORM}
  />
);

const Wizard = React.memo(function Wizard(props) {
  const { nodes, materials } = useGLTF(WIZARD_MODEL_PATH);
  const modelRef = useRef();

  // Add animation for bobbing effect
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
      modelRef.current.rotation.y = state.clock.elapsedTime * 0.1; // subtle rotation
    }
  });

  return (
    <Suspense fallback={null}>
      <group
        {...props}
        dispose={null}
        ref={modelRef}
        position={[0, -1.5, 0]}
        scale={[0.06, 0.06, 0.06]}
        rotation={[0.25, 0, 0]}
      >
        <WizardMesh geometry={nodes.Evil_Hathattty_mesh_Evil_HatBLN_Hat_0.geometry} material={materials.Evil_HatBLN_Hat} />
        <WizardMesh geometry={nodes.WandpCylinder1_Wandq_0.geometry} material={materials.PaletteMaterial001} />
        <WizardMesh geometry={nodes.R_shoe_tongue_mesh_BLN_Shoe_tongue_0.geometry} material={materials.BLN_Shoe_tongue} />
        <WizardMesh geometry={nodes.Chest_piece_mesh_BLN_chest_piece_0.geometry} material={materials.BLN_chest_piece} />
        <WizardMesh geometry={nodes.Right_Eyeball_Mesh_Lam_eyeball_0.geometry} material={materials.material_0} />
        <WizardMesh geometry={nodes.pants_mesh_BLN_Pants_0.geometry} material={materials.BLN_Pants} />
        <WizardMesh geometry={nodes.lower_coat_mesh_FK_BLN_Lower_coat_0.geometry} material={materials.BLN_Lower_coat} />
        <WizardMesh geometry={nodes.R_shoe_mesh_BLN_shoes_0.geometry} material={materials.BLN_shoes} />
        <WizardMesh geometry={nodes.Upper_coat_mesh_BLN_upper_coat_0.geometry} material={materials.BLN_upper_coat} />
        <WizardMesh geometry={nodes.upper_body_mesh_BLN_shirt_0.geometry} material={materials.BLN_shirt} />
        <WizardMesh geometry={nodes.upper_body_mesh_BLN_Shirt_collar_0.geometry} material={materials.BLN_Shirt_collar} />
        <WizardMesh geometry={nodes.Coat_collar_mesh_BLN_collar_piece_0.geometry} material={materials.BLN_collar_piece} />
        <WizardMesh geometry={nodes.BookpolySurface5_Bookblinn1_0.geometry} material={materials.Bookblinn1} />
        <WizardMesh geometry={nodes.BookBook_corner_mesh4_Booklam_book_corners_0.geometry} material={materials.Booklam_book_corners} />
        <WizardMesh geometry={nodes.BookpolySurface20_BookBLN_Metal_parts_0.geometry} material={materials.BookBLN_Metal_parts} />
        <WizardMesh geometry={nodes.BookFront_glow_mesh_Booklambert8_0.geometry} material={materials.PaletteMaterial002} />
        <WizardMesh geometry={nodes.BookpolySurface2_BookBLN_Book_covers_0.geometry} material={materials.BookBLN_Book_covers} />
        <WizardMesh geometry={nodes.BookpCube10_Booklam_front_bits_0.geometry} material={materials.material_2} />
        <WizardMesh geometry={nodes.BookpolySurface28_Booklam_back_bits_0.geometry} material={materials.Booklam_back_bits} />
        <WizardMesh geometry={nodes.Evil_HatpPlane1_Evil_HatsolidShader_0.geometry} material={materials.PaletteMaterial003} />
      </group>
    </Suspense>
  );
});

useGLTF.preload(WIZARD_MODEL_PATH);
export default Wizard;
