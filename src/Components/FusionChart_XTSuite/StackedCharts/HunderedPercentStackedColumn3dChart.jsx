import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Total Sales by Products",
    subcaption: "ACME Inc.",
    numberprefix: "$",
    numbersuffix: "M",
    showvalues: "0",
    showsum: "1",
    legendbgalpha: "0",
    plottooltext:
      "Type: $label{br}<b>Location: $seriesName</b>{br}Sales: $dataValue</div>",
    stack100percent: "1",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "Hardware"
        },
        {
          label: "Software"
        },
        {
          label: "Services"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "West",
      data: [
        {
          value: "4.5"
        },
        {
          value: "2.8"
        },
        {
          value: "5"
        }
      ]
    },
    {
      seriesname: "Central",
      data: [
        {
          value: "6"
        },
        {
          value: "3"
        },
        {
          value: "1"
        }
      ]
    },
    {
      seriesname: "East",
      data: [
        {
          value: "2.5"
        },
        {
          value: "4.4"
        },
        {
          value: "2"
        }
      ]
    }
  ]
};

class HunderedPercentStackedColumn3dChart extends React.Component {
  render() {
    return (
      <>
      <h1>100% Stacked Column Chart</h1>
      <ReactFusioncharts
        type="stackedcolumn3d"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
      </>
    );
  }
}

export default HunderedPercentStackedColumn3dChart
