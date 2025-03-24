import * as React from "react";
import "./SaveIcon.css";

interface SaveIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const SaveIcon: React.FC<SaveIconProps> = ({ className, ...props }) => (
  <svg
    className={`save-icon ${className || ""}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#00ff00"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g id="save_icon">
      <path d="M17.293 3.293 21 7v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.586a1 1 0 0 1 .707.293Z"></path>
      <path d="M7 13h10v8H7zM8 3h8v5H8z"></path>
    </g>
  </svg>
);

export default SaveIcon;
