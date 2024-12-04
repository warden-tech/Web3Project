import React from 'react';
import './ElixirSection.scss';

const ElixirSection = () => {
  return (
    <div className="elixir-section">
      <div className="background-text">ELIXIR</div>
      <div className="content">
        <p className="subtitle">Elixir by Warden</p>
        <h1>Unlock Insights with Elixir by Warden</h1>
        <p className="description">
          Enhance your remote sensing workflows with Elixir, Warden's lightweight AI model. 
          Elixir seamlessly integrates satellite data, eliminating the need for specialized 
          geospatial expertise.
        </p>
        <button className="explore-button">Explore Elixir</button>
      </div>
    </div>
  );
};

export default ElixirSection;
