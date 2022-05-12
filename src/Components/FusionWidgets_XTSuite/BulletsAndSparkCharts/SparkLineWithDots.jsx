import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Tesla Stock Price",
    subcaption: "May 2018",
    numberprefix: "$",
    charttopmargin: "10",
    theme: "fusion",
    showclosevalue: "1",
    showopenvalue: "1",
    setadaptiveymin: "1",
    drawanchors: "1",
    linealpha: "0",
    anchorsides: "4",
    anchorradius: "4",
    anchorcolor: "#ee8f49",
    showopenanchor: "1",
    showcloseanchor: "1",
    highcolor: "#ee8f49",
    lowcolor: "#ee8f49",
  },
  dataset: [
    {
      data: [
        {
          tooltext: "2-May: <b>$dataValue</b>",
          value: 246.3,
        },
        {
          tooltext: "3-May: <b>$dataValue</b>",
          value: 240.93,
        },
        {
          tooltext: "4-May: <b>$dataValue</b>",
          value: 240.41,
        },
        {
          tooltext: "7-May: <b>$dataValue</b>",
          value: 245.7,
        },
        {
          tooltext: "8-May: <b>$dataValue</b>",
          value: 252.91,
        },
        {
          tooltext: "9-May: <b>$dataValue</b>",
          value: 253.4,
        },
        {
          tooltext: "11-May: <b>$dataValue</b>",
          value: 252.49,
        },
        {
          tooltext: "14-May: <b>$dataValue</b>",
          value: 250.91,
        },
        {
          tooltext: "15-May: <b>$dataValue</b>",
          value: 249.11,
        },
        {
          tooltext: "16-May: <b>$dataValue</b>",
          value: 240.15,
        },
        {
          tooltext: "17-May: <b>$dataValue</b>",
          value: 244.76,
        },
        {
          tooltext: "18-May: <b>$dataValue</b>",
          value: 236.69,
        },
        {
          tooltext: "22-May: <b>$dataValue</b>",
          value: 234.55,
        },
        {
          tooltext: "23-May: <b>$dataValue</b>",
          value: 235.45,
        },
        {
          tooltext: "24-May: <b>$dataValue</b>",
          value: 238.02,
        },
        {
          tooltext: "25-May: <b>$dataValue</b>",
          value: 238.9,
        },
        {
          tooltext: "28-May: <b>$dataValue</b>",
          value: 239.9,
        },
        {
          tooltext: "29-May: <b>$dataValue</b>",
          value: 245.7,
        },
        {
          tooltext: "30-May: <b>$dataValue</b>",
          value: 246.3,
        },
      ],
    },
  ],
};

function SparkLineWithDots(props) {
  return (
    <>
      <h1>Spark Line With Dots</h1>
      <ReactFusioncharts
        type="sparkline"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default SparkLineWithDots;
