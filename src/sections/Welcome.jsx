import { Canvas } from "@react-three/fiber";
import { Center, Sparkles, Text3D } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import AvatarModel from "../avatar/Avatar";

export default function Welcome() {
  return (
    <>
      <Canvas shadows>
        <Perf position="bottom-left" />
        <OrbitControls enableZoom={false} />
        <Sparkles position={[0, 0, 0]} count={2000} size={1} scale={20} />
        {/* <Center>
          <Text3D
            font="./fonts/Orbitron_Black.json"
            size={0.5}
            position-x={0.8}
            height={0.2}
          >
            Zaire McAllister
            <meshBasicMaterial color="white" />
          </Text3D>
          <Text3D font="./fonts/Orbitron_Black.json" size={0.5} position-y={-2}>
            Frontend Developer
            <meshBasicMaterial color="white" />
          </Text3D>
        </Center> */}
        {/* <ambientLight intensity={0.5} /> */}
        <directionalLight position={[1, 2, 3]} castShadow intensity={2.0} />
        <Center>
          <AvatarModel />
        </Center>
      </Canvas>
    </>
  );
}
