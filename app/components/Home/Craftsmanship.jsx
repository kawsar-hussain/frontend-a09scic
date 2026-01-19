import { ShieldCheck, Zap, Settings } from "lucide-react";

const Craftsmanship = () => (
  <section className="py-24 bg-[#F8F9FA]">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="bg-white p-6 rounded-[4rem] shadow-xl rotate-[-2deg]">
          <img
            src="https://images.unsplash.com/photo-1619385029199-ce798f64246a?q=80&w=1000"
            className="rounded-[3rem] w-full grayscale hover:grayscale-0 transition-all duration-700"
            alt="Macro Watch Gears"
          />
        </div>
        <div className="absolute top-1/2 -right-10 bg-[#2D336B] text-white p-8 rounded-3xl hidden md:block">
          <p className="text-4xl font-bold italic">99.9%</p>
          <p className="text-[10px] uppercase tracking-widest opacity-70">Accuracy Rate</p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-light text-gray-900 leading-tight mb-12">
          Mastery in every <span className="font-bold border-b-4 border-[#B38E44]">millisecond.</span>
        </h2>
        <div className="space-y-10">
          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#B38E44]">
              <Settings size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-tighter">Swiss Caliber Movement</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Engineered with self-winding mechanical movements that harness the energy of your motion.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#B38E44]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-tighter">Sapphire Crystal Glass</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Scratch-resistant protection with double-sided anti-reflective coating for ultimate clarity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Craftsmanship;
