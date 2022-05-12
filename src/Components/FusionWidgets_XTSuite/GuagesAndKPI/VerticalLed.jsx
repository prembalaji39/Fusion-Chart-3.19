import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "LA New Years Eve",
    subcaption: "(Decibel Meter)",
    upperlimit: "200",
    numbersuffix: " db",
    showvalue: "0",
    chartbottommargin: "50",
    ledgap: "1",
    theme: "fusion",
  },
  colorrange: {
    color: [
      {
        minvalue: "100",
        maxvalue: "150",
        code: "#80dfff",
      },
      {
        minvalue: "150",
        maxvalue: "180",
        code: "#ff944d",
      },
      {
        minvalue: "180",
        maxvalue: "200",
        code: "#ff3300",
      },
    ],
  },
  value: "125",
};

function VerticalLed(props) {
  return (
    <>
      <h1>Vertical Led</h1>
      <ReactFusioncharts
        type="vled"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default VerticalLed;
