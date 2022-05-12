import React from "react";
import GroupedStackedColumnWithScrolling from "./GroupedStackedColumnWithScrolling";
import GroupedStackedColumnChart from "./GroupedStackedColumnChart";
import HunderedPercentStackedColumn3dChart from "./HunderedPercentStackedColumn3dChart";
import StackedAreaChart from "./StackedArea";
import StackedBar from "./StackedBar";
import StackedBar3D from "./StackedBar3D";
import StackedBarsWithScrolling from "./StackedBarsWithScrolling";
import StackedColumn3dChart from "./StackedColumn3dChart";
import StackedColumnChart from "./StackedColumnChart";
import StackedColumnWithNegativeValues from "./StackedColumnWithNegativeValues";

function RenderStackedCharts(props) {
  return (
    <>
      <h1>Stacked Charts - FusionChart_XTSuite</h1>
      <StackedColumnChart />
      <GroupedStackedColumnChart />
      <StackedColumnWithNegativeValues />
      <StackedColumn3dChart />
      <HunderedPercentStackedColumn3dChart />
      <StackedBar />
      <StackedBar3D />
      <StackedAreaChart />
      <StackedBarsWithScrolling />
      <GroupedStackedColumnWithScrolling />
    </>
  );
}

export default RenderStackedCharts;
