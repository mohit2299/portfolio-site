"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { PROFILE } from "@/config";

export default function Contact() {
  return (
    <footer className="px-6 py-16 border-t border-neutral-900 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-neutral-300">
        <div className="flex items-center gap-3"><Mail className="w-5 h-5" /><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
        <div className="flex items-center gap-3"><Phone className="w-5 h-5" /><a href={`tel:${PROFILE.phone.replace(/[^0-9]/g, "")}`}>{PROFILE.phone}</a></div>
        <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /><span>{PROFILE.location}</span></div>
      </div>
      <p className="text-center text-neutral-500 mt-8 text-sm">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
    </footer>
  );
}
