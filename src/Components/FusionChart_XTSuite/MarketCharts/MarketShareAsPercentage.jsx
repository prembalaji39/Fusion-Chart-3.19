import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Processing of Municipal Waste in Select Countries",
    subcaption: "For the year 2015",
    numbersuffix: "%",
    showsum: "0",
    usepercentdistribution: "1",
    showxaxispercentvalues: "0",
    theme: "fusion",
    drawcrossline: "0",
    showvalues: "1",
  },
  categories: [
    {
      category: [
        {
          label: "Germany",
          widthpercent: "20",
        },
        {
          label: "UK",
          widthpercent: "10",
        },
        {
          label: "Australia",
          widthpercent: "5",
        },
        {
          label: "France",
          widthpercent: "10",
        },
        {
          label: "USA",
          widthpercent: "35",
        },
        {
          label: "Japan",
          widthpercent: "10",
        },
        {
          label: "Mexico",
          widthpercent: "10",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Recycling & composting",
      color: "#149868",
      data: [
        {
          value: "65",
        },
        {
          value: "43",
        },
        {
          value: "41",
        },
        {
          value: "38",
        },
        {
          value: "35",
        },
        {
          value: "19",
        },
        {
          value: "4",
        },
      ],
    },
    {
      seriesname: "Inceneration with energy recovery",
      color: "#E7BC4F",
      data: [
        {
          value: "22",
        },
        {
          value: "23",
        },
        {
          value: "6",
        },
        {
          value: "33",
        },
        {
          value: "9",
        },
        {
          value: "71",
        },
        {
          value: "6",
        },
      ],
    },
    {
      seriesname: "Inceneration without energy recovery",
      color: "#CE9B1C",
      showvalues: "0",
      data: [
        {
          value: "13",
        },
        {
          value: "0",
        },
        {
          value: "0",
        },
        {
          value: "0",
        },
        {
          value: "6",
        },
        {
          value: "0",
        },
      ],
    },
    {
      seriesname: "Landfill",
      color: "#D9D9D9",
      data: [
        {
          value: "0",
          showvalue: "0",
        },
        {
          value: "34",
        },
        {
          value: "53",
        },
        {
          value: "29",
        },
        {
          value: "50",
        },
        {
          value: "10",
        },
        {
          value: "90",
        },
      ],
    },
  ],
};

class MarketShareAsPercentage extends React.Component {
  render() {
    return (
      <>
        <h1>Market Share As Percentage</h1>
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

export default MarketShareAsPercentage;
