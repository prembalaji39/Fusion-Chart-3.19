import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Split of visitors by Channels & Gender",
    placevaluesinside: "1",
    showvalues: "0",
    plottooltext: "<b>$dataValue</b>  $seriesName visitors",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "Organic",
        },
        {
          label: "Offline Stores",
        },
        {
          label: "Email Campaigns",
        },
        {
          label: "Social Events",
        },
        {
          label: "Paid Channels",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Male",
      data: [
        {
          value: "17000",
        },
        {
          value: "19500",
        },
        {
          value: "12500",
        },
        {
          value: "14500",
        },
        {
          value: "17500",
        },
      ],
    },
    {
      seriesname: "Female",
      data: [
        {
          value: "25400",
        },
        {
          value: "29800",
        },
        {
          value: "21800",
        },
        {
          value: "19500",
        },
        {
          value: "21200",
        },
      ],
    },
  ],
};

class StackedBar extends React.Component {
  render() {
    return (
      <>
        <h1>Stacked Bar Chard 2D</h1>
        <ReactFusioncharts
          type="stackedbar2d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default StackedBar;
