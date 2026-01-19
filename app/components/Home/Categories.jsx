import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    {
      title: "The Executive",
      desc: "Automatic Movements",
      img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000",
    },
    {
      title: "The Sport",
      desc: "Durability & Style",
      img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000",
    },
    {
      title: "The Vintage",
      desc: "Timeless Classics",
      img: "https://img.drz.lazcdn.com/static/bd/p/3c07f247ae0cf8f06bda59a10a38fc65.jpg_960x960q80.jpg_.webp",
    },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#B38E44] font-bold mb-4">Curated Choice</h2>
            <p className="text-3xl font-bold text-gray-900">Featured Categories</p>
          </div>

          <Link href="/collections" className="text-[10px] uppercase tracking-widest font-bold border-b-2 border-[#2D336B] pb-1 hover:opacity-70 transition">
            View All
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                <p className="text-[#B38E44] text-[10px] uppercase tracking-widest mb-2">{cat.desc}</p>
                <h3 className="text-white text-2xl font-bold">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
