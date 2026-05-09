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
    <div className={`flex items-center gap-3 font-heading font-black tracking-tighter uppercase ${className}`}>
      <div className="relative group">
        <div className="absolute inset-0 bg-primary translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
        <div className="relative bg-black border-2 border-black p-1 text-primary">
          <Globe size={s.icon} strokeWidth={3} />
        </div>
      </div>
      
      <div className="flex flex-col leading-none">
        <span className={`${s.text} flex items-center gap-2 text-white`}>
          LATINHOST
          <span className={`bg-primary text-black font-black ${s.box} rotate-3 shadow-[2px_2px_0px_rgba(0,0,0,1)]`}>
            INC
          </span>
        </span>
        <span className="text-[8px] tracking-[0.3em] font-bold opacity-40 ml-0.5 mt-1">
          INFRASTRUCTURE // 2026
        </span>
      </div>
    </div>
  );
}
