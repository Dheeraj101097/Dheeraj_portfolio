/**
 * LiquidGlassCard — Frosted Liquid Glass container.
 *
 * Layer stack (back → front):
 *  1. Frosted backdrop       blur(38px) + saturate(210%) + brightness + contrast
 *  2. Milky diffusion fill   semi-opaque white (the "frosted" milky layer)
 *  3. Diagonal sheen         subtle angled gradient = light refraction in thick glass
 *  4. Bottom depth shadow    inner gradient at base = volumetric thickness
 *  5. Top specular line      h-px bright gradient = sharp glass-edge highlight
 *  6. Left catch-light       w-px gradient = curved-surface rim light
 *  7. Bottom accent glow     neon mint line bleeds through the frost on hover
 *  8. SVG noise grain        class .glass-frost-noise::after = physical texture
 *  9. Volumetric box-shadow  stacked inset highlights + drop shadow (via style)
 * 10. Children               z-10
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ── Dark-mode observer ────────────────────────────────────────────────────
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);
  return isDark;
};

// ── Volumetric shadow definitions ─────────────────────────────────────────
//   Three inset layers simulate glass thickness:
//     [0] sharp top-edge white highlight  (specular catch)
//     [1] soft inner glow                 (light diffusing inside the frost)
//     [2] 1px ring border                 (edge definition)
//     [3] drop shadow                     (card lift off background)

const SHADOWS = {
  dark: {
    base: [
      "inset 0px 1.5px 2.5px rgba(255,255,255,0.22)",   // top catch
      "inset 0px 0px 18px  rgba(255,255,255,0.04)",      // inner frosted glow
      "inset 0px 0px 0px 1px rgba(255,255,255,0.07)",    // ring
      "0px 18px 52px rgba(0,0,0,0.48)",                  // drop
    ].join(", "),
    hover: [
      "inset 0px 1.5px 2.5px rgba(255,255,255,0.28)",
      "inset 0px 0px 24px  rgba(255,255,255,0.06)",
      "inset 0px 0px 0px 1px rgba(32,252,143,0.18)",     // neon ring on hover
      "0px 22px 60px rgba(0,0,0,0.54)",
      "0px 0px 72px rgba(32,252,143,0.13)",              // outer neon glow
    ].join(", "),
  },
  light: {
    base: [
      "inset 0px 2px 3px  rgba(255,255,255,0.95)",       // bright top catch
      "inset 0px 0px 20px rgba(255,255,255,0.35)",       // milky inner glow
      "inset 0px 0px 0px 1px rgba(255,255,255,0.60)",    // ring
      "0px 8px 32px rgba(0,0,0,0.09)",                   // drop
    ].join(", "),
    hover: [
      "inset 0px 2px 3px  rgba(255,255,255,0.98)",
      "inset 0px 0px 24px rgba(255,255,255,0.45)",
      "inset 0px 0px 0px 1px rgba(13,138,77,0.22)",      // green ring on hover
      "0px 12px 44px rgba(0,0,0,0.13)",
      "0px 0px 44px rgba(13,138,77,0.09)",
    ].join(", "),
  },
};

// ── Component ─────────────────────────────────────────────────────────────
const LiquidGlassCard = ({
  children,
  className = "",
  radius = "rounded-[2rem]",
  glowOnHover = true,
  scaleOnHover = true,
}) => {
  const isDark = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);

  const shadow =
    isDark
      ? isHovered ? SHADOWS.dark.hover : SHADOWS.dark.base
      : isHovered ? SHADOWS.light.hover : SHADOWS.light.base;

  return (
    <motion.div
      onHoverStart={() => glowOnHover && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        scale: scaleOnHover && isHovered ? 1.013 : 1,
        boxShadow: shadow,
      }}
      transition={{ type: "spring", stiffness: 360, damping: 30 }}
      // glass-frost-noise adds the SVG grain texture via ::after pseudo-element
      className={`glass-frost-noise relative overflow-hidden ${radius} ${className}`}
      style={{ boxShadow: shadow }}
    >
      {/* ── Layer 1: Frosted backdrop ──────────────────────────────────── */}
      {/*   Heavy blur + saturate + brightness = the "frosted" diffusion     */}
      <div
        className={`absolute inset-0 frosted-backdrop ${
          isDark ? "bg-white/[0.055]" : "bg-white/[0.45]"
        }`}
      />

      {/* ── Layer 2: Milky diffusion film ─────────────────────────────── */}
      {/*   A second thin fill that scatters the blurred bg (makes it milky) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.04) 100%)"
            : "linear-gradient(145deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.30) 50%, rgba(255,255,255,0.48) 100%)",
        }}
      />

      {/* ── Layer 3: Diagonal sheen (light refraction through thickness) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(125deg, rgba(255,255,255,0.07) 0%, transparent 40%, rgba(255,255,255,0.02) 100%)"
            : "linear-gradient(125deg, rgba(255,255,255,0.70) 0%, transparent 45%, rgba(255,255,255,0.10) 100%)",
        }}
      />

      {/* ── Layer 4: Bottom-edge depth shadow (volumetric thickness) ──── */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(to top, rgba(0,0,0,0.22), transparent)"
            : "linear-gradient(to top, rgba(0,0,0,0.05), transparent)",
        }}
      />

      {/* ── Layer 5: Top specular line ──────────────────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 h-[1.5px] pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.65) 50%, transparent 95%)"
            : "linear-gradient(90deg, transparent 5%, rgba(255,255,255,1.0) 50%, transparent 95%)",
          filter: isDark ? "none" : "blur(0.3px)",
        }}
      />

      {/* ── Layer 6: Left-edge catch-light ─────────────────────────────── */}
      <div
        className="absolute inset-y-0 left-0 w-[1.5px] pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 40%, transparent 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.30) 40%, transparent 100%)",
        }}
      />

      {/* ── Layer 7: Bottom accent glow line (neon bleeds through frost) ─ */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0.35 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-x-0 bottom-0 h-[1.5px] pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent 5%, rgba(32,252,143,0.7) 50%, transparent 95%)"
            : "linear-gradient(90deg, transparent 5%, rgba(13,138,77,0.55) 50%, transparent 95%)",
          filter: "blur(0.5px)",
        }}
      />

      {/* ── Layer 8: Ring border (edge definition) ─────────────────────── */}
      <div
        className={`absolute inset-0 pointer-events-none ${radius}`}
        style={{
          boxShadow: isDark
            ? "inset 0 0 0 1px rgba(255,255,255,0.09)"
            : "inset 0 0 0 1px rgba(255,255,255,0.70)",
        }}
      />

      {/* ── Content (z-10 clears all glass layers) ─────────────────────── */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default LiquidGlassCard;
export { useDarkMode, SHADOWS };
