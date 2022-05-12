import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Average Monthly Temperature in Texas",
    yaxisname: "Average Monthly Temperature",
    anchorradius: "5",
    plottooltext: "Average temperature in $label is <b>$dataValue</b>",
    showhovereffect: "1",
    showvalues: "0",
    numbersuffix: "°C",
    theme: "fusion",
    anchorbgcolor: "#72D7B2",
    palettecolors: "#72D7B2",
  },
  data: [
    {
      label: "Jan",
      value: "1",
    },
    {
      label: "Feb",
      value: "5",
    },
    {
      label: "Mar",
      value: "10",
    },
    {
      label: "Apr",
      value: "12",
    },
    {
      label: "May",
      value: "14",
    },
    {
      label: "Jun",
      value: "16",
    },
    {
      label: "Jul",
      value: "20",
    },
    {
      label: "Aug",
      value: "22",
    },
    {
      label: "Sep",
      value: "20",
    },
    {
      label: "Oct",
      value: "16",
    },
    {
      label: "Nov",
      value: "7",
    },
    {
      label: "Dec",
      value: "2",
    },
  ],
};

class SimpleSplineChart extends React.Component {
  render() {
    return (
        <>
        <h1>Simple Spline Chart</h1>
      <ReactFusioncharts
        type="spline"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
      </>
    );
  }
}

export default SimpleSplineChart;
