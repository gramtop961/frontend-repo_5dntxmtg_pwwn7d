import React, { useCallback, useState } from 'react';
import HeroScene from './components/HeroScene';
import GameHUD from './components/GameHUD';
import ControlsPanel from './components/ControlsPanel';
import GameLoop from './components/GameLoop';

function App() {
  const [speed, setSpeed] = useState(60);
  const [distance, setDistance] = useState(0);
  const [elevation, setElevation] = useState(1200);
  const [lane, setLane] = useState(0);

  const handleTick = useCallback(({ speed, distance, elevation, lane }) => {
    setSpeed(speed);
    setDistance(distance);
    setElevation(elevation);
    setLane(lane);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with 3D scene */}
      <HeroScene />

      {/* Invisible game engine that updates stats */}
      <GameLoop onTick={handleTick} />

      {/* HUD floating on top */}
      <GameHUD speed={speed} distance={distance} elevation={elevation} />

      {/* Simple road indicator responding to lane */}
      <section id="play" className="relative w-full py-10 sm:py-14 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur shadow-xl shadow-black/30">
            <h3 className="text-lg font-semibold text-white/90">Mountain Pass</h3>
            <p className="mt-1 text-sm text-white/60">Keep centered on the road while maintaining speed.</p>

            {/* Stylized road representation */}
            <div className="mt-6 relative h-48 sm:h-56 overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-black">
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-white/70"
                style={{ opacity: 0.7 }}
              />
              {/* Lane drift indicator */}
              <div
                className="absolute top-0 h-full w-1.5 bg-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-transform duration-150"
                style={{ transform: `translateX(calc(50% + ${lane * 40}px))` }}
              />
              {/* Moving dashed center line */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,white_60%,white_75%,transparent_75%)] bg-[length:100%_32px] animate-[road_0.5s_linear_infinite]" />
              </div>
              {/* Mountain silhouettes */}
              <svg className="absolute bottom-0 left-0 right-0 w-full h-16 text-white/10" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden>
                <path d="M0 20 L15 10 L25 16 L40 6 L55 14 L70 4 L85 12 L100 8 L100 20 Z" fill="currentColor" />
              </svg>
            </div>

            <div className="mt-4 text-xs text-white/50">Use arrow keys to steer and control speed.</div>
          </div>
        </div>
      </section>

      {/* Controls / How to Play */}
      <ControlsPanel />

      {/* Keyframes for the dashed line animation */}
      <style>
        {`
          @keyframes road { from { background-position-y: 0; } to { background-position-y: 32px; } }
        `}
      </style>
    </div>
  );
}

export default App;
