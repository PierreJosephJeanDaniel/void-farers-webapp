import React, { useRef, useState, useEffect } from "react";
import "./MapContainer.css";
import map from "../../assets/solarsystem.svg";

const MapContainer: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    const { deltaY } = event;
    const zoomFactor = 1.1;
    const newScale = deltaY < 0 ? scale * zoomFactor : scale / zoomFactor;

    // Calculate the center of the map
    const svgRect = svgRef.current?.getBoundingClientRect();
    if (!svgRect) return;
    const svgCenterX = svgRect.width / 2;
    const svgCenterY = svgRect.height / 2;

    const newTranslate = {
      x: svgCenterX - (svgCenterX - translate.x) * (newScale / scale),
      y: svgCenterY - (svgCenterY - translate.y) * (newScale / scale),
    };

    setScale(newScale);
    setTranslate(newTranslate);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const moveListener = (event: MouseEvent) => {
      requestAnimationFrame(() => handleMouseMove(event));
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      const dx = event.clientX - dragStart.x;
      const dy = event.clientY - dragStart.y;
      setTranslate((translate) => ({
        x: translate.x + dx,
        y: translate.y + dy,
      }));
      setDragStart({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", moveListener);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", moveListener);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, translate, scale]);

  return (
    <div className="map-container">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 1000"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        width="100%"
        height="100%"
        style={{ width: "100%", height: "100%" }}
      >
        <g
          transform={`translate(${translate.x}, ${translate.y}) scale(${scale})`}
        >
          <image href={map} width="1000" height="1000" />
        </g>
      </svg>
    </div>
  );
};

export default MapContainer;
