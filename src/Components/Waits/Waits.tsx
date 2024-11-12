import React from "react";
import "./Waits.css";

interface WaitsProps {
  name: string;
  value: string;
}

const Wait: React.FC<WaitsProps> = ({ name, value }) => {
  return (
    <div className="wait" onClick={() => alert(`${name}: ${value}`)}>
      <div className="text">{name}</div>
      <div className="number">{value}</div>
    </div>
  );
};

const Waits: React.FC = () => {
  return (
    <div className="crt-waits">
      <h1>W.A.I.T.S</h1>
      <Wait name="Will" value={"+ 3"} />
      <Wait name="Athletics" value={""} />
      <Wait name="Intellect" value={"+ 1"} />
      <Wait name="Toughness" value={"- 1"} />
      <Wait name="Sight" value={"+ 2"} />
    </div>
  );
};

export default Waits;
