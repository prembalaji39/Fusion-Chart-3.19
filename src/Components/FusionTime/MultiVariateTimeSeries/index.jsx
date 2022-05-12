import React from "react";
import ChartWithVariableCanvasHeightOnMultiVariate from "./ChartWithVariableCanvasHeightOnMultiVariate";
import DifferentPlotTypeForEachMeasureOnMultiVariate from "./DifferentPlotTypeForEachMeasureOnMultiVariate";
import PlottingTwoVariablesOnMultiVariateTimeSeries from "./PlottingTwoVariablesOnMultiVariateTimeSeries";
import YAxisOnOneSideOfMultiVariate from "./YAxisOnOneSideOfMultiVariate";

function RenderMultiVariateCharts(props) {
  return (
    <>
      <h1>Multi Variate Time Series Charts</h1>
      <PlottingTwoVariablesOnMultiVariateTimeSeries />
      <DifferentPlotTypeForEachMeasureOnMultiVariate />
      <YAxisOnOneSideOfMultiVariate />
      <ChartWithVariableCanvasHeightOnMultiVariate />
    </>
  );
}

export default RenderMultiVariateCharts;
