import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Customer Satisfaction Score",
    subcaption: "Current week - Garden Groove Harbour",
    theme: "fusion",
    showvalue: "0",
    pointerbghovercolor: "#ffffff",
    pointerbghoveralpha: "80",
    pointerhoverradius: "12",
    showborderonhover: "1",
    pointerborderhovercolor: "#333333",
    pointerborderhoverthickness: "2",
    showtickmarks: "0",
    numbersuffix: "%",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "35",
        label: "Low",
        code: "#e44a00",
      },
      {
        minvalue: "35",
        maxvalue: "70",
        label: "Moderate",
        code: "#f8bd19",
      },
      {
        minvalue: "70",
        maxvalue: "100",
        label: "High",
        code: "#6baa01",
      },
    ],
  },
  pointers: {
    pointer: [
      {
        value: "72.5",
        tooltext: "Higher degree of satisfaction score of $datavalue  ",
      },
    ],
  },
};

function LinearScaleWithColorCategories(props) {
  return (
    <>
      <h1>Linear Scale With Color Categories</h1>
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

export default LinearScaleWithColorCategories;
