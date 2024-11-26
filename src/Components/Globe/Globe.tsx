import React from "react";
import "./Globe.css";

const Globe: React.FC = () => {
  return (
    <div className="globe-container">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 200 200"
        xmlSpace="preserve"
      >
        {/* Central Globe */}
        <circle cx="100" cy="100" r="30" fill="#00ff00" />

        {/* Orbit Paths */}
        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="#00ff00"
          strokeWidth="0.75"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="#00ff00"
          strokeWidth="0.75"
          fill="none"
        />

        {/* Planet 1 */}
        <circle cx="160" cy="100" r="10" fill="#00ff00">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="140s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Planet 2 */}
        <circle cx="190" cy="100" r="10" fill="#00ff00">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="110s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <div className="globe-text">New Campaign</div>
    </div>
  );
};

export default Globe;
