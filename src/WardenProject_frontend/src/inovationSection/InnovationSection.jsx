import React from 'react';
import './InnovationSection.scss';
import forestImage from './drone.jpg'; // Adjust the path as per your file structure

const InnovationSection = () => {
  return (
    <div className="innovation-section">
      <div className="content">
        <h1>Cutting-edge Innovation for life on earth.</h1>
        <p>
          We are on a mission to save the earth. To achieve this, we empower companies with
          instant access to actionable insights from space, without the need for complex
          infrastructure or specialized skills. With our powerful APIs, businesses can innovate
          faster, launch their MVPs quicker, and focus on what really matters — solving problems
          and delivering value.
        </p>
        <p>
          Join us in our mission to leverage the power of AI and remote sensing technology
          for a better, smarter world.
        </p>
        <div className="request-demo">
          <input type="email" placeholder="Your email address…" />
          <button>Request demo</button>
        </div>
      </div>
      <div className="image-container">
        <img src={forestImage} alt="Forest with drone and AI network overlay" />
      </div>
    </div>
  );
};

export default InnovationSection;
