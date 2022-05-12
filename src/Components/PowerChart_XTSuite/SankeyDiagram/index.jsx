import React from "react";
import SankeyDiagram from "./SankeyDiagram";
import SankeyWithNoNodes from "./SankeyWithNoNodes";
import VerticalSankey from "./VerticalSankey";

function RenderSankeyDiagram(props) {
  return (
    <>
      <h1>Sankey Diagram Charts</h1>
      <SankeyDiagram />
      <VerticalSankey />
      <SankeyWithNoNodes />
    </>
  );
}

export default RenderSankeyDiagram;
