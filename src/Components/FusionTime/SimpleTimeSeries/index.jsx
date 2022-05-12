import React from "react";
import ColumnAndLineCombinationOnTimeAxis from "./ColumnAndLineCombinationOnTimeAxis";
import DualYAxisOnTimeAxis from "./DualYAxisOnTimeAxis";
import LineChartWithTimeAxis from "./LineChartWithTimeAxis";
import MultipleSeriesOnTimeAxis from "./MultipleSeriesOnTimeAxis";

function RenderSimpleTimeSeries(props) {
  return (
    <>
      <h1>Simple Time Series Charts</h1>
      <LineChartWithTimeAxis />
      <MultipleSeriesOnTimeAxis />
      <ColumnAndLineCombinationOnTimeAxis />
      <DualYAxisOnTimeAxis />
    </>
  );
}

export default RenderSimpleTimeSeries;
