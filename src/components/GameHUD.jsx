import React from 'react';

const Stat = ({ label, value, unit }) => (
  <div className="flex flex-col items-start">
    <span className="text-xs uppercase tracking-wider text-white/60">{label}</span>
    <div className="mt-1 flex items-baseline gap-1">
      <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{value}</span>
      {unit ? <span className="text-xs text-white/50">{unit}</span> : null}
    </div>
  </div>
);

const GameHUD = ({ speed, distance, elevation }) => {
  return (
    <div className="pointer-events-none fixed left-0 right-0 top-4 sm:top-6 flex justify-center z-20">
      <div className="pointer-events-auto mx-4 sm:mx-0 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl shadow-black/30">
        <div className="flex items-center gap-6 sm:gap-10">
          <Stat label="Speed" value={Math.round(speed)} unit="km/h" />
          <Stat label="Distance" value={(distance / 1000).toFixed(2)} unit="km" />
          <Stat label="Elevation" value={Math.round(elevation)} unit="m" />
        </div>
      </div>
    </div>
  );
};

export default GameHUD;
