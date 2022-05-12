import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "S&P 500 Index Daily Price Chart",
    subcaption: "Last 30 days",
    numberprefix: "$",
    labeldisplay: "Rotate",
    theme: "fusion",
    plottooltext: "$label: <b>$dataValue</b>",
  },
  data: [
    {
      label: "Day 1",
      value: "306",
    },
    {
      label: "Day 2",
      value: "269",
    },
    {
      label: "Day 3",
      value: "401",
    },
    {
      label: "Day 4",
      value: "301",
    },
    {
      label: "Day 5",
      value: "209",
    },
    {
      label: "Day 6",
      value: "240",
    },
    {
      label: "Day 7",
      value: "160",
    },
    {
      label: "Day 8",
      value: "280",
    },
    {
      label: "Day 9",
      value: "190",
    },
    {
      label: "Day 10",
      value: "353",
    },
    {
      label: "Day 11",
      value: "128",
    },
    {
      label: "Day 12",
      value: "128",
    },
    {
      label: "Day 13",
      value: "350",
    },
    {
      label: "Day 14",
      value: "92",
    },
    {
      label: "Day 15",
      value: "92",
    },
    {
      label: "Day 16",
      value: "326",
    },
    {
      label: "Day 17",
      value: "326",
    },
    {
      label: "Day 18",
      value: "186",
    },
    {
      label: "Day 19",
      value: "186",
    },
    {
      label: "Day 20",
      value: "212",
    },
    {
      label: "Day 21",
      value: "212",
    },
    {
      label: "Day 22",
      value: "191",
    },
    {
      label: "Day 23",
      value: "191",
    },
    {
      label: "Day 24",
      value: "220",
    },
    {
      label: "Day 25",
      value: "220",
    },
    {
      label: "Day 26",
      value: "173",
    },
    {
      label: "Day 27",
      value: "380",
    },
    {
      label: "Day 28",
      value: "380",
    },
    {
      label: "Day 29",
      value: "65",
    },
    {
      label: "Day 30",
      value: "65",
    },
  ],
};
function KagiChart(props) {
  return (
    <>
      <h1>Kagi Chart</h1>
      <ReactFusioncharts
        type="kagi"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default KagiChart;
