import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    theme: "fusion",
    caption: "The Global Wealth Pyramid",
    subcaption: "Credit Suisse 2017",
    showvalues: "1",
    numbersuffix: " trn",
    numberprefix: "$",
    plottooltext:
      "<b>$label</b> of world population owns <b>$dataValue</b> of global wealth",
  },
  data: [
    {
      label: "Top 32M",
      value: "128.7",
    },
    {
      label: "Next 391M",
      value: "111.4",
    },
    {
      label: "Next 1054M",
      value: "32.5",
    },
    {
      label: "Last 3474M",
      value: "7.6",
    },
  ],
};

function SimplePyramid(props) {
  return (
    <>
      <h1>Simple Pyramid Chart</h1>
      <ReactFusioncharts
        type="pyramid"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default SimplePyramid;
