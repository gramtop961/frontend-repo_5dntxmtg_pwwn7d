import React, { useEffect, useRef } from 'react';

/**
 * GameLoop is a headless component that manages the simple endless driving simulation.
 * It listens to keyboard input, runs a requestAnimationFrame loop, and reports
 * speed, distance, and elevation to the parent via onTick.
 */
const GameLoop = ({ onTick }) => {
  const keysRef = useRef({ up: false, down: false, left: false, right: false });
  const lastTimeRef = useRef(null);
  const stateRef = useRef({ speed: 60, distance: 0, lane: 0, elevation: 1200 });

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'w') keysRef.current.up = true;
      if (e.key === 'ArrowDown' || e.key === 's') keysRef.current.down = true;
      if (e.key === 'ArrowLeft' || e.key === 'a') keysRef.current.left = true;
      if (e.key === 'ArrowRight' || e.key === 'd') keysRef.current.right = true;
    };
    const onKeyUp = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'w') keysRef.current.up = false;
      if (e.key === 'ArrowDown' || e.key === 's') keysRef.current.down = false;
      if (e.key === 'ArrowLeft' || e.key === 'a') keysRef.current.left = false;
      if (e.key === 'ArrowRight' || e.key === 'd') keysRef.current.right = false;
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    const ACCEL = 30; // km/h per second when accelerating
    const BRAKE = 60; // km/h per second when braking
    const FRICTION = 10; // km/h per second passive slowdown
    const MAX_SPEED = 280;
    const MIN_SPEED = 0;
    const LANE_SPEED = 1.8; // lane change per second

    const step = (time) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const dt = Math.min(0.05, (time - lastTimeRef.current) / 1000); // cap delta at 50ms
      lastTimeRef.current = time;

      const keys = keysRef.current;
      const s = stateRef.current;

      // Update speed
      if (keys.up) s.speed += ACCEL * dt;
      else s.speed -= FRICTION * dt;
      if (keys.down) s.speed -= BRAKE * dt;
      s.speed = Math.max(MIN_SPEED, Math.min(MAX_SPEED, s.speed));

      // Distance: speed (km/h) -> m/s -> multiply by dt seconds
      const metersPerSec = (s.speed * 1000) / 3600;
      s.distance += metersPerSec * dt;

      // Lane/elevation flavor
      if (keys.left) s.lane -= LANE_SPEED * dt;
      if (keys.right) s.lane += LANE_SPEED * dt;
      s.lane = Math.max(-1, Math.min(1, s.lane));

      // Gentle mountain undulation with lane bias
      s.elevation = 1200 + Math.sin(s.distance / 120) * 120 + s.lane * 30;

      onTick?.({ speed: s.speed, distance: s.distance, elevation: s.elevation, lane: s.lane });
      requestAnimationFrame(step);
    };

    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [onTick]);

  return null;
};

export default GameLoop;
