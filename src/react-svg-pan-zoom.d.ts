declare module "react-svg-pan-zoom" {
  import * as React from "react";

  export interface Value {
    version: number;
    mode: string;
    focus: boolean;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    viewerWidth: number;
    viewerHeight: number;
    SVGWidth: number;
    SVGHeight: number;
    startX?: number;
    startY?: number;
    endX?: number;
    endY?: number;
    miniatureOpen?: boolean;
  }

  export interface ReactSVGPanZoomProps {
    width: number;
    height: number;
    tool: string;
    detectAutoPan: boolean;
    onChangeTool: (tool: string) => void;
    onChangeValue: (value: Value) => void;
    ref?: React.Ref<ReactSVGPanZoom>;
    children?: React.ReactNode; // Add children property
  }

  export class ReactSVGPanZoom extends React.Component<ReactSVGPanZoomProps> {
    zoomOnViewerCenter: (scaleFactor: number) => void;
    fitToViewer: () => void;
    fitSelection: (
      selectionSVGPointX: number,
      selectionSVGPointY: number,
      selectionWidth: number,
      selectionHeight: number,
    ) => void;
    setPointOnViewerCenter: (
      SVGPointX: number,
      SVGPointY: number,
      zoomLevel: number,
    ) => void;
    reset: () => void;
  }
}
