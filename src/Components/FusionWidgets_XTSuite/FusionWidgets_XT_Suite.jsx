import React from "react";
import RenderBulletsAndSparkCharts from "./BulletsAndSparkCharts";
import RenderFunnelAndPyramidCharts from "./FunnelAndPyramid";
import RenderGanttOrProjectCharts from "./GanttOrProjectCharts";
import RenderGuagesAndKpi from "./GuagesAndKPI";

function FusionWidgetsXTSuite(props) {
  return (
    <>
      <h1>FusionWidgets_XT_Suite</h1>
      <RenderGuagesAndKpi />
      <RenderGanttOrProjectCharts />
      <RenderFunnelAndPyramidCharts />
      <RenderBulletsAndSparkCharts />
    </>
  );
}

export default FusionWidgetsXTSuite;
