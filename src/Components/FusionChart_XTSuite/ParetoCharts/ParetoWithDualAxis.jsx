import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: " Top Hardware Defects Frequency",
    subcaption: "Last year - ACME Computers",
    theme: "fusion",
    yaxisname: "# reported instances",
    syaxisname: "% of total instances",
    decimals: "1",
    drawcrossline: "1",
  },
  data: [
    {
      label: "Hard-Disk",
      value: "40",
    },
    {
      label: "PCB",
      value: "22",
    },
    {
      label: "Printer",
      value: "12",
    },
    {
      label: "CDROM",
      value: "10",
    },
    {
      label: "Keyboard",
      value: "6",
    },
  ],
};

class ParetoWithDualAxis extends React.Component {
  render() {
    return (
      <>
        <h1>Pareto Chart Dual Axis</h1>
        <ReactFusioncharts
          type="pareto2d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default ParetoWithDualAxis;
