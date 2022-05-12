import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "CompQ: Net Losses By Year",
    subcaption: "(Inflation Adjusted)",
    theme: "fusion",
    numberprefix: "$",
    showvalues: "1",
    showsumatend: "0",
    numberscalevalue: "100",
    numbersuffix: "M",
    positivecolor: "",
    plottooltext:
      "<b>For $label</b><br> Net loss : <b>$dataValue</b> <br> Total cumulative loss: <b> $cumulativeDataValue</b>",
  },
  data: [
    {
      label: "2006",
      value: "37",
    },
    {
      label: "2007",
      value: "93",
    },
    {
      label: "2008",
      value: "95",
    },
    {
      label: "2009",
      value: "63",
    },
    {
      label: "2010",
      value: "174",
    },
    {
      label: "2011",
      value: "279",
    },
    {
      label: "2012",
      value: "426",
    },
    {
      label: "2013",
      value: "78",
    },
    {
      label: "2014",
      value: "307",
    },
    {
      label: "2015",
      value: "929",
    },
    {
      label: "2016",
      value: "715",
    },
    {
      label: "2017",
      value: "632",
    },
  ],
};

function WaterfallWithoutCumulativeSum(props) {
  return (
    <>
      <h1>WaterFall Without Cumulative Sum</h1>
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

export default WaterfallWithoutCumulativeSum;
