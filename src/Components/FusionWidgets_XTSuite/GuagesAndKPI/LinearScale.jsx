import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);
const dataSource = {
  chart: {
    caption: "Electromagnetic Water Flow Meter",
    subcaption: "Pressure Reading",
    numbersuffix: "psi",
    gaugefillmix: "{dark-20},{light+70},{dark-10}",
    theme: "fusion",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "5",
        label: "Below{br}Average",
        code: "#F2726F",
      },
      {
        minvalue: "5",
        maxvalue: "7.5",
        label: "Average",
        code: "#FFC533",
      },
      {
        minvalue: "7.5",
        maxvalue: "10",
        label: "High",
        code: "#62B58F",
      },
    ],
  },
  pointers: {
    pointer: [
      {
        value: "5",
      },
    ],
  },
};

function LinearScale(props) {
  return (
    <>
      <h1>Linear Scale With Guage</h1>
      <ReactFusioncharts
        type="hlineargauge"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default LinearScale;
