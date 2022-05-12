import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Browser Install Statistics",
    yaxisname: "Global Installs",
    stack100percent: "0",
    theme: "fusion",
    yaxismaxvalue: "210000000",
    decimals: "1",
    drawcrossline: "0",
  },
  categories: [
    {
      category: [
        {
          label: "Chrome",
        },
        {
          label: "Mozilla",
        },
        {
          label: "IE",
        },
        {
          label: "Safari",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "USA",
      data: [
        {
          value: 61600000,
        },
        {
          value: 39800000,
        },
        {
          value: 16000000,
        },
        {
          value: 8000000,
        },
      ],
    },
    {
      seriesname: "Europe",
      data: [
        {
          value: 63000000,
        },
        {
          value: 43800000,
        },
        {
          value: 17000000,
        },
        {
          value: 8380000,
        },
      ],
    },
    {
      seriesname: "Rest of the world",
      data: [
        {
          value: 62000000,
        },
        {
          value: 48593000,
        },
        {
          value: 18000000,
        },
        {
          value: 5576900,
        },
      ],
    },
  ],
};

class MarketShareActuals extends React.Component {
  render() {
    return (
      <>
        <h1>Market Share Acual Charts</h1>
        <ReactFusioncharts
          type="marimekko"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default MarketShareActuals;
