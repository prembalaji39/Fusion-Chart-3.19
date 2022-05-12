import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Stats for Germany (FIFA)",
    subcaption: "(1990-2014)",
    charttopmargin: "10",
    theme: "fusion",
  },
  dataset: [
    {
      data: [
        {
          value: "W",
        },
        {
          value: "W",
        },
        {
          value: "D",
        },
        {
          value: "W",
        },
        {
          value: "W",
        },
        {
          value: "W",
        },
        {
          value: "D",
        },
        {
          value: "D",
        },
        {
          value: "W",
        },
        {
          value: "W",
        },
        {
          value: "W",
        },
        {
          value: "D",
        },
        {
          value: "W",
        },
        {
          value: "L",
        },
        {
          value: "D",
        },
        {
          value: "W",
        },
        {
          value: "W",
        },
        {
          value: "W",
        },
        {
          value: "W",
        },
        {
          value: "D",
        },
        {
          value: "D",
        },
        {
          value: "L",
        },
        {
          value: "D",
        },
        {
          value: "L",
        },
        {
          value: "W",
        },
        {
          value: "L",
        },
        {
          value: "w",
        },
        {
          value: "D",
        },
        {
          value: "W",
        },
        {
          value: "D",
        },
        {
          value: "W",
        },
        {
          value: "W",
        },
        {
          value: "L",
        },
        {
          value: "W",
        },
        {
          value: "D",
        },
        {
          value: "W",
        },
      ],
    },
  ],
};
function WinOrLossChart(props) {
  return (
    <>
      <h1>Win Or Loss Chart</h1>
      <ReactFusioncharts
        type="sparkwinloss"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default WinOrLossChart;
