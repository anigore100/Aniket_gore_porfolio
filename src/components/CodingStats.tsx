import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell } from "recharts";

const LEETCODE_USERNAME = "goreaniket_1";

// ── GFG hardcoded from profile (update manually when needed) ─────────────────
const GFG = {
  total: 392,
  codingScore: 686,
  instituteRank: 11,
  potdsSolved: 13,
  longestStreak: 5,
  breakdown: [
    { label: "School",  value: 4,   fill: "#38bdf8" },
    { label: "Basic",   value: 131, fill: "#a78bfa" },
    { label: "Easy",    value: 167, fill: "#4ade80" },
    { label: "Medium",  value: 83,  fill: "#fbbf24" },
    { label: "Hard",    value: 7,   fill: "#f87171" },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

type LCStats = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};

type DonutProps = {
  data: { label: string; value: number; fill: string }[];
  total: number;
  sub: string;
};

const Donut = ({ data, total, sub }: DonutProps) => (
  <div className="relative flex-shrink-0" style={{ width: 148, height: 148 }}>
    <PieChart width={148} height={148}>
      <Pie
        data={data}
        cx={69}
        cy={69}
        innerRadius={48}
        outerRadius={68}
        dataKey="value"
        startAngle={90}
        endAngle={-270}
        strokeWidth={2}
        stroke="hsl(var(--card))"
      >
        {data.map((entry, i) => (
          <Cell key={i} fill={entry.fill} />
        ))}
      </Pie>
    </PieChart>
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-2xl font-extrabold text-foreground">{total}</span>
      <span className="text-[10px] text-muted-foreground">{sub}</span>
    </div>
  </div>
);

const Legend = ({ items }: { items: { label: string; value: number; fill: string }[] }) => (
  <ul className="space-y-2">
    {items.map(({ label, value, fill }) => (
      <li key={label} className="flex items-center justify-between gap-4 text-sm">
        <span className="flex items-center gap-2 text-muted-foreground">
          <span className="inline-block h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ background: fill }} />
          {label}
        </span>
        <span className="font-semibold text-foreground">{value}</span>
      </li>
    ))}
  </ul>
);

const StatRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="flex items-center justify-between gap-3 rounded-xl border border-border/40 bg-secondary/20 px-4 py-2.5">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-sm font-bold text-foreground">{value}</span>
  </div>
);

const CodingStats = () => {
  const [lc, setLc] = useState<LCStats | null>(null);

  useEffect(() => {
    fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`)
      .then((r) => r.json())
      .then((data) =>
        setLc({
          solvedProblem: data.solvedProblem ?? 0,
          easySolved: data.easySolved ?? 0,
          mediumSolved: data.mediumSolved ?? 0,
          hardSolved: data.hardSolved ?? 0,
        })
      )
      .catch(() => {});
  }, []);

  const lcPie = lc
    ? [
        { label: "Easy",   value: lc.easySolved,   fill: "#4ade80" },
        { label: "Medium", value: lc.mediumSolved,  fill: "#fbbf24" },
        { label: "Hard",   value: lc.hardSolved,    fill: "#f87171" },
      ]
    : [{ label: "Loading", value: 1, fill: "hsl(var(--secondary))" }];

  return (
    <section id="coding" className="py-12 sm:py-14">
      <div className="section-padding">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            className="mb-10"
          >
            <p className="eyebrow">Problem Solving</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Coding Stats</h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* ── LeetCode ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.25, once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border/60 bg-card/35 p-5 sm:p-6"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">LeetCode</p>

              <div className="flex items-start gap-6">
                <Donut
                  data={lcPie}
                  total={lc ? lc.solvedProblem : 0}
                  sub="Solved"
                />
                <div className="flex-1 pt-1">
                  {lc ? (
                    <Legend items={lcPie} />
                  ) : (
                    <div className="space-y-3 animate-pulse">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-4 w-full rounded bg-secondary/60" />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {lc && (
                <div className="mt-5 space-y-2">
                  <StatRow label="Easy" value={`${lc.easySolved} solved`} />
                  <StatRow label="Medium" value={`${lc.mediumSolved} solved`} />
                  <StatRow label="Hard" value={`${lc.hardSolved} solved`} />
                </div>
              )}
            </motion.div>

            {/* ── GeeksforGeeks ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.25, once: true }}
              transition={{ duration: 0.5, delay: 0.07 }}
              className="rounded-2xl border border-border/60 bg-card/35 p-5 sm:p-6"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">GeeksforGeeks</p>

              <div className="flex items-start gap-6">
                <Donut data={GFG.breakdown} total={GFG.total} sub="Solved" />
                <div className="flex-1 pt-1">
                  <Legend items={GFG.breakdown} />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <StatRow label="Coding Score"    value={GFG.codingScore} />
                <StatRow label="Institute Rank"  value={GFG.instituteRank} />
                <StatRow label="POTDs Solved"    value={GFG.potdsSolved} />
                <StatRow label="Longest Streak"  value={`${GFG.longestStreak} days`} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
