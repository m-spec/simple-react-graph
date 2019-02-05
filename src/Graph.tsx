import * as React from "react";
import { Point } from "./point";

interface Props {
  points: Point[];
}

const width = 400;
const heigh = 400;

export const Graph = ({ points }: Props) => {
  const translatedPoints: Point[] = points.map(p => ({
    ...p,
    x: p.x + width / 2,
    y: heigh - (p.y + heigh / 2)
  }));
  return (
    <svg viewBox={`0 0 ${width} ${heigh}`}>
      <line
        x1={width / 2}
        y1="0"
        x2={width / 2}
        y2={heigh}
        stroke="lightgrey"
      />
      <line
        x1="0"
        y1={heigh / 2}
        x2={width}
        y2={heigh / 2}
        stroke="lightgrey"
      />
      {translatedPoints.map(p => (
        <circle cx={p.x} cy={p.y} r={p.z} fill={p.color} fill-opacity="0.7" />
      ))}
    </svg>
  );
};
