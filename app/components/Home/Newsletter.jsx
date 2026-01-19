import React from "react";

const Newsletter = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center border border-gray-100 relative overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B38E44] to-transparent" />

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Join the Inner Circle</h2>

        <p className="text-gray-500 max-w-lg mx-auto mb-10 text-sm leading-relaxed">Be the first to receive notifications about limited edition drops, private auctions, and horological insights.</p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Email address"
            className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D336B]/10 transition-all text-sm"
          />

          <button type="submit" className="bg-[#2D336B] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-black transition-all">
            Subscribe
          </button>
        </form>

        <p className="text-[9px] text-gray-400 mt-6 uppercase tracking-widest">Privacy guaranteed. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;
