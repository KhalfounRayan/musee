import { useTexture } from "@react-three/drei";
import React from "react";
import { MeshBasicMaterial, PlaneGeometry, sRGBEncoding } from "three";

interface PaintingProps {
  name: string;
  size?: [number, number];
  position?: [number, number, number];
  angle?: number;
}

const Painting = ({
  name = "",
  size = [1, 1.3],
  position = [0, 1.6, -5.7],
  angle = 0,
}: PaintingProps): JSX.Element => {
  const texture = useTexture(`paintings/${name}.png`);
  texture.encoding = sRGBEncoding;
  const geometry = new PlaneGeometry(size[0], size[1]);
  const material = new MeshBasicMaterial({
    map: texture,
  });

  return (
    <>
      <mesh
        position={position}
        rotation={[0, angle, 0]}
        args={[geometry, material]}
      />
      <mesh
        position={[position[0] + 0.01, position[1] + 0.01, position[2] - 0.06]}
      ></mesh>
    </>
  );
};

export default Painting;
