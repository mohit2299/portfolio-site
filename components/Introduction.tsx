"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, FileText } from "lucide-react";
import { ABOUT, EDUCATION, PROFILE } from "@/config";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function Introduction() {
  return (
    <motion.section initial="hidden" animate="show" variants={container} className="min-h-[92vh] pt-24 flex flex-col items-center justify-center px-6">
      <motion.div variants={item} className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            Meet {PROFILE.name.split(" ")[0]},
          </motion.span>
          <br />
          <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            {PROFILE.title}
          </motion.span>
        </h1>
        <motion.p className="text-xl text-neutral-400 max-w-2xl mx-auto" variants={item}>{PROFILE.tagline}</motion.p>
      </motion.div>

      <motion.div variants={item} className="flex flex-wrap justify-center gap-6 mb-12">
        <a href={`mailto:${PROFILE.email}`} className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /><span>{PROFILE.email}</span></a>
        <a href={`tel:${PROFILE.phone.replace(/[^0-9]/g, "")}`} className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors"><Phone className="w-5 h-5" /><span>{PROFILE.phone}</span></a>
        <span className="flex items-center space-x-2 text-neutral-400"><MapPin className="w-5 h-5" /><span>{PROFILE.location}</span></span>
      </motion.div>

      <motion.div variants={item} className="flex space-x-4">
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-neutral-700 hover:border-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-neutral-700 hover:border-white transition-colors"><FileText className="w-5 h-5" /></a>
      </motion.div>

      <motion.div variants={container} className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {[{ title: "About Me", content: ABOUT }, { title: "Education", content: EDUCATION.join("\n") }].map((s) => (
          <motion.div key={s.title} variants={item} className="space-y-4">
            <h2 className="text-2xl font-bold">{s.title}</h2>
            <p className="text-neutral-400 whitespace-pre-line">{s.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
