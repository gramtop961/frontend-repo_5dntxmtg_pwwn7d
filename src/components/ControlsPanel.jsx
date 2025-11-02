import React from 'react';
import { Gamepad2, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

const Key = ({ children }) => (
  <span className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/80 shadow-sm">
    {children}
  </span>
);

const ControlsPanel = () => {
  return (
    <section id="how" className="relative w-full py-10 sm:py-12 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 text-white/80">
          <Gamepad2 size={18} />
          <p className="text-sm">Controls</p>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Find Your Line</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Accelerate to build speed, keep your car centered, and manage the climb. The road is endless — your flow is not.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-sm text-white/80">Speed</p>
            <div className="mt-2 flex items-center gap-2">
              <Key><ArrowUp size={14} /></Key>
              <span className="text-xs text-white/60">Accelerate</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Key><ArrowDown size={14} /></Key>
              <span className="text-xs text-white/60">Brake</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-sm text-white/80">Steering</p>
            <div className="mt-2 flex items-center gap-2">
              <Key><ArrowLeft size={14} /></Key>
              <span className="text-xs text-white/60">Left</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Key><ArrowRight size={14} /></Key>
              <span className="text-xs text-white/60">Right</span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/50">
          Tip: Click anywhere to focus, then use the arrow keys.
        </p>
      </div>
    </section>
  );
};

export default ControlsPanel;
