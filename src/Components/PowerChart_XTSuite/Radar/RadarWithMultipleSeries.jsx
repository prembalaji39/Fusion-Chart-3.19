import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Temperature in New York: Low & High",
    subcaption: "For 2017",
    theme: "fusion",
    numbersuffix: "°F",
    plotfillalpha: "40",
  },
  categories: [
    {
      category: [
        {
          label: "Jan",
        },
        {
          label: "Feb",
        },
        {
          label: "Mar",
        },
        {
          label: "Apr",
        },
        {
          label: "May",
        },
        {
          label: "Jun",
        },
        {
          label: "Jul",
        },
        {
          label: "Aug",
        },
        {
          label: "Sept",
        },
        {
          label: "Oct",
        },
        {
          label: "Nov",
        },
        {
          label: "Dec",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Avg. High",
      plottooltext: "<b>$label</b> maximum temp is <b>$datavalue</b>",
      data: [
        {
          value: "39",
        },
        {
          value: "42",
        },
        {
          value: "50",
        },
        {
          value: "60",
        },
        {
          value: "71",
        },
        {
          value: "79",
        },
        {
          value: "85",
        },
        {
          value: "83",
        },
        {
          value: "76",
        },
        {
          value: "65",
        },
        {
          value: "54",
        },
        {
          value: "79",
        },
        {
          value: "79",
        },
      ],
    },
    {
      seriesname: "Avg. Low",
      plottooltext: "<b>$label</b> minimum temp is <b>$datavalue</b>",
      data: [
        {
          value: "26",
        },
        {
          value: "29",
        },
        {
          value: "35",
        },
        {
          value: "44",
        },
        {
          value: "55",
        },
        {
          value: "64",
        },
        {
          value: "70",
        },
        {
          value: "69",
        },
        {
          value: "61",
        },
        {
          value: "50",
        },
        {
          value: "41",
        },
        {
          value: "32",
        },
      ],
    },
  ],
};

function RadarWithMultipleSeries(props) {
  return (
    <>
      <h1>Radar With Multiple Series</h1>
      <ReactFusioncharts
        type="radar"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default RadarWithMultipleSeries;
