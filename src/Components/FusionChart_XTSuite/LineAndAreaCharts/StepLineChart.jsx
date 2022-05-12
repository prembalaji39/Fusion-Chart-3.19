import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Postal Rates for First Class Stamp",
    subcaption: "United States",
    showhovereffect: "1",
    drawverticaljoints: "1",
    useforwardsteps: "0",
    numberprefix: "$",
    canvaspadding: "5",
    plottooltext: "Stamp rate in $label was <b>$datavalue</b>",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "1975",
        },
        {
          label: "1980",
        },
        {
          label: "1985",
        },
        {
          label: "1990",
        },
        {
          label: "1995",
        },
        {
          label: "2000",
        },
        {
          label: "2005",
        },
        {
          label: "2010",
        },
        {
          label: "2015",
        },
      ],
    },
  ],
  dataset: [
    {
      linethickness: "3",
      data: [
        {
          value: ".10",
        },
        {
          value: ".12",
        },
        {
          value: ".18",
        },
        {
          value: ".20",
        },
        {
          value: ".28",
        },
        {
          value: ".36",
        },
        {
          value: ".42",
        },
        {
          value: ".46",
        },
        {
          value: ".49",
        },
      ],
    },
  ],
};

class StepLineChart extends React.Component {
  render() {
    return (
      <>
        <h1>StepLine Chart</h1>
        <ReactFusioncharts
          type="msstepline"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default StepLineChart;
