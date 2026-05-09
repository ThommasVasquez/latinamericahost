"use client";
import React from 'react';
import { Globe } from 'lucide-react';

export default function Logo({ className = "", size = "normal" }: { className?: string, size?: "small" | "normal" | "large" }) {
  const sizes = {
    small: { text: "text-lg", icon: 18, box: "px-1 py-0 text-[8px]" },
    normal: { text: "text-xl", icon: 24, box: "px-1.5 py-0.5 text-[10px]" },
    large: { text: "text-4xl", icon: 48, box: "px-3 py-1 text-xs" }
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-4 font-heading font-black tracking-tighter uppercase ${className}`}>
      {/* Brutalist Icon */}
      <div className="relative">
        <div className="absolute top-1 left-1 w-full h-full bg-primary -z-10"></div>
        <div className="bg-black border-2 border-black p-1.5 text-primary flex items-center justify-center">
          <Globe size={s.icon} strokeWidth={3} />
        </div>
      </div>
      
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-2">
          <span className={`${s.text} text-white`}>LATINHOST</span>
          <span className={`bg-primary text-black font-black ${s.box} -rotate-3 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]`}>
            INC
          </span>
        </div>
        <span className="text-[9px] tracking-[0.2em] font-bold opacity-40 mt-1.5 text-white">
          INFRASTRUCTURE // 2026
        </span>
      </div>
    </div>
  );
}
