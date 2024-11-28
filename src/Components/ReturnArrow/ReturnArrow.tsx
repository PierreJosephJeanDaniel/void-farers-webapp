import React from "react";
import "./ReturnArrow.css";

interface ReturnArrowProps {
  onClick: () => void;
}

const ReturnArrow: React.FC<ReturnArrowProps> = ({ onClick }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className="arrow-svg"
  >
    <line
      x1="30"
      y1="10"
      x2="10"
      y2="24"
      strokeWidth="1"
      className="arrow-line1"
    />
    <line
      x1="30"
      y1="38"
      x2="10"
      y2="24"
      strokeWidth="1"
      className="arrow-line2"
    />
    <line
      x1="30"
      y1="10"
      x2="10"
      y2="24"
      strokeWidth="1"
      className="arrow-line3"
    />
    <line
      x1="30"
      y1="38"
      x2="10"
      y2="24"
      strokeWidth="1"
      className="arrow-line4"
    />
    <line
      x1="30"
      y1="10"
      x2="10"
      y2="24"
      strokeWidth="1"
      className="arrow-line5"
    />
    <line
      x1="30"
      y1="38"
      x2="10"
      y2="24"
      strokeWidth="1"
      className="arrow-line6"
    />
  </svg>
);

export default ReturnArrow;
