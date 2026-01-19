"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdSearch, IoMdFunnel, IoMdOptions } from "react-icons/io";

const Collections = () => {
  const initialWatches = [
    {
      id: 1,
      watchName: "Submariner",
      brand: "Rolex",
      price: 9500,
      category: "Luxury",
      movementType: "Automatic",
      caseMaterial: "Steel",
      dialColor: "Black",
      waterResistance: "300m",
      stockQuantity: 5,
      productImage: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000",
    },
    {
      id: 2,
      watchName: "Speedmaster",
      brand: "Omega",
      price: 6200,
      category: "Sport",
      movementType: "Manual",
      caseMaterial: "Titanium",
      dialColor: "Blue",
      waterResistance: "50m",
      stockQuantity: 8,
      productImage: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000",
    },
    {
      id: 3,
      watchName: "Seamaster",
      brand: "Omega",
      price: 5400,
      category: "Luxury",
      movementType: "Automatic",
      caseMaterial: "Steel",
      dialColor: "White",
      waterResistance: "150m",
      stockQuantity: 3,
      productImage: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000",
    },
    {
      id: 4,
      watchName: "Carrera",
      brand: "Tag Heuer",
      price: 3200,
      category: "Sport",
      movementType: "Automatic",
      caseMaterial: "Steel",
      dialColor: "Black",
      waterResistance: "100m",
      stockQuantity: 12,
      productImage: "https://images.unsplash.com/photo-1526045431048-f857369aba09?q=80&w=1000",
    },
    {
      id: 5,
      watchName: "Black Bay",
      brand: "Tudor",
      price: 3800,
      category: "Vintage",
      movementType: "Automatic",
      caseMaterial: "Bronze",
      dialColor: "Brown",
      waterResistance: "200m",
      stockQuantity: 4,
      productImage: "https://images.unsplash.com/photo-1508685096489-7a669f1bd446?q=80&w=1000",
    },
  ];

  const [watches] = useState(initialWatches);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterColor, setFilterColor] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000);

  const filteredWatches = watches.filter((watch) => {
    const matchesSearch = watch.watchName.toLowerCase().includes(searchTerm.toLowerCase()) || watch.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "All" || watch.category === filterCategory;
    const matchesColor = filterColor === "All" || watch.dialColor === filterColor;
    const matchesPrice = watch.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesColor && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 ">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6 border-b pb-2">
              <IoMdFunnel /> Filters
            </h3>

            {/* Search */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Model or Brand..."
                  className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D336B]"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
                <IoMdSearch className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Category</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D336B]"
                onChange={(e) => setFilterCategory(e.target.value)}
                value={filterCategory}
              >
                <option value="All">All Categories</option>
                <option value="Luxury">Luxury</option>
                <option value="Sport">Sport</option>
                <option value="Vintage">Vintage</option>
              </select>
            </div>

            {/* Dial Color */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Dial Color</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D336B]"
                onChange={(e) => setFilterColor(e.target.value)}
                value={filterColor}
              >
                <option value="All">Any Color</option>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
                <option value="Brown">Brown</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-6">
              <label className="block font-semibold mb-2 flex justify-between">
                Max Price: <span>${maxPrice}</span>
              </label>
              <input type="range" min="0" max="10000" step="500" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#2D336B]" />
              <div className="flex justify-between text-xs font-semibold mt-1 px-1">
                <span>$0</span>
                <span>$10k</span>
              </div>
            </div>

            {/* Reset */}
            <button
              className="w-full border border-gray-400 rounded-full py-2 font-bold hover:bg-[#2D336B] hover:text-white transition"
              onClick={() => {
                setSearchTerm("");
                setFilterCategory("All");
                setFilterColor("All");
                setMaxPrice(10000);
              }}
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Collection */}
        <main className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-gray-800">
              Collection <span className="text-[#2D336B]">({filteredWatches.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredWatches.map((watch) => (
              <div key={watch.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group">
                <Link href={""}>
                  <div className="relative overflow-hidden">
                    <img src={watch.productImage} alt={watch.watchName} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 bg-[#2D336B] text-white text-[10px] px-2 py-1 rounded uppercase">{watch.category}</div>
                  </div>
                </Link>

                <div className="p-4">
                  <p className="text-[10px] font-bold text-[#2D336B] uppercase">{watch.brand}</p>
                  <h3 className="text-lg font-bold text-gray-800">{watch.watchName}</h3>
                  <p className="text-lg font-black text-gray-900 mt-1">${watch.price}</p>

                  <div className="mt-3 grid grid-cols-2 gap-y-1 text-[11px] text-gray-500 border-t pt-2">
                    <p>
                      <b>Case:</b> {watch.caseMaterial}
                    </p>
                    <p>
                      <b>Dial:</b> {watch.dialColor}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span className={`text-[10px] font-bold ${watch.stockQuantity > 0 ? "text-green-600" : "text-red-600"}`}>
                      ● {watch.stockQuantity > 0 ? `${watch.stockQuantity} in stock` : "Out of stock"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWatches.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-300 mt-6">
              <IoMdOptions size={50} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-500">No watches found matching your criteria.</h3>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Collections;
