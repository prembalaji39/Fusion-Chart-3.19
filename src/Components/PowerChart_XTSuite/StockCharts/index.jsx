import React from "react";
import KagiChart from "./KagiChart";
import SimpleCandleStickChart from "./SimpleCandleStickChart";

function RenderStockCharts(props) {
  return (
    <>
      <h1>Stock Charts</h1>
      <SimpleCandleStickChart />
      <KagiChart />
    </>
  );
}

export default RenderStockCharts;
