import React from "react";
import SimpleWaterfall from "./SimpleWaterfall";
import WaterfallWithoutCumulativeSum from "./WaterfallWithoutCumulativeSum";

function RenderWaterfallCharts(props) {
  return (
    <>
      <h1>WaterFall Charts</h1>
      <SimpleWaterfall />
      <WaterfallWithoutCumulativeSum />
    </>
  );
}

export default RenderWaterfallCharts;
