import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Organic visits from Search Engines",
    showvalues: "0",
    formatnumberscale: "0",
    showpercentvalues: "1",
    showsum: "0",
    plottooltext:
      "<b>$dataValue</b> visits from $seriesName in $label {br}<b>$percentValue</b> of total visits in the month",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "January",
        },
        {
          label: "February",
        },
        {
          label: "March",
        },
        {
          label: "April",
        },
        {
          label: "May",
        },
        {
          label: "June",
        },
        {
          label: "July",
        },
        {
          label: "August",
        },
        {
          label: "September",
        },
        {
          label: "October",
        },
        {
          label: "November",
        },
        {
          label: "December",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Google",
      data: [
        {
          value: "5040",
        },
        {
          value: "4794",
        },
        {
          value: "5026",
        },
        {
          value: "5341",
        },
        {
          value: "4800",
        },
        {
          value: "4507",
        },
        {
          value: "5701",
        },
        {
          value: "4671",
        },
        {
          value: "4980",
        },
        {
          value: "4041",
        },
        {
          value: "3813",
        },
        {
          value: "3691",
        },
      ],
    },
    {
      seriesname: "Yahoo",
      data: [
        {
          value: "1200",
        },
        {
          value: "1124",
        },
        {
          value: "1006",
        },
        {
          value: "921",
        },
        {
          value: "1500",
        },
        {
          value: "1007",
        },
        {
          value: "921",
        },
        {
          value: "971",
        },
        {
          value: "1080",
        },
        {
          value: "1041",
        },
        {
          value: "1113",
        },
        {
          value: "1091",
        },
      ],
    },
    {
      seriesname: "Others",
      data: [
        {
          value: "400",
        },
        {
          value: "524",
        },
        {
          value: "606",
        },
        {
          value: "421",
        },
        {
          value: "500",
        },
        {
          value: "707",
        },
        {
          value: "621",
        },
        {
          value: "471",
        },
        {
          value: "680",
        },
        {
          value: "441",
        },
        {
          value: "713",
        },
        {
          value: "491",
        },
      ],
    },
  ],
};

class StackedBar3D extends React.Component {
  render() {
    return (
        <>
        <h1>Stacked Bar 3D</h1>
      <ReactFusioncharts
        type="stackedbar3d"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
      </>
    );
  }
}

export default StackedBar3D;
