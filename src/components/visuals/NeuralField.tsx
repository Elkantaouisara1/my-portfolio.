"use client";

import { useReducedMotion } from "framer-motion";

const nodes = [
  { cx: 48, cy: 72, r: 5 },
  { cx: 96, cy: 36, r: 6 },
  { cx: 132, cy: 110, r: 4.5 },
  { cx: 188, cy: 52, r: 7 },
  { cx: 214, cy: 128, r: 5 },
  { cx: 268, cy: 40, r: 4 },
  { cx: 292, cy: 96, r: 6.5 },
  { cx: 86, cy: 148, r: 4 },
  { cx: 164, cy: 164, r: 5.5 },
  { cx: 248, cy: 168, r: 4.5 },
];

const edges: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [3, 5],
  [3, 4],
  [4, 6],
  [5, 6],
  [2, 7],
  [4, 8],
  [6, 9],
  [7, 8],
  [8, 9],
  [0, 7],
];

export function NeuralField() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-white via-blush to-powder shadow-card"
    >
      <svg viewBox="0 0 340 220" className="absolute inset-0 h-full w-full">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="#007198"
            strokeOpacity="0.22"
            strokeWidth="1.2"
          />
        ))}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 2.4}
              fill="#82CEF9"
              fillOpacity="0.55"
              className={reduce ? undefined : "animate-pulse"}
            />
            <circle cx={node.cx} cy={node.cy} r={node.r} fill="#0594D0" />
          </g>
        ))}
      </svg>
      <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/70 bg-white/80 p-4 backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux">
          Signal · modèle · décision
        </p>
        <p className="mt-1 text-sm text-ink/70">
          Une lecture visuelle de la donnée, du réseau et de la prédiction — sans bruit superflu.
        </p>
      </div>
    </div>
  );
}
