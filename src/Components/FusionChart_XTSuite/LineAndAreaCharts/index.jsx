import React from "react";
import AreaWithMultipleSeries from "./AreaWithMultipleSeries";
import LineWithMultipleSeries from "./LineWithMultipleSeries";
import SimpleAreaChart from "./SimpleAreaChart";
import SimpleLineChart from "./SimpleLineChart";
import SimpleSplineChart from "./SimpleSplineChart";
import SplineArea from "./SplineArea";
import SplineAreaWithMultipleSeries from "./SplineAreaWithMultipleSeries";
import SplineWithMultipleSeries from "./SplineWithMultipleSeries";
import StepLineChart from "./StepLineChart";

function RenderLineAndAreaChart(props) {
  return (
    <>
      <h1>Line And Area Chart - FusionChart_XTSuite</h1>
      <SimpleLineChart />
      <LineWithMultipleSeries />
      <SimpleAreaChart />
      <AreaWithMultipleSeries />
      <SimpleSplineChart />
      <SplineWithMultipleSeries />
      <SplineArea />
      <SplineAreaWithMultipleSeries />
      <StepLineChart />
    </>
  );
}

export default RenderLineAndAreaChart;
