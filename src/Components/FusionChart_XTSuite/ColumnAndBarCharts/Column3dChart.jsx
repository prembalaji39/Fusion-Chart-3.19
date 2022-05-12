import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Countries with Highest Deforestation Rate",
    subcaption: "For the year 2017",
    yaxisname: "Deforested Area{br}(in Hectares)",
    decimals: "1",
    theme: "fusion",
  },
  data: [
    {
      label: "Brazil",
      value: "1466000",
    },
    {
      label: "Indonesia",
      value: "1147800",
    },
    {
      label: "Russian Federation",
      value: "532200",
    },
    {
      label: "Mexico",
      value: "395000",
    },
    {
      label: "Papua New Guinea",
      value: "250200",
    },
    {
      label: "Peru",
      value: "224600",
    },
    {
      label: "U.S.A",
      value: "215200",
    },
    {
      label: "Bolivia",
      value: "135200",
    },
    {
      label: "Sudan",
      value: "117807",
    },
    {
      label: "Nigeria",
      value: "82000",
    },
  ],
};

class Column3dChart extends React.Component {
  render() {
    return (
      <>
        <h1>Simple Column 3D Chart</h1>
        <ReactFusioncharts
          type="column3d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default Column3dChart;
