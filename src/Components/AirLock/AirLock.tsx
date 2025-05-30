import React from "react";
import "./AirLock.css";

interface AirlockProps {
  onClick: () => void;
}

const Airlock: React.FC<AirlockProps> = ({ onClick }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 48 48"
    id="b"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className="airlock-svg"
  >
    <path
      className="c"
      d="m29.9959,15.6812c2.8961,1.9172,4.628,5.0953,4.628,8.4923h0c0,5.6814-4.7563,10.2872-10.6236,10.2872-.5577,0-1.1146-.0425-1.6655-.1272"
    />
    <path
      className="c"
      d="m17.9375,32.6207c-2.8574-1.9227-4.5614-5.0785-4.5614-8.4479,0-5.6814,4.7563-10.2872,10.6236-10.2872.5729,0,1.1449.0449,1.7104.1342"
    />
    <path className="line1" d="m29.874,9.3855l2.6048-5.8855" />
    {/* <path className="line1" d="m29.874,9.3855l2.6048-5.8855" /> */}
    <path className="line2" d="m15.3178,44.5l2.6048-5.8855" />
  </svg>
);

export default Airlock;
