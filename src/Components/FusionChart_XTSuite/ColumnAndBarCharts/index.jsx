import React from "react";
import Column3dChart from "./Column3dChart";
import ColumnChartComponent from "./ColumnChartComponent";
import GroupedColumn3dChart from "./GroupedColumn3dChart";
import GroupedColumnChart from "./GroupedColumnChart";
import SimpleBar3dChart from "./SimpleBar3dChart";
import SimpleBarChart from "./SimpleBarChart";

function RenderColumnAndBarChart(props) {
  return (
    <>
      <h1>Column And Bar Chart - FusionChart_XTSuite</h1>
      <ColumnChartComponent />
      <Column3dChart />
      <GroupedColumnChart />
      <GroupedColumn3dChart />
      <SimpleBarChart />
      <SimpleBar3dChart />
    </>
  );
}

export default RenderColumnAndBarChart;
