/**
 * LiquidGlassCard — Apple VisionOS-style Thick Liquid Glass container.
 *
 * Visual anatomy (back → front):
 *  1. Backdrop blur layer  (backdrop-blur-3xl + saturate-[180%])
 *  2. Surface fill         (very low opacity tinted white)
 *  3. Bottom edge shadow   (subtle inner shadow at base for thickness)
 *  4. Top specular line    (bright h-px gradient = glass edge reflection)
 *  5. Left-edge highlight  (w-px gradient = curved side catch-light)
 *  6. Ring border          (1px semi-transparent ring)
 *  7. Children content     (sits on top via z-10)
 *
 * Volumetric shadows are applied via inline `style` so Framer Motion
 * can animate between base ↔ hover states smoothly.
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ── Dark-mode observer hook ───────────────────────────────────────────────
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  return isDark;
};

// ── Shadow definitions ────────────────────────────────────────────────────
const SHADOWS = {
  dark: {
    base: [
      "inset 0px 1.5px 2px rgba(255,255,255,0.18)",
      "inset 0px 0px 0px 1px rgba(255,255,255,0.06)",
      "0px 16px 48px rgba(0,0,0,0.45)",
    ].join(", "),
    hover: [
      "inset 0px 1.5px 2px rgba(255,255,255,0.22)",
      "inset 0px 0px 0px 1px rgba(32,252,143,0.18)",
      "0px 20px 56px rgba(0,0,0,0.52)",
      "0px 0px 64px rgba(32,252,143,0.14)",
    ].join(", "),
  },
  light: {
    base: [
      "inset 0px 2px 3px rgba(255,255,255,0.92)",
      "inset 0px 0px 0px 1px rgba(255,255,255,0.55)",
      "0px 8px 32px rgba(0,0,0,0.08)",
    ].join(", "),
    hover: [
      "inset 0px 2px 3px rgba(255,255,255,0.97)",
      "inset 0px 0px 0px 1px rgba(13,138,77,0.20)",
      "0px 12px 40px rgba(0,0,0,0.13)",
      "0px 0px 40px rgba(13,138,77,0.08)",
    ].join(", "),
  },
};

// ── Component ─────────────────────────────────────────────────────────────
const LiquidGlassCard = ({
  children,
  className = "",
  radius = "rounded-[2rem]",     // border-radius preset
  glowOnHover = true,
  scaleOnHover = true,
  as = "div",                    // render as div or article etc.
}) => {
  const isDark = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);

  const shadow = isDark
    ? isHovered ? SHADOWS.dark.hover : SHADOWS.dark.base
    : isHovered ? SHADOWS.light.hover : SHADOWS.light.base;

  return (
    <motion.div
      onHoverStart={() => glowOnHover && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        scale: scaleOnHover && isHovered ? 1.012 : 1,
        boxShadow: shadow,
      }}
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
      className={`relative overflow-hidden ${radius} ${className}`}
      style={{ boxShadow: shadow }}
    >
      {/* ── Layer 1: Backdrop blur + surface fill ── */}
      <div
        className={`absolute inset-0
          backdrop-blur-3xl backdrop-saturate-[180%]
          ${isDark
            ? "bg-white/[0.045]"
            : "bg-white/35"
          }`}
      />

      {/* ── Layer 2: Bottom-edge inner shadow (thickness illusion) ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(to top, rgba(0,0,0,0.18), transparent)"
            : "linear-gradient(to top, rgba(0,0,0,0.04), transparent)",
        }}
      />

      {/* ── Layer 3: Top specular highlight ── */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 50%, transparent 100%)",
        }}
      />

      {/* ── Layer 4: Left catch-light ── */}
      <div
        className="absolute inset-y-0 left-0 w-px pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 60%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, transparent 60%)",
        }}
      />

      {/* ── Layer 5: Bottom accent glow line (shows mesh color through glass) ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-px pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0.4,
          background: isDark
            ? "linear-gradient(90deg, transparent 0%, rgba(32,252,143,0.5) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(13,138,77,0.4) 50%, transparent 100%)",
        }}
      />

      {/* ── Layer 6: Ring border ── */}
      <div
        className={`absolute inset-0 pointer-events-none ${radius}`}
        style={{
          boxShadow: isDark
            ? "inset 0 0 0 1px rgba(255,255,255,0.08)"
            : "inset 0 0 0 1px rgba(255,255,255,0.60)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default LiquidGlassCard;
export { useDarkMode, SHADOWS };
