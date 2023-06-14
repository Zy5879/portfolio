import { Canvas } from "@react-three/fiber";
import { Center, Sparkles, Text3D } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

export default function Welcome() {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <Sparkles position={[0, 0, 0]} count={3000} size={1} scale={20} />
        <Center>
          <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={0.5}
            position-x={0.8}
          >
            Zaire McAllister
            <meshNormalMaterial />
          </Text3D>
          <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={0.5}
            position-y={-2}
          >
            Frontend Developer
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </Canvas>
    </>
  );
}
