import React from "react";
import BubbleWithQuadrantChart from "./BubbleWithQuadrantChart";
import ScatterWithMultipleSeries from "./ScatterWithMultipleSeries";
import SimpleBubbleChart from "./SimpleBubbleChart";
import SimpleScatter from "./SimpleScatter";

function RenderBubbleAndScatterCharts(props) {
  return (
    <>
      <h1>Bubble And Scatter Chart - FusionChart_XTSuite</h1>
      <SimpleBubbleChart />
      <BubbleWithQuadrantChart />
      <SimpleScatter />
      <ScatterWithMultipleSeries />
    </>
  );
}

export default RenderBubbleAndScatterCharts;
