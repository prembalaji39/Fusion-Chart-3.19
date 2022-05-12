import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Top 5 High-Income Careers",
    yaxisname: "Annual Income",
    showvalues: "1",
    numberprefix: "$",
    theme: "fusion",
  },
  data: [
    {
      label: "Financial Advisor",
      value: "101000",
    },
    {
      label: "Physician Assistant",
      value: "92000",
    },
    {
      label: "IT Analysts",
      value: "82600",
    },
    {
      label: "College Professor",
      value: "70400",
    },
    {
      label: "Dentist",
      value: "68152",
    },
  ],
};

class SimpleBar3dChart extends React.Component {
  render() {
    return (
      <>
        <h1>Simple Bar 3d Chart</h1>
        <ReactFusioncharts
          type="bar3d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default SimpleBar3dChart;
