"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <main
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden"
    >
      
      {/* Glow */}
      <div
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
          background: "rgba(255,0,0,0.25)",
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-6 relative z-10"
      >
        Danial Komo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-gray-400 mb-10 relative z-10"
      >
        Web Developer • SaaS Builder
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-4 relative z-10"
      >
        <button className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition">
          View Projects
        </button>

        <button className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition">
          Contact
        </button>
      </motion.div>

    </main>
  );
}