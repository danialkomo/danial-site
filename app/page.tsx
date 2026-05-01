"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = ["React / Next.js", "WordPress", "UI/UX Design", "SaaS", "Supabase", "WooCommerce"];

const services = [
  ["01", "Webdesign", "Websites op maat die professioneel ogen en bezoekers omzetten naar klanten.", "figma → code"],
  ["02", "Development", "Next.js, WordPress en schone code. Snel, veilig en toekomstbestendig.", "next.js + wp"],
  ["03", "E-commerce", "WooCommerce shops, checkout flows en online betalingen.", "woocommerce + stripe"],
  ["04", "SaaS Platforms", "Dashboards, login systemen en schaalbare webapps.", "saas + mrr"],
];

const projects = [
  ["Grillroom Dany", "Digitale lancering voor een streetfood concept.", "Branding / Website / SEO"],
  ["Imbisso App", "SaaS voor restaurants en foodtrucks.", "Next.js / Stripe / Dashboard"],
  ["Schilder Winterswijk", "Lokale SEO landing pages voor vakbedrijven.", "HTML / SEO / Leads"],
];

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");

  useEffect(() => {
    const phrases = ["npm run dev", "git push origin main", "vercel deploy --prod", "build premium website"];
    let phrase = 0;
    let index = 0;
    let deleting = false;

    const interval = setInterval(() => {
      const current = phrases[phrase];

      if (!deleting) {
        setText(current.slice(0, index + 1));
        index++;
        if (index === current.length) deleting = true;
      } else {
        setText(current.slice(0, index - 1));
        index--;
        if (index === 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
        }
      }
    }, deleting ? 45 : 85);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="relative min-h-screen overflow-hidden bg-[#0c0c0e] text-[#f0ede8]"
    >
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(232,17,45,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(232,17,45,.12)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      <div
        className="pointer-events-none fixed z-0 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          left: mouse.x - 250,
          top: mouse.y - 250,
          background: "radial-gradient(circle, rgba(232,17,45,.35), transparent 65%)",
        }}
      />

      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-red-500/20 bg-[#0c0c0e]/85 px-8 py-5 backdrop-blur-xl">
        <a href="#" className="font-mono text-sm">
          <span className="text-red-500">~/</span>
          <span className="text-green-400">danial-komo</span>
          <span className="text-gray-500"> ▸ </span>
          <span className="text-gray-300">portfolio.sh</span>
        </a>

        <div className="hidden gap-8 font-mono text-xs text-gray-500 md:flex">
          <a href="#about" className="hover:text-white">// about</a>
          <a href="#services" className="hover:text-white">// services</a>
          <a href="#work" className="hover:text-white">// work</a>
          <a href="#contact" className="hover:text-white">// contact</a>
        </div>

        <div className="hidden items-center gap-2 font-mono text-xs text-gray-500 md:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          beschikbaar
        </div>
      </nav>

      <section className="relative z-10 grid min-h-screen items-center gap-14 px-8 pt-28 md:grid-cols-2 md:px-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 font-mono text-xs text-gray-500"
          >
            <span className="text-red-500">&gt;</span> webdesigner & ontwikkelaar — Winterswijk, NL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-black leading-[0.9] tracking-tight text-7xl md:text-9xl"
          >
            <span className="text-red-600">DANIAL</span>
            <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(232,17,45,.45)]">
              KOMO
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 max-w-md font-mono text-sm leading-8 text-gray-500"
          >
            Ik bouw <span className="text-red-500">snelle</span>, visueel sterke digitale ervaringen.
            Van <span className="text-green-400">concept</span> tot{" "}
            <span className="text-white">deployment</span>.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-red-500/20 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-400"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="border border-red-600 bg-red-600 px-7 py-4 font-mono text-sm text-white shadow-[0_0_45px_rgba(232,17,45,.35)] transition hover:-translate-y-1 hover:bg-red-500"
            >
              $ start_project()
            </a>
            <a
              href="#work"
              className="border border-white/10 px-7 py-4 font-mono text-sm text-gray-400 transition hover:border-white/30 hover:text-white"
            >
              // bekijk werk
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="overflow-hidden rounded-xl border border-red-500/25 bg-[#080809] shadow-[0_0_90px_rgba(232,17,45,.12)]"
        >
          <div className="flex items-center gap-2 border-b border-white/5 bg-[#0f0f12] px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="flex-1 text-center font-mono text-xs text-gray-500">
              danial-komo.js
            </span>
          </div>

          <div className="space-y-2 p-7 font-mono text-sm leading-7">
            <p className="text-gray-500">// developer profile</p>
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-red-400">developer</span> = {"{"}
            </p>
            <p className="pl-6">
              naam: <span className="text-yellow-300">"Danial Komo"</span>,
            </p>
            <p className="pl-6">
              locatie: <span className="text-yellow-300">"Winterswijk, NL"</span>,
            </p>
            <p className="pl-6">
              stack: <span className="text-green-400">["Next.js", "WordPress", "SaaS"]</span>,
            </p>
            <p className="pl-6">
              beschikbaar: <span className="text-purple-400">true</span>
            </p>
            <p>{"}"}</p>
            <p className="pt-4">
              <span className="text-green-400">▸</span>{" "}
              <span className="text-white">{text}</span>
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-red-500" />
            </p>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative z-10 grid gap-12 border-t border-red-500/20 px-8 py-28 md:grid-cols-2 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-red-500/20 bg-[#080809] p-7 font-mono text-sm leading-8"
        >
          <p className="text-gray-500">/** @author Danial Komo */</p>
          <p>
            <span className="text-purple-400">async function</span>{" "}
            <span className="text-blue-400">buildProject</span>(idee) {"{"}
          </p>
          <p className="pl-6">const design = await ontwerp(idee)</p>
          <p className="pl-6">const code = await ontwikkel(design)</p>
          <p className="pl-6">return await deploy(code)</p>
          <p>{"}"}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 font-mono text-xs text-red-500">/* over mij */</div>
          <h2 className="text-5xl font-black">
            Bouwen met <span className="text-red-600">code</span>
          </h2>
          <p className="mt-6 max-w-xl font-mono text-sm leading-8 text-gray-500">
            Ik bouw websites, webapps en SaaS-producten voor ondernemers die online
            serieus willen groeien. Mijn focus: snelheid, uitstraling en conversie.
          </p>
        </motion.div>
      </section>

      <section id="services" className="relative z-10 border-t border-red-500/20 bg-[#111114] px-8 py-28 md:px-16">
        <div className="mb-14">
          <div className="mb-4 font-mono text-xs text-red-500">/* diensten */</div>
          <h2 className="text-5xl font-black">Wat ik doe</h2>
        </div>

        <div className="grid gap-px bg-red-500/20 md:grid-cols-4">
          {services.map(([num, title, text, tag]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#0c0c0e] p-9"
            >
              <div className="mb-5 font-mono text-xs text-red-500/60">// {num}</div>
              <h3 className="mb-4 text-2xl font-black">{title}</h3>
              <p className="font-mono text-sm leading-7 text-gray-500">{text}</p>
              <div className="mt-5 inline-block border border-red-500/20 px-3 py-1 font-mono text-xs text-red-400">
                {tag}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="relative z-10 border-t border-red-500/20 px-8 py-28 md:px-16">
        <div className="mb-14">
          <div className="mb-4 font-mono text-xs text-red-500">/* projecten */</div>
          <h2 className="text-5xl font-black">
            Geselecteerd <span className="text-red-600">werk</span>
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {projects.map(([title, desc, tech]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-red-500/40"
            >
              <h3 className="mb-3 text-2xl font-black text-white">{title}</h3>
              <p className="font-mono text-sm leading-7 text-gray-500">{desc}</p>
              <p className="mt-5 font-mono text-xs text-green-400">{tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-red-500/20 px-8 py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-black md:text-8xl"
        >
          Start een <br />
          <span className="text-red-600">project</span> met mij
        </motion.h2>

        <p className="mx-auto mt-8 max-w-xl font-mono text-sm leading-8 text-gray-500">
          Heeft u een idee? Laten we het bouwen. Reactie binnen 24 uur.
        </p>

        <a
          href="mailto:hello@danialkomo.com"
          className="mt-10 inline-flex border border-red-600 bg-red-600 px-8 py-4 font-mono text-sm shadow-[0_0_45px_rgba(232,17,45,.35)] transition hover:-translate-y-1 hover:bg-red-500"
        >
          stuur bericht → hello@danialkomo.com
        </a>
      </section>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-4 border-t border-red-500/20 bg-[#111114] px-8 py-6 font-mono text-xs text-gray-500 md:flex-row md:px-16">
        <div>
          <span className="text-red-500">~/danial-komo</span> — Developer & Designer
        </div>
        <div>© 2026 — Winterswijk, Nederland</div>
      </footer>
    </main>
  );
}