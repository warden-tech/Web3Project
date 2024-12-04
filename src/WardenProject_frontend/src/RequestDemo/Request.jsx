import React from "react";
import "./Request.scss"; // Make sure this path matches your project structure
import backgroundImage from "./precise.jpg"; // Adjust path based on your structure

const Request = () => {
  return (
    <section
      className="request-demo"
      style={{
        backgroundImage: `linear-gradient(259.5deg, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.9) 100%), url(${backgroundImage})`,
        padding: 0,
      }}
    >
      <div className="request-demoContent">
        <h1>
          Precise and actionable intelligence delivered directly to your team.
        </h1>
        <p>
          Our mission is to leverage the power of AI and remote-sensing
          technology for a better, smarter world.
        </p>
        <button className="request-demoButton">
          Request a demo
          <span className="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_234_381)">
                <path
                  d="M17.2611 6.77342L17.0556 7.24482C16.9053 7.58993 16.428 7.58993 16.2775 7.24482L16.0721 6.77342C15.7059 5.93289 15.0462 5.26367 14.223 4.89756L13.59 4.61601C13.2477 4.46377 13.2477 3.96567 13.59 3.81343L14.1876 3.54761C15.032 3.17209 15.7035 2.4781 16.0634 1.60902L16.2744 1.0996C16.4215 0.74457 16.9118 0.74457 17.0588 1.0996L17.2698 1.60902C17.6298 2.4781 18.3013 3.17209 19.1456 3.54761L19.7432 3.81343C20.0855 3.96567 20.0855 4.46377 19.7432 4.61601L19.1102 4.89756C18.287 5.26367 17.6274 5.93289 17.2611 6.77342ZM16.6666 9.16666C17.2245 9.16666 17.7611 9.07524 18.2622 8.90666C18.3091 9.26449 18.3333 9.62941 18.3333 10C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C8.58121 18.3333 7.24529 17.9788 6.07593 17.3535L1.66663 18.3333L2.64647 13.924C2.02116 12.7547 1.66663 11.4187 1.66663 10C1.66663 5.39762 5.39758 1.66666 9.99996 1.66666C10.7546 1.66666 11.4859 1.76699 12.1811 1.95502C11.8517 2.6218 11.6666 3.37262 11.6666 4.16666C11.6666 6.92809 13.9052 9.16666 16.6666 9.16666ZM5.83329 10C5.83329 12.3012 7.69878 14.1667 9.99996 14.1667C12.3011 14.1667 14.1666 12.3012 14.1666 10H12.5C12.5 11.3807 11.3807 12.5 9.99996 12.5C8.61921 12.5 7.49996 11.3807 7.49996 10H5.83329Z"
                  fill="#E5E9F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_234_381">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Request;
