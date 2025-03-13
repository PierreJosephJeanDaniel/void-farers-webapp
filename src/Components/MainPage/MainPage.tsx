import React from "react";
import "./MainPage.css";
import Shield from "../Shield/shield";

const MainPage: React.FC = () => {
  return (
    <div className="main-page-container">
      <div className="main-page-subheader">
        <div className="shield-container">
          {" "}
          <Shield />
          <div>6</div>
        </div>
      </div>
      <div className="main-page-body">
        <div className="main-page-left">left</div>
        <div className="main-page-right">right</div>
      </div>
    </div>
  );
};

export default MainPage;
