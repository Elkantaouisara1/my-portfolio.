import type { Project } from "@/data/projects";

export function ProjectArt({ art, title }: { art: Project["art"]; title: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blush via-powder to-accent/50">
      <svg viewBox="0 0 640 400" className="h-full w-full" role="img" aria-label={`Illustration : ${title}`}>
        {art === "wind" && <WindArt />}
        {art === "agents" && <AgentsArt />}
        {art === "news" && <NewsArt />}
        {art === "sign" && <SignArt />}
        {art === "architectures" && <ArchArt />}
        {art === "stroke" && <StrokeArt />}
        {art === "health" && <HealthArt />}
      </svg>
    </div>
  );
}

function WindArt() {
  return (
    <g fill="none" stroke="#007198" strokeWidth="2">
      <path d="M80 340h480" opacity="0.25" />
      {[160, 320, 480].map((x) => (
        <g key={x}>
          <line x1={x} y1="340" x2={x} y2="168" />
          <circle cx={x} cy="160" r="8" fill="#0594D0" />
          <path d={`M${x} 160 l48 -78 M${x} 160 l-92 -18 M${x} 160 l44 88`} opacity="0.8" />
        </g>
      ))}
      <path d="M40 250c80-40 120 30 200 10s140-70 240-20 120 40 160 10" opacity="0.35" />
      <path d="M40 280c90-20 130 20 210 0s150-50 230-10" opacity="0.2" />
    </g>
  );
}

function AgentsArt() {
  const pts = [
    [320, 70],
    [160, 180],
    [480, 180],
    [230, 310],
    [410, 310],
  ];
  return (
    <g>
      <path
        d="M320 70 L160 180 L230 310 L410 310 L480 180 Z"
        fill="#82CEF9"
        opacity="0.5"
        stroke="#007198"
        strokeWidth="1.5"
      />
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="22" fill="#F8FBF1" stroke="#007198" strokeWidth="2" />
          <circle cx={x} cy={y} r="7" fill="#0594D0" />
        </g>
      ))}
    </g>
  );
}

function NewsArt() {
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={80 + i * 40}
          y={70 + i * 28}
          width="420"
          height="70"
          rx="12"
          fill={i === 1 ? "#0594D0" : "#F8FBF1"}
          stroke="#007198"
          opacity={i === 1 ? 0.9 : 0.85}
        />
      ))}
      <path d="M80 330h160M80 350h110" stroke="#007198" strokeWidth="6" strokeLinecap="round" opacity="0.35" />
    </g>
  );
}

function SignArt() {
  return (
    <g fill="none" stroke="#007198" strokeWidth="3" strokeLinecap="round">
      <circle cx="320" cy="200" r="120" opacity="0.35" fill="#82CEF9" />
      <path d="M250 250c20-70 40-90 70-90s40 40 30 90" />
      <path d="M360 250c-10-80 10-110 50-90 30 16 20 80 8 90" />
      <path d="M300 160c-10-40-40-50-55-28" />
      <path d="M340 155c16-46 50-48 62-20" />
      <circle cx="270" cy="132" r="6" fill="#0594D0" />
      <circle cx="390" cy="128" r="6" fill="#0594D0" />
    </g>
  );
}

function ArchArt() {
  const layers = [
    { y: 70, w: 200, label: true },
    { y: 150, w: 320 },
    { y: 230, w: 440 },
    { y: 310, w: 520 },
  ];
  return (
    <g>
      {layers.map((layer, i) => (
        <rect
          key={i}
          x={(640 - layer.w) / 2}
          y={layer.y}
          width={layer.w}
          height="52"
          rx="14"
          fill={i % 2 ? "#0594D0" : "#F8FBF1"}
          stroke="#007198"
          opacity={i % 2 ? 0.85 : 0.95}
        />
      ))}
    </g>
  );
}

function StrokeArt() {
  return (
    <g fill="none" stroke="#007198" strokeWidth="2.4" strokeLinecap="round">
      <path d="M80 220c40-80 80-80 120 0s80 80 120 0 80-80 120 0 80 80 120 0" />
      <path d="M80 250c40-40 80-40 120 0s80 40 120 0 80-40 120 0 80 40 120 0" opacity="0.35" />
      <circle cx="200" cy="220" r="8" fill="#0594D0" />
      <circle cx="440" cy="220" r="8" fill="#82CEF9" stroke="#007198" />
    </g>
  );
}

function HealthArt() {
  return (
    <g>
      <rect x="150" y="75" width="340" height="250" rx="24" fill="#F8FBF1" stroke="#007198" strokeWidth="3" />
      <path d="M150 135h340" stroke="#007198" strokeWidth="3" />
      <rect x="205" y="55" width="28" height="55" rx="14" fill="#0594D0" />
      <rect x="407" y="55" width="28" height="55" rx="14" fill="#0594D0" />
      <circle cx="320" cy="232" r="68" fill="#82CEF9" />
      <path d="M320 190v84M278 232h84" stroke="#007198" strokeWidth="18" strokeLinecap="round" />
    </g>
  );
}
