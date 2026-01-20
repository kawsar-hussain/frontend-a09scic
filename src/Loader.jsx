import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "transparent", // OLED optimized
      }}
    >
      <svg width="60" height="60" viewBox="0 0 50 50">
        {/* Static Background Track for Depth */}
        <circle cx="25" cy="25" r="20" fill="none" stroke="#FFEDC4" strokeWidth="4" />

        {/* Animated Loading Arc */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#FFAE00" // Premium Electric Blue
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
        >
          {/* Rotation Animation */}
          <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" />
          {/* Subtle Pulse Animation to the stroke */}
          <animate attributeName="stroke-dasharray" values="1,150; 90,150; 1,150" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;
