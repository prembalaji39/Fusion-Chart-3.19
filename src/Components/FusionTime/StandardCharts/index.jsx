import React from "react";
import AreaChartWithTimeAxis from "./AreaChartWithTimeAxis";
import ColumnChartWithTimeAxis from "./ColumnChartWithTimeAxis";
import CustomizedAreaChartWithTimeAxis from "./CustomizedAreaChartWithTimeAxis";
import DashedLineChartWithTimeAxis from "./DashedLineChartWithTimeAxis";
import GroupedColumnChartWithTimeAxis from "./GroupedColumnChartWithTimeAxis";
import OverlappingAreaWithTimeAxis from "./OverlappingAreaWithTimeAxis";
import SmoothAreaChartWithTimeAxis from "./SmoothAreaChartWithTimeAxis";
import SplinePlotWithTimeAxis from "./SplinePlotWithTimeAxis";
import StackedAreaWithTimeAxis from "./StackedAreaWithTimeAxis";
import StackedColumnWithTimeAxis from "./StackedColumnWithTimeAxis";
import SteplineChartWithTimeAxis from "./SteplineChartWithTimeAxis";

function RenderStandardCharts(props) {
  return (
    <>
      <h1>Standard Time Series Charts</h1>
      <ColumnChartWithTimeAxis />
      <StackedColumnWithTimeAxis />
      <GroupedColumnChartWithTimeAxis />
      <AreaChartWithTimeAxis />
      <SmoothAreaChartWithTimeAxis />
      <StackedAreaWithTimeAxis />
      <OverlappingAreaWithTimeAxis />
      <CustomizedAreaChartWithTimeAxis />
      <DashedLineChartWithTimeAxis />
      <SteplineChartWithTimeAxis />
      <SplinePlotWithTimeAxis />
    </>
  );
}

export default RenderStandardCharts;
