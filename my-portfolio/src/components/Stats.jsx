import React from 'react';
import '../styles/Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stat-item">
        <h3>+1</h3>
        <p>YEARS OF<br />EXPERIENCE</p>
      </div>
      <div className="stat-item">
        <h3>+5</h3>
        <p>PROJECTS<br />COMPLETED</p>
      </div>
      <div className="stat-item">
        <h3>+10</h3>
        <p>WORLDWIDE<br />CLIENTS</p>
      </div>
    </section>
  );
};

export default Stats; 