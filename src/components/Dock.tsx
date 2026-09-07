import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Github, Home, LayoutGrid, Linkedin, Moon, Sun, type LucideIcon } from "lucide-react";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import type { IconType } from "react-icons";
import { playDockClick, playDockHover } from "@/lib/sound";

const DOCK_ITEMS = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#projects", label: "Projects", icon: LayoutGrid },
  { href: "https://github.com/aniketgore100", label: "GitHub", icon: Github, external: true },
  { href: "https://www.linkedin.com/in/aniket-gore-3681b4203/", label: "LinkedIn", icon: Linkedin, external: true },
  { href: "https://leetcode.com/u/goreaniket_1/", label: "LeetCode", icon: SiLeetcode, external: true },
  {
    href: "https://www.geeksforgeeks.org/profile/aniketgore100?tab=activity",
    label: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    external: true,
  },
];

const BASE_SIZE = 40;
const MAX_SIZE = 62;
const FALLOFF = 130;

const useMagnify = (mouseX: MotionValue<number>, ref: React.RefObject<HTMLElement>) => {
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return FALLOFF;
    return val - bounds.x - bounds.width / 2;
  });
  const sizeSync = useTransform(distance, [-FALLOFF, 0, FALLOFF], [BASE_SIZE, MAX_SIZE, BASE_SIZE]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 200, damping: 14 });
  const iconSize = useTransform(size, (s) => s * 0.42);
  return { size, iconSize };
};

type DockIconProps = {
  mouseX: MotionValue<number>;
  icon: LucideIcon | IconType;
  label: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

const DockIcon = ({ mouseX, icon: Icon, label, href, external, onClick }: DockIconProps) => {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const { size, iconSize } = useMagnify(mouseX, ref);

  const sharedProps = {
    ref,
    "aria-label": label,
    style: { width: size, height: size },
    className: "glass-icon flex shrink-0 items-center justify-center rounded-full text-muted-foreground hover:text-foreground",
    onMouseEnter: playDockHover,
  };

  const iconEl = (
    <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
      <Icon className="h-full w-full" />
    </motion.div>
  );

  if (href) {
    return (
      <motion.a
        {...sharedProps}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={playDockClick}
      >
        {iconEl}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...sharedProps}
      type="button"
      onClick={() => {
        playDockClick();
        onClick?.();
      }}
    >
      {iconEl}
    </motion.button>
  );
};

const Dock = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div className="relative rounded-full">
        <div className="dock-beam-mask">
          <div className="dock-beam-dot" />
        </div>
        <div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="dock-panel relative z-10 flex items-center gap-2 rounded-full px-3 py-1.5"
        >
          {DOCK_ITEMS.map((item) => (
            <DockIcon key={item.label} mouseX={mouseX} icon={item.icon} label={item.label} href={item.href} external={item.external} />
          ))}
          <DockIcon
            mouseX={mouseX}
            icon={mounted && resolvedTheme === "dark" ? Sun : Moon}
            label="Toggle theme"
            onClick={toggleTheme}
          />
        </div>
      </div>
    </nav>
  );
};

export default Dock;
