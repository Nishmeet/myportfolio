// src/components/ParticleBackground.jsx

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
// IMPORTANT: Change this import from 'tsparticles' to 'tsparticles-slim'
import { loadSlim } from 'tsparticles-slim'; 
import particlesConfig from './particles-config';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // This loads the tsparticles package bundle
    // IMPORTANT: Change 'loadFull' to 'loadSlim'
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      // You don't need the inline style here if you use CSS, but it's fine
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground;