import React from "react";
import InteractiveCandleStick from "./InteractiveCandleStick";
import InteractiveCandleStickOnRight from "./InteractiveCandleStickOnRight";
import InteractiveOHLCChart from "./InteractiveOHLCChart";
import StockChartWithVolume from "./StockChartWithVolume";

function RenderStockCharts(props) {
  return (
    <>
      <h1>Render Stock Charts with Time Axis</h1>
      <InteractiveCandleStick />
      <InteractiveOHLCChart />
      <InteractiveCandleStickOnRight />
      <StockChartWithVolume />
    </>
  );
}

export default RenderStockCharts;
