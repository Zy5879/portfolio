import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function AvatarModel() {
  const avatar = useGLTF("./avatar/avatar-animation-2.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);

  useEffect(() => {
    actions.float.play();
  }, []);
  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={2}
        position-y={-1.5}
        position-x={-0.6}
      />
    </group>
  );
}
