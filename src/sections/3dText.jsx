import { Text3D } from "@react-three/drei";

export default function Text() {
  <>
    <Text3D font="./fonts/Orbitron_Black.json" size={0.5} position-x={0.8}>
      Zaire McAllister
      <meshBasicMaterial />
    </Text3D>
    <Text3D font="./fonts/Orbitron_Black.json" size={0.5} position-y={-2}>
      Frontend Developer
      <meshBasicMaterial />
    </Text3D>
  </>;
}
