import React from "react";
import RenderBubbleAndScatterCharts from "./BubbleAndScatterCharts";
import RenderColumnAndBarChart from "./ColumnAndBarCharts";
import RenderCombinedCharts from "./CombinedCharts";
import RenderLineAndAreaChart from "./LineAndAreaCharts";
import RenderMarketCharts from "./MarketCharts";
import RenderParetoCharts from "./ParetoCharts";
import RenderPieAndDonutCharts from "./PieAndDonutCharts";
import RenderStackedCharts from "./StackedCharts";

function FusionChartXtSuite(props) {
  return (
    <>
      <h1>FusionChart_XT_Suite</h1>
      <RenderColumnAndBarChart />
      <RenderLineAndAreaChart />
      <RenderPieAndDonutCharts />
      <RenderStackedCharts />
      <RenderCombinedCharts />
      <RenderBubbleAndScatterCharts />
      <RenderMarketCharts />
      <RenderParetoCharts />
    </>
  );
}

export default FusionChartXtSuite;
