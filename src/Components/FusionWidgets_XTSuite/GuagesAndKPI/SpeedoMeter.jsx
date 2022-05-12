import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    captionpadding: "0",
    origw: "320",
    origh: "300",
    gaugeouterradius: "115",
    gaugestartangle: "270",
    gaugeendangle: "-25",
    showvalue: "1",
    valuefontsize: "30",
    majortmnumber: "13",
    majortmthickness: "2",
    majortmheight: "13",
    minortmheight: "7",
    minortmthickness: "1",
    minortmnumber: "1",
    showgaugeborder: "0",
    theme: "fusion",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "110",
        code: "#999999",
      },
      {
        minvalue: "110",
        maxvalue: "280",
        code: "#F6F6F6",
      },
    ],
  },
  dials: {
    dial: [
      {
        value: "110",
        bgcolor: "#F20F2F",
        basewidth: "8",
      },
    ],
  },
  annotations: {
    groups: [
      {
        items: [
          {
            type: "text",
            id: "text",
            text: "mph",
            x: "$gaugeCenterX",
            y: "$gaugeCenterY + 40",
            fontsize: "20",
            color: "#555555",
          },
        ],
      },
    ],
  },
};

class SpeedoMeter extends React.Component {
  render() {
    return (
      <>
        <h1>Speedometer</h1>
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
}
export default SpeedoMeter;
