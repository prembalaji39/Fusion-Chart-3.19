import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "RPM Monitor",
    lowerlimitdisplay: "Min",
    upperlimitdisplay: "Max",
    numbersuffix: " rpm",
    chartbottommargin: "35",
    theme: "fusion",
    showvalue: "0",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "5",
      },
      {
        minvalue: "5",
        maxvalue: "7.5",
      },
      {
        minvalue: "7.5",
        maxvalue: "10",
      },
    ],
  },
  value: "8",
  annotations: {
    showbelow: "1",
    groups: [
      {
        id: "indicator",
        items: [
          {
            id: "message",
            align: "CENTER",
            bold: "1",
            type: "text",
            text: "Full Throttle at 8 rpm",
            color: "#000000",
            x: "$chartCenterX",
            y: "$chartEndY-35",
          },
        ],
      },
    ],
  },
};

function HorizontalLed(props) {
  return (
    <>
      <h1>Horizontal Led</h1>
      <ReactFusioncharts
        type="hled"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default HorizontalLed;
