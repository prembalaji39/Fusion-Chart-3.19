import React from "react";
import MarketShareActuals from "./MarketShareActuals";
import MarketShareAsPercentage from "./MarketShareAsPercentage";

function RenderMarketCharts(props) {
  return (
    <>
      <h1>Market Charts - FusionChart_XTSuite</h1>
      <MarketShareActuals />
      <MarketShareAsPercentage />
    </>
  );
}

export default RenderMarketCharts;
