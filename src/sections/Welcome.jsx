import { Canvas } from "@react-three/fiber";
import { Center, Sparkles, Text3D } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import AvatarModel from "../avatar/Avatar";

export default function Welcome() {
  return (
    <>
      <Canvas camera={{ fov: 92 }}>
        <Perf position="bottom-left" />
        <OrbitControls enableZoom={false} />
        <Sparkles
          position={[0, 0, 0]}
          count={2000}
          size={2}
          scale={20}
          speed={2}
        />
        <directionalLight position={[1, 2, 3]} castShadow intensity={2.0} />

        <Text3D
          font="./fonts/Roboto Bk_Bold.json"
          size={0.6}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position-y={-2}
          position-x={-3}
        >
          Zaire McAllister
          <meshStandardMaterial color="red" />
        </Text3D>
        <Text3D
          font="./fonts/Roboto Bk_Bold.json"
          size={0.6}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position-y={-3.1}
          position-x={-3.6}
        >
          Frontend Developer
          <meshStandardMaterial color="red" />
        </Text3D>

        <AvatarModel />
      </Canvas>
    </>
  );
}

{
  /* <Text3D
          font="./fonts/Roboto Bk_Bold.json"
          position={[-6, -3, 0]}
          size={0.2}
        >
          Zaire McAllister
          <meshBasicMaterial color="white" />
        </Text3D> */
}
{
  /* <Center>
          <Text3D font="./fonts/Roboto Bk_Bold.json" size={0.5} position-y={-2}>
            Frontend Developer
            <meshBasicMaterial color="white" />
          </Text3D>
        </Center> */
}
{
  /* <ambientLight intensity={0.5} /> */
}
