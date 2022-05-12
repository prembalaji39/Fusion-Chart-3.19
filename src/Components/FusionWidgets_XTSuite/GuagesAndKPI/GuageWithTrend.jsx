import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);
const dataSource = {
  chart: {
    caption: "Walmart's Customer Satisfaction Score",
    subcaption: "2017",
    lowerlimit: "0",
    upperlimit: "100",
    showvalue: "1",
    numbersuffix: "%",
    theme: "fusion",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "50",
        code: "#F2726F",
      },
      {
        minvalue: "50",
        maxvalue: "75",
        code: "#FFC533",
      },
      {
        minvalue: "75",
        maxvalue: "100",
        code: "#62B58F",
      },
    ],
  },
  dials: {
    dial: [
      {
        value: "71",
        tooltext: "<b>9%</b> lesser that target",
      },
    ],
  },
  trendpoints: {
    point: [
      {
        startvalue: "80",
        displayvalue: "Target",
        thickness: "2",
        color: "#E15A26",
        usemarker: "1",
        markerbordercolor: "#E15A26",
        markertooltext: "80%",
      },
    ],
  },
};
function GuageWithTrend(props) {
  return (
    <>
      <h1>Guage With Trend</h1>
      <ReactFusioncharts
        type="angulargauge"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default GuageWithTrend;
