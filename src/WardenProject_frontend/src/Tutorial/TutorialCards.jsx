import React from "react";
import "./TutorialCards.scss";

const TutorialCards = () => {
  const tutorials = [
    {
      title: "Getting Started with Warden’s API",
      description:
        "A step-by-step guide to integrating Warden’s single API into your application. Learn how to access pre-processed satellite data and start generating insights without any hassle.",
      buttonText: "Learn more",
      icon: (
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 12L22.9289 19.0711L21.1611 17.3032L26.4645 12L21.1611 6.6967L22.9289 4.92894L30 12ZM3.53554 12L8.83884 17.3032L7.07106 19.0711L0 12L7.07106 4.92894L8.83884 6.6967L3.53554 12ZM12.2356 23.25H9.57511L17.7645 0.75H20.4249L12.2356 23.25Z"
            fill="#E5E9F0"
          />
        </svg>
      ),
    },
    {
      title: "Building Custom Imagery Analytics with Elixir",
      description:
        "Learn how to customize Warden’s lightweight AI models to fit your specific project needs. This tutorial covers the basics of model customization, how to set specific parameters, and how to interpret the results.",
      buttonText: "Learn more",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.25 3.75V23.75H26.25V26.25H3.75V3.75H6.25ZM24.9241 7.42418L27.5759 10.0758L20 17.6516L16.25 13.9013L11.3258 18.8259L8.67418 16.1741L16.25 8.59835L20 12.3487L24.9241 7.42418Z"
            fill="#E5E9F0"
          />
        </svg>
      ),
    },
    {
      title: "Getting Started with Warden’s API",
      description:
        "A step-by-step guide to integrating Warden’s single API into your application. Learn how to access pre-processed satellite data and start generating insights without any hassle.",
      buttonText: "Learn more",
      icon: (
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 12L22.9289 19.0711L21.1611 17.3032L26.4645 12L21.1611 6.6967L22.9289 4.92894L30 12ZM3.53554 12L8.83884 17.3032L7.07106 19.0711L0 12L7.07106 4.92894L8.83884 6.6967L3.53554 12ZM12.2356 23.25H9.57511L17.7645 0.75H20.4249L12.2356 23.25Z"
            fill="#E5E9F0"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="tutorial-cards">
        <div className="tutorial-card-sub">
      <h2 className="section-title">Tutorials and How-Tos</h2>
      <p className="section-subtitle">
        Step-by-step guides to unlock the full potential of warden’s platform
        for your projects
      </p>
      <div className="cards-container">
        {tutorials.map((tutorial, index) => (
          <div className="card" key={index}>
            <div className="icon">{tutorial.icon}</div>
            <h3 className="card-title">{tutorial.title}</h3>
            <p className="card-description">{tutorial.description}</p>
            <button className="learn-more-btn">{tutorial.buttonText}</button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TutorialCards;
