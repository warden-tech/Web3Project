// CaseStudy.jsx
import React from "react";
import "./CaseStudy.scss";

const CaseStudy = () => {
  return (
    <div className="case-study">
      <div className="image-container-accelarate">
        <img
          src="images/controllingDrone.jpg"
          alt="Drone flying over a field with a farmer watching"
          className="case-study-image"
        />
        <button className="play-button">
          <span>&#9658;</span>
        </button>
      </div>
      <div className="text-content">
        <h2 className="accelerate">
          Accelerating Innovation and Efficiency: How Warden's Platform Transformed
          Startups and Agriculture <span className="highlight">[Case study]</span>.
        </h2>
        <p className="accelerateP">
          A tech startup and a farming cooperative both leveraged Warden's
          platform to achieve significant improvements in efficiency and
          decision-making. The startup reduced its product launch time by 40%
          by utilizing Warden's pre-processed analytics, which accelerated the
          development of their MVP and shortened time-to-market. Meanwhile, the
          farming cooperative optimized crop yields and monitored soil health
          using AI-powered satellite imagery provided by Warden, leading to
          better resource management and informed decision-making. Both cases
          highlight how Warden's platform enables faster, data-driven solutions
          in diverse industries.
        </p>
      </div>
    </div>
  );
};

export default CaseStudy;
