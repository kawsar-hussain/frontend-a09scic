import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen bg-[#69ec6924] flex flex-col items-center justify-center">
      <p className="text-[#14c214]">Loading...</p>
      <span className="loading loading-spinner text-[#14c214]"></span>
    </div>
  );
};

export default Loader;
