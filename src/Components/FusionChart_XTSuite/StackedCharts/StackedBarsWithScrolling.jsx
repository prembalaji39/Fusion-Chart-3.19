import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Video Games Sales - 2018",
    subcaption: "Across different markets (In Million USD)",
    numbersuffix: "M",
    plottooltext: "<b>$seriesName</b><hr>$label: <b>$dataValue</b>",
    numvisibleplot: "5",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "Wii Sports",
        },
        {
          label: "Super Mario Bros",
        },
        {
          label: "Mario Kart Wii",
        },
        {
          label: "Wii Sports Resort",
        },
        {
          label: "Pokemon Red/Blue",
        },
        {
          label: "Tetris",
        },
        {
          label: "New Super Mario Bros",
        },
        {
          label: "Wii Play",
        },
        {
          label: "New Super Mario Bros. Wii",
        },
        {
          label: "Duck Hunt",
        },
        {
          label: "Nintendogs",
        },
        {
          label: "Mario Kart DS",
        },
        {
          label: "Pokemon Gold/Silver",
        },
        {
          label: "Wii Fit",
        },
        {
          label: "Wii Fit Plus",
        },
        {
          label: "Kinect Adventures",
        },
        {
          label: "Grand Theft Auto V",
        },
        {
          label: "GTA: San Andreas",
        },
        {
          label: "Super Mario World",
        },
        {
          label: "Brain Age",
        },
        {
          label: "Pokemon Diamond/Pearl",
        },
        {
          label: "Super Mario Land",
        },
        {
          label: "Super Mario Bros. 3",
        },
        {
          label: "Grand Theft Auto V",
        },
        {
          label: "GTA: Vice City",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "North America",
      data: [
        {
          value: "41.49",
        },
        {
          value: "29.08",
        },
        {
          value: "15.85",
        },
        {
          value: "15.75",
        },
        {
          value: "11.27",
        },
        {
          value: "23.2",
        },
        {
          value: "11.38",
        },
        {
          value: "14.03",
        },
        {
          value: "14.59",
        },
        {
          value: "26.93",
        },
        {
          value: "9.07",
        },
        {
          value: "9.81",
        },
        {
          value: "9",
        },
        {
          value: "8.94",
        },
        {
          value: "9.09",
        },
        {
          value: "14.97",
        },
        {
          value: "7.01",
        },
        {
          value: "9.43",
        },
        {
          value: "12.78",
        },
        {
          value: "4.75",
        },
        {
          value: "6.42",
        },
        {
          value: "10.83",
        },
        {
          value: "9.54",
        },
        {
          value: "9.63",
        },
        {
          value: "8.41",
        },
      ],
    },
    {
      seriesname: "Europe ",
      data: [
        {
          value: "29.02",
        },
        {
          value: "3.58",
        },
        {
          value: "12.88",
        },
        {
          value: "11.01",
        },
        {
          value: "8.89",
        },
        {
          value: "2.26",
        },
        {
          value: "9.23",
        },
        {
          value: "9.2",
        },
        {
          value: "7.06",
        },
        {
          value: "0.63",
        },
        {
          value: "11",
        },
        {
          value: "7.57",
        },
        {
          value: "6.18",
        },
        {
          value: "8.03",
        },
        {
          value: "8.59",
        },
        {
          value: "4.94",
        },
        {
          value: "9.27",
        },
        {
          value: "0.4",
        },
        {
          value: "3.75",
        },
        {
          value: "9.26",
        },
        {
          value: "4.52",
        },
        {
          value: "2.71",
        },
        {
          value: "3.44",
        },
        {
          value: "5.31",
        },
        {
          value: "5.49",
        },
      ],
    },
    {
      seriesname: "Japan",
      data: [
        {
          value: "3.77",
        },
        {
          value: "6.81",
        },
        {
          value: "3.79",
        },
        {
          value: "3.28",
        },
        {
          value: "10.22",
        },
        {
          value: "4.22",
        },
        {
          value: "6.5",
        },
        {
          value: "2.93",
        },
        {
          value: "4.7",
        },
        {
          value: "0.28",
        },
        {
          value: "1.93",
        },
        {
          value: "4.13",
        },
        {
          value: "7.2",
        },
        {
          value: "3.6",
        },
        {
          value: "2.53",
        },
        {
          value: "0.24",
        },
        {
          value: "0.97",
        },
        {
          value: "0.41",
        },
        {
          value: "3.54",
        },
        {
          value: "4.16",
        },
        {
          value: "6.04",
        },
        {
          value: "4.18",
        },
        {
          value: "3.84",
        },
        {
          value: "0.06",
        },
        {
          value: "0.47",
        },
      ],
    },
    {
      seriesname: " Rest of the world",
      data: [
        {
          value: "8.46",
        },
        {
          value: "0.77",
        },
        {
          value: "3.31",
        },
        {
          value: "2.96",
        },
        {
          value: "1",
        },
        {
          value: "0.58",
        },
        {
          value: "2.9",
        },
        {
          value: "2.85",
        },
        {
          value: "2.26",
        },
        {
          value: "0.47",
        },
        {
          value: "2.75",
        },
        {
          value: "1.92",
        },
        {
          value: "0.71",
        },
        {
          value: "2.15",
        },
        {
          value: "1.79",
        },
        {
          value: "1.67",
        },
        {
          value: "4.14",
        },
        {
          value: "10.57",
        },
        {
          value: "0.55",
        },
        {
          value: "2.05",
        },
        {
          value: "1.37",
        },
        {
          value: "0.42",
        },
        {
          value: "0.46",
        },
        {
          value: "1.38",
        },
        {
          value: "1.78",
        },
      ],
    },
  ],
};

class StackedBarsWithScrolling extends React.Component {
  render() {
    return (
      <>
        <h1>Stacked Bars With Scrolling</h1>
        <ReactFusioncharts
          type="scrollstackedbar2d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default StackedBarsWithScrolling;
