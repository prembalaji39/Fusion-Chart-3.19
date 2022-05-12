import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Visits Conversion Funnel - 2017",
    subcaption: "Twilio",
    theme: "fusion",
    is2d: "0",
    ishollow: "0",
    usesameslantangle: "0",
    plottooltext: "$label: <b>$percentValue ($dataValue)</b>",
    showvalues: "1",
    decimals: "1",
  },
  data: [
    {
      label: "Website Visits",
      value: "385634",
    },
    {
      label: "Sign-ups",
      value: "145631",
    },
    {
      label: "Interested to buy",
      value: "84564",
    },
    {
      label: "Contract finalized",
      value: "50654",
    },
    {
      label: "Purchased",
      value: "25342",
    },
  ],
};

function Funnel3DChart(props) {
  return (
    <>
      <h1>Funnel 3D Chart</h1>
      <ReactFusioncharts
        type="funnel"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default Funnel3DChart;
