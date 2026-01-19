import React from "react";
import { Settings } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-24 bg-[#2D336B] text-white relative overflow-hidden">
      {/* Background Icon */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <Settings size={400} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8 text-[#B38E44]">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl">
              ★
            </span>
          ))}
        </div>

        {/* Quote */}
        <h2 className="text-2xl md:text-4xl font-light italic leading-relaxed mb-10">
          “The attention to detail in the Aura series is staggering. It’s not just a tool for time; it’s a statement of personal heritage.”
        </h2>

        {/* Author */}
        <div className="flex flex-col items-center">
          <img src="https://ui-avatars.com/api/?name=Julian+M&background=B38E44&color=fff" alt="Julian Montgomery" className="w-16 h-16 rounded-full border-4 border-white/10 mb-4" />
          <p className="font-bold uppercase tracking-widest text-xs">Julian Montgomery</p>
          <p className="text-[10px] text-[#B38E44] uppercase tracking-widest mt-1">Collector & Horologist</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
