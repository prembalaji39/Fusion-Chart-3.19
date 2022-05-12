import React from "react";
import HighVolumeData from "./HighVolumeData";
import RenderMultiVariateCharts from "./MultiVariateTimeSeries";
import RenderSimpleTimeSeries from "./SimpleTimeSeries";
import RenderStandardCharts from "./StandardCharts";
import RenderStockCharts from "./StockCharts";

function FusionTime(props) {
  return (
    <>
      <h1>Fusion Time</h1>
      <RenderSimpleTimeSeries />
      <RenderMultiVariateCharts />
      <HighVolumeData />
      <RenderStandardCharts />
      <RenderStockCharts />
    </>
  );
}

export default FusionTime;
