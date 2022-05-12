import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    theme: "fusion",
    caption: "Most Feared Things in LA",
    subcaption: "Source: Psych Survey",
    showvalues: "1",
    numbersuffix: "%",
    plottooltext: "<b>$dataValue</b> of people have a fear for <b>$label</b>",
  },
  data: [
    {
      label: "Lonliness",
      value: "2",
    },
    {
      label: "Snakes",
      value: "2",
    },
    {
      label: "Losing People I Love",
      value: "3",
    },
    {
      label: "Clowns",
      value: "5",
    },
    {
      label: "People",
      value: "6",
    },
    {
      label: "Heights",
      value: "11",
    },
    {
      label: "Spiders and Other Bugs",
      value: "12",
    },
    {
      label: "Death",
      value: "17",
    },
    {
      label: "Failure",
      value: "18",
    },
    {
      label: "Others",
      value: "24",
    },
  ],
};

function SimplePyramidWithPercentage(props) {
  return (
    <>
      <h1>Pyramid With Percentage</h1>
      <ReactFusioncharts
        type="pyramid"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default SimplePyramidWithPercentage;
