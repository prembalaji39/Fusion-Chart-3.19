import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Euro to INR Conversion",
    subcaption: "(2007-2017)",
    charttopmargin: "10",
    numberprefix: "₹",
    theme: "fusion",
  },
  dataset: [
    {
      data: [
        {
          value: "56.42",
          tooltext: "2007: <b>$dataValue</b>",
        },
        {
          value: "63.61",
          tooltext: "2008: <b>$dataValue</b>",
        },
        {
          value: "67.36",
          tooltext: "2009: <b>$dataValue</b>",
        },
        {
          value: "60.59",
          tooltext: "2010: <b>$dataValue</b>",
        },
        {
          value: "64.89",
          tooltext: "2011: <b>$dataValue</b>",
        },
        {
          value: "68.60",
          tooltext: "2012: <b>$dataValue</b>",
        },
        {
          value: "77.93",
          tooltext: "2013: <b>$dataValue</b>",
        },
        {
          value: "81.04",
          tooltext: "2014: <b>$dataValue</b>",
        },
        {
          value: "71.20",
          tooltext: "2015: <b>$dataValue</b>",
        },
        {
          value: "74.37",
          tooltext: "2016: <b>$dataValue</b>",
        },
        {
          value: "73.53",
          tooltext: "2017: <b>$dataValue</b>",
        },
      ],
    },
  ],
};
function SimpleSparkColumn(props) {
  return (
    <>
      <h1>Simple Spark Column</h1>
      <ReactFusioncharts
        type="sparkcolumn"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default SimpleSparkColumn;
