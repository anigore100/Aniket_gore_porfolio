import { useMemo } from "react";

const rand = (max: number) => Math.floor(Math.random() * max);

const generateShadows = (count: number) => {
  const parts: string[] = [];
  for (let i = 0; i < count; i++) {
    parts.push(`${rand(2000) - 1000}px ${rand(2000) - 1000}px #FFF`);
  }
  return parts.join(", ");
};

const StarField = () => {
  const small  = useMemo(() => generateShadows(700), []);
  const medium = useMemo(() => generateShadows(200), []);
  const big    = useMemo(() => generateShadows(100), []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="star star-s" style={{ "--s": small } as React.CSSProperties} />
      <div className="star star-m" style={{ "--s": medium } as React.CSSProperties} />
      <div className="star star-l" style={{ "--s": big } as React.CSSProperties} />
    </div>
  );
};

export default StarField;
