"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaUnity, FaCuttlefish } from "react-icons/fa";
import { SiUnrealengine, SiAdobephotoshop, SiAdobeillustrator, SiAutodesk } from "react-icons/si";

const skills = [
  // Game Development
  { category: "Game Development", icon: FaUnity, name: "Unity" },
  { category: "Game Development", icon: SiUnrealengine, name: "Unreal Engine" },
  { category: "Game Development", icon: FaCuttlefish, name: "C# Gameplay Scripting" },

  // Art & Design
  { category: "Art & Design", icon: SiAdobephotoshop, name: "Adobe Photoshop" },
  { category: "Art & Design", icon: SiAdobeillustrator, name: "Adobe Illustrator" },
  { category: "Art & Design", icon: SiAutodesk, name: "Autodesk Maya" },
];

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  // rotation animation (individual icon spin)
  const spinAnim = prefersReducedMotion
    ? {}
    : { rotate: 360 };

  const spinTransition = prefersReducedMotion
    ? {}
    : { repeat: Infinity, duration: 12, ease: "linear" };

  return (
    <section className="mt-20 overflow-hidden">
      <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>

      <div className="relative flex overflow-x-hidden">
        {/* First loop */}
        <div className="flex animate-marquee">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={`${s.name}-1`}
                className="flex flex-col items-center justify-center text-gray-200 w-48 px-6 text-center gap-2"
              >
                <motion.div
                  initial={false}
                  animate={spinAnim}
                  transition={{ ...spinTransition, delay: i * 0.2 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Icon size={40} />
                </motion.div>
                <p className="text-md">{s.name}</p>
              </div>
            );
          })}
        </div>

        {/* Duplicate loop for infinite effect */}
        <div className="flex animate-marquee absolute top-0 left-full">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={`${s.name}-2`}
                className="flex flex-col items-center justify-center text-gray-200 w-48 px-6 text-center gap-2"
              >
                <motion.div
                  initial={false}
                  animate={spinAnim}
                  transition={{ ...spinTransition, delay: i * 0.2 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Icon size={40} />
                </motion.div>
                <p className="text-md">{s.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
