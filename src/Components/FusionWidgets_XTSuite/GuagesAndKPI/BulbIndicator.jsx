import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "RAM Overload Indicator",
    upperlimit: "0",
    lowerlimit: "25",
    usecolornameasvalue: "1",
    placevaluesinside: "1",
    valuefontsize: "20",
    plottooltext: "$value Apps Running",
    theme: "fusion",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "10",
        label: "Under",
        code: "#62B58F",
      },
      {
        minvalue: "10",
        maxvalue: "20",
        label: "Moderate",
        code: "#FFC533",
      },
      {
        minvalue: "20",
        maxvalue: "25",
        label: "High",
        code: "#F2726F",
      },
    ],
  },
  value: "9",
};

function BulbIndicator(props) {
  return (
    <>
      <h1>Bulb Indicator</h1>
      <ReactFusioncharts
        type="bulb"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default BulbIndicator;
