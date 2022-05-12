import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Expense Analysis",
    subcaption: "ACME Inc.",
    xaxisname: "Region",
    yaxisname: "Amount (In USD)",
    numberprefix: "$",
    exportenabled: "1",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "East",
        },
        {
          label: "West",
        },
        {
          label: "South",
        },
        {
          label: "North",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Actual Expenses",
      data: [
        {
          value: "1441290",
        },
        {
          value: "855912",
        },
        {
          value: "911404",
        },
        {
          value: "648136",
        },
      ],
    },
    {
      seriesname: "Budgeted Expenses",
      renderas: "line",
      data: [
        {
          value: "1297430",
        },
        {
          value: "776485",
        },
        {
          value: "685352",
        },
        {
          value: "726791",
        },
      ],
    },
    {
      seriesname: "Unknown liabilities",
      renderas: "area",
      showanchors: "0",
      data: [
        {
          value: "143860",
        },
        {
          value: "79427",
        },
        {
          value: "226052",
        },
        {
          value: "78655",
        },
      ],
    },
  ],
};

class SameAxisColumnLineArea extends React.Component {
  render() {
    return (
      <>
        <h1>Same Axis -Column, Line, Area, Chart</h1>
        <ReactFusioncharts
          type="mscombi2d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default SameAxisColumnLineArea;
