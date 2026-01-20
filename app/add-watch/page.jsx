"use client";

import axios from "axios";
import React from "react";

const AddWatch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      watchName: form.watchName.value,
      brand: form.brand.value,
      price: Number(form.price.value),
      category: form.category.value,
      movementType: form.movementType.value,
      caseMaterial: form.caseMaterial.value,
      dialColor: form.dialColor.value,
      waterResistance: Number(form.waterResistance.value),
      stockQuantity: Number(form.stockQuantity.value),
      productImage: form.productImage.value,
    };

    console.log(formData);
    axios.post("http://localhost:5000/add-watch", formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto  p-8 bg-white rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Add New Watch</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Watch Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Watch Name</label>
            <input type="text" name="watchName" placeholder="e.g., Aura Executive" className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition" />
          </div>

          {/* Brand */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Brand</label>
            <input type="text" name="brand" placeholder="e.g., Aura Watches" className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition" />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Price ($)</label>
            <input type="number" name="price" placeholder="e.g., 2500" className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition" />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Category</label>
            <select name="category" className="select px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition">
              <option value="">Select category</option>
              <option value="executive">Luxury</option>
              <option value="sport">Sport</option>
              <option value="vintage">Vintage</option>
            </select>
          </div>

          {/* Movement Type */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Movement Type</label>
            <input type="text" name="movementType" placeholder="Automatic / Quartz / Manual" className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition" />
          </div>

          {/* Case Material */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Case Material</label>
            <input type="text" name="caseMaterial" placeholder="e.g., Stainless Steel" className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition" />
          </div>

          {/* Dial Color */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Dial Color</label>
            <input type="text" name="dialColor" placeholder="e.g., Black / White" className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition" />
          </div>

          {/* Water Resistance */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Water Resistance (meters)</label>
            <input type="number" name="waterResistance" placeholder="e.g., 50" className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition" />
          </div>

          {/* Stock Quantity */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Stock Quantity</label>
            <input type="number" name="stockQuantity" placeholder="e.g., 10" className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition" />
          </div>

          {/* Product Image */}
          <div className="flex flex-col ">
            <label className="mb-2 text-sm font-medium text-gray-700">Product Image</label>
            <input
              type="url"
              name="productImage"
              placeholder="e.g. https://via.placeholder.com/400x400.png?text=Watch+Image"
              className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button type="submit" className="bg-[#2D336B] text-white font-bold px-8 py-3 rounded-full uppercase tracking-widest hover:bg-black transition">
              Add Watch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWatch;
