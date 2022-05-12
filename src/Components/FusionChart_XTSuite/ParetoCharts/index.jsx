import React from "react";
import Pareto3DChart from "./Pareto3DChart";
import ParetoWithDualAxis from "./ParetoWithDualAxis";
import SimpleParetoChart from "./SimpleParetoChart";

function RenderParetoCharts(props) {
  return (
    <>
      <h1>Pareto Charts - FusionChart_XTSuite</h1>
      <SimpleParetoChart />
      <ParetoWithDualAxis />
      <Pareto3DChart />
    </>
  );
}

export default RenderParetoCharts;
