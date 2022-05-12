import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Common Car Damages",
    subcaption: "PitStop Service Station",
    xaxisname: "Reported Cause",
    yaxisname: "No. of Occurences",
    theme: "fusion",
    plottooltext:
      "$label accounted for <b>$datavalue</b> cars which came for repairs",
  },
  data: [
    {
      label: "Burned out bulb",
      value: "41",
    },
    {
      label: "Discharged Battery",
      value: "20",
    },
    {
      label: "Blown fuse",
      value: "14",
    },
    {
      label: "Worn brake pads",
      value: "11",
    },
    {
      label: "Flat",
      value: "9",
    },
    {
      label: "Others",
      value: "5",
    },
  ],
};

class Pareto3DChart extends React.Component {
  render() {
    return (
      <>
        <h1>Pareto 3D Chart</h1>
        <ReactFusioncharts
          type="pareto3d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default Pareto3DChart;
