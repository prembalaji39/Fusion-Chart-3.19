import React from "react";
import RenderBulletsAndSparkCharts from "./BulletsAndSparkCharts";
import RenderFunnelAndPyramidCharts from "./FunnelAndPyramid";
import RenderGanttOrProjectCharts from "./GanttOrProjectCharts";
import RenderGuagesAndKpi from "./GuagesAndKPI";

import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

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
