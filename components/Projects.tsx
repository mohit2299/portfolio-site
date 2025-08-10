"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/config";

export default function Projects() {
  if (!PROJECTS?.length) return null;
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40 backdrop-blur p-6 hover:border-neutral-600 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-neutral-400">{p.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
