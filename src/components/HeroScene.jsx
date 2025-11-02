import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroScene = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] bg-black overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth - non-blocking */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Title/Tagline */}
      <div className="relative z-10 h-full flex items-end sm:items-center">
        <div className="px-6 sm:px-10 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Mountain Run
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/70 max-w-xl">
              Drive endlessly through the dark mountain roads. Keep your speed. Find your flow.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#play"
              className="inline-flex items-center gap-2 rounded-full bg-red-600/90 hover:bg-red-600 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-red-600/20 transition-colors"
            >
              Start Driving
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 text-sm font-semibold backdrop-blur-md border border-white/10 transition-colors"
            >
              How to Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroScene;
