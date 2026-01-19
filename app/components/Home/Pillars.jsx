import { Truck, Award, RotateCcw, Headphones } from "lucide-react";

const Pillars = () => (
  <section className="py-20 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {[
          { icon: <Truck />, label: "Global Shipping", sub: "Fully Insured" },
          { icon: <Award />, label: "5 Year Warranty", sub: "Certified Quality" },
          { icon: <RotateCcw />, label: "30 Day Return", sub: "Easy Exchanges" },
          { icon: <Headphones />, label: "24/7 Concierge", sub: "Expert Advice" },
        ].map((p, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="mb-4 text-gray-300 group-hover:text-[#B38E44] transition-colors duration-300">{p.icon}</div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2D336B] mb-1">{p.label}</h4>
            <p className="text-[10px] text-gray-400 font-medium">{p.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pillars;
