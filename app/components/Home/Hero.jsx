import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="py-10 relative min-h-[85vh] flex items-center bg-[#FDFDFD] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="z-10 order-2 lg:order-1 animate-in fade-in slide-in-from-left duration-1000">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-10 bg-[#B38E44]"></span>
          <span className="text-[#B38E44] uppercase tracking-[0.4em] font-bold text-[10px]">Premium Horology</span>
        </div>
        <h1 className="text-5xl lg:text-8xl font-light text-gray-900 leading-[1.1] mb-8">
          Defined by <br />
          <span className="font-bold text-[#2D336B]">Precision.</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-md leading-relaxed mb-10">
          Curating an aura of timeless elegance. Discover master-crafted timepieces that bridge the gap between heritage and the future.
        </p>
        <div className="flex flex-wrap gap-5">
          <button className="bg-[#2D336B] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#1a1f4d] transition-all shadow-xl shadow-indigo-100 flex items-center gap-2">
            Explore Collections <ArrowRight size={14} />
          </button>
        </div>
      </div>
      <div className="relative order-1 lg:order-2">
        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
          <img src="https://images.pexels.com/photos/14887214/pexels-photo-14887214.jpeg" className="w-full h-[500px] lg:h-[650px] object-cover" alt="Luxury Watch Movement" />
        </div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#B38E44]/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  </section>
);

export default Hero;
