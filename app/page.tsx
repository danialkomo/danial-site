"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <main
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="min-h-screen bg-[#050505] text-white overflow-hidden relative"
    >
      <div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
        style={{
          left: pos.x - 250,
          top: pos.y - 250,
          background: "radial-gradient(circle, rgba(232,17,45,.55), transparent 60%)",
        }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="font-bold tracking-wide">Danial Komo</div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <section className="relative z-10 min-h-screen flex items-center px-8 pt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mb-6"
            >
              Web Developer • SaaS Builder • WordPress Expert
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .15 }}
              className="text-5xl md:text-7xl font-black leading-tight"
            >
              Websites die niet alleen mooi zijn,
              <span className="text-red-500"> maar verkopen.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
              className="mt-8 text-gray-400 text-lg leading-8 max-w-xl"
            >
              Ik bouw snelle websites, moderne landing pages en slimme systemen
              voor ondernemers die online serieus willen groeien.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a className="px-7 py-4 rounded-xl bg-red-600 hover:bg-red-700 transition shadow-[0_0_40px_rgba(232,17,45,.45)]">
                Start project
              </a>
              <a className="px-7 py-4 rounded-xl border border-white/15 hover:bg-white hover:text-black transition">
                Bekijk werk
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: .9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: .4, duration: .8 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <p><span className="text-red-400">const</span> project = &#123;</p>
                <p className="pl-6 text-gray-300">design: <span className="text-green-400">"premium"</span>,</p>
                <p className="pl-6 text-gray-300">speed: <span className="text-green-400">"fast"</span>,</p>
                <p className="pl-6 text-gray-300">conversion: <span className="text-green-400">"optimized"</span>,</p>
                <p className="pl-6 text-gray-300">status: <span className="text-red-400">"ready"</span></p>
                <p>&#125;</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative z-10 px-8 py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">Wat ik bouw</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Websites", "Moderne websites voor ondernemers, snel en professioneel."],
              ["Landing Pages", "Pagina’s gericht op conversie, leads en vertrouwen."],
              ["SaaS / Apps", "Dashboards, systemen en platforms met moderne techniek."],
            ].map(([title, text], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * .12 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-red-500/40 transition"
              >
                <div className="text-red-500 mb-4">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-400 leading-7">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 px-8 py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Van idee naar live website.
            </h2>
            <p className="text-gray-400 leading-8">
              Ik combineer design, code en strategie zodat jouw website niet alleen
              mooi oogt, maar ook professioneel vertrouwen geeft.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-red-600/20 to-white/5 border border-white/10 p-8">
            <div className="grid gap-4">
              {["Design", "Development", "SEO basics", "Launch"].map((item) => (
                <div key={item} className="flex justify-between border-b border-white/10 pb-4">
                  <span>{item}</span>
                  <span className="text-green-400">✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-8 py-32 text-center border-t border-white/10">
        <h2 className="text-5xl md:text-7xl font-black mb-8">
          Klaar om te starten?
        </h2>
        <p className="text-gray-400 mb-10">
          Laat je idee achter en ik denk direct met je mee.
        </p>
        <a
          href="mailto:hello@danialkomo.com"
          className="inline-flex px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 transition shadow-[0_0_40px_rgba(232,17,45,.45)]"
        >
          Contact opnemen
        </a>
      </section>
    </main>
  );
}