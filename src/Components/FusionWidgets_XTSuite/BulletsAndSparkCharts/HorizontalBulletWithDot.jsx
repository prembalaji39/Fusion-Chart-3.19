import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Website downloads for 2017",
    subcaption: "Actual vs Target",
    numbersuffix: "K",
    theme: "fusion",
    plottooltext:
      "Downloaded $datavalue times against a target of $targetDataValue",
    plotasdot: "1",
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
  value: "90",
  target: "95",
};

function HorizontalBulletWithDot(props) {
  return (
    <>
      <h1>Horizontal Bullet Chart With Dot</h1>
      <ReactFusioncharts
        type="hbullet"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default HorizontalBulletWithDot;
