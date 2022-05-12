import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Customer Satisfaction Score",
    theme: "fusion",
    ticksonright: "1",
    plottooltext: "Score: <b>$datavalue</b>",
    targettooltext: "Target: $targetValue",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "2",
        code: "#F2726F",
      },
      {
        minvalue: "2",
        maxvalue: "4",
        code: "#FFC533",
      },
      {
        minvalue: "4",
        maxvalue: "5",
        code: "#62B58F",
      },
    ],
  },
  value: "3.5",
  target: "4.5",
};
function VerticalBulletGraph(props) {
  return (
    <>
      <h1>Vertical Bullet Graph</h1>
      <ReactFusioncharts
        type="vbullet"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default VerticalBulletGraph;
