import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import style from "./Modle1.module.css"

function Model(props) {
  // const { scene } = useGLTF("/seal.glb"); 
  const { scene } = useGLTF("/bagel_seal.glb"); 
  // https://sketchfab.com/3d-models/bagel-seal-01ce23ef2f7f452393d7c52adbe1e7a3
  // const { scene } = useGLTF("/humpbackwhale.glb");
  // const { scene } = useGLTF("/killerwhale.glb");
  return <primitive object={scene} {...props} />
}

function Modle1() {
  return (
    <div className={style.app}>
    <Canvas noShadows>
      
      <PresentationControls speed={1.5} global zoom={1.5} polar={[-0.4, Math.PI / 4]}>
        <Stage>
        <ambientLight intensity={0.5} />
          <Model scale={100} />
        </Stage>
      </PresentationControls>
    </Canvas>
    </div>
  );
}

export default Modle1;