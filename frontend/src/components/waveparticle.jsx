import React from "react";

const WaveTransition = () => {
  return (
    <div className="relative h-24 -mt-1">
      <svg
        viewBox="0 0 1440 100"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Main filled wave */}
        <path
          d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z"
          fill="currentColor"
          className="text-[#001F54]/5 dark:text-[#001F54]"
        />

        {/* Blue outline wave */}
        <path
          d="M0,60 Q360,30 720,60 T1440,60"
          fill="none"
          stroke="#56CCF2"
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Yellow outline wave */}
        <path
          d="M0,70 Q360,40 720,70 T1440,70"
          fill="none"
          stroke="#FFD95A"
          strokeWidth="1"
          opacity="0.2"
        />
      </svg>
    </div>
  );
};

export default WaveTransition;
