import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "TickTock - Profit Analysis",
    subcaption1: "Last month",
    numberprefix: "$",
    sumlabel: "Total {br} Profit",
    showvalues: "1",
    theme: "fusion",
    plottooltext: "$label is <b>$datavalue</b>",
  },
  data: [
    {
      label: "Online sales",
      value: "420000",
    },
    {
      label: "Store Sales",
      value: "710000",
    },
    {
      label: "Total Sales",
      issum: "1",
    },
    {
      label: "Fixed Costs",
      value: "-250000",
    },
    {
      label: "Variable Costs",
      value: "-156000",
    },
    {
      label: "COGS",
      value: "-310000",
    },
    {
      label: "Ads Costs",
      value: "-86000",
    },
    {
      label: "Total Costs",
      issum: "1",
      cumulative: "0",
    },
  ],
};

function SimpleWaterfall(props) {
  return (
    <>
      <h1>Simple Waterfall Chart</h1>
      <ReactFusioncharts
        type="waterfall2d"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default SimpleWaterfall;
