import React from "react";

import Donut2D from "./Donut2D";
import Donut3D from "./Donut3D";
import NestedPie2D from "./NestedPie2D";
import PieChart2d from "./PieChart2d";
import PieChart3d from "./PieChart3d";

function RenderPieAndDonutCharts(props) {
  return (
    <>
      <h1>Pie And Donut Chart - FusionChart_XTSuite</h1>
      <Donut2D />
      <Donut3D />
      <PieChart2d />
      <PieChart3d />
      <NestedPie2D />
    </>
  );
}

export default RenderPieAndDonutCharts;
