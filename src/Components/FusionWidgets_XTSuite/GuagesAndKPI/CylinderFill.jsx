import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "LPG Level Indicator",
    lowerlimit: "0",
    upperlimit: "25",
    lowerlimitdisplay: "Empty",
    upperlimitdisplay: "Full",
    numbersuffix: " ltrs",
    cylfillcolor: "#5D62B5",
    plottooltext: "LPG Consumption: <b>20 ltrs</b>",
    cylfillhoveralpha: "85",
    theme: "fusion",
  },
  value: "20",
};

function CylinderFill(props) {
  return (
    <>
      <h1>Cylinder Fill</h1>
      <ReactFusioncharts
        type="cylinder"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default CylinderFill;
