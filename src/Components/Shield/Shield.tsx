import React from "react";
import "./Shield.css";

const Shield: React.FC = () => (
  <svg
    className="shield-icon"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    enableBackground="new 0 0 512 512"
  >
    <defs>
      <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
      <mask id="mask">
        <path
          d="m256,501c-4,0-8-1.2-11.4-3.5-147.3-99.1-232.4-247.2-233.6-406.4-0.1-9.3 6.2-17.5 15.2-19.9l224.6-59.6c3.4-0.9 7-0.9 10.5,0l224.6,59.6c9,2.4 15.2,10.6 15.2,19.9-1.1,159.1-86.3,307.3-233.6,406.4-3.5,2.3-7.5,3.5-11.5,3.5z"
          stroke="white"
          strokeWidth={20}
          fill="none"
        />
      </mask>
    </defs>
    <g mask="url(#mask)">
      <path
        id="virtualPath"
        d="m256,501c-4,0-8-1.2-11.4-3.5-147.3-99.1-232.4-247.2-233.6-406.4-0.1-9.3 6.2-17.5 15.2-19.9l224.6-59.6c3.4-0.9 7-0.9 10.5,0l224.6,59.6c9,2.4 15.2,10.6 15.2,19.9-1.1,159.1-86.3,307.3-233.6,406.4-3.5,2.3-7.5,3.5-11.5,3.5z"
        stroke="#89a7bd"
        strokeWidth={20}
        fill="none"
      />
      <circle r="15" fill="#f2f5f8" filter="url(#blurFilter)">
        <animateMotion
          repeatCount="indefinite"
          dur="5s"
          keyPoints="0;0.2;0.5;0.6;1"
          keyTimes="0;0.3;0.55;0.6;1"
        >
          <mpath href="#virtualPath" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.2;0.8;1"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

export default Shield;
