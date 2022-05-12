import React from "react";
import RadarWithMultipleSeries from "./RadarWithMultipleSeries";
import SimpleRadar from "./SimpleRadar";

function RenderRadarCharts(props) {
  return (
    <>
      <h1>Radar Charts</h1>
      <SimpleRadar />
      <RadarWithMultipleSeries />
    </>
  );
}

export default RenderRadarCharts;
