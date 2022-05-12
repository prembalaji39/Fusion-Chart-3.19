import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Website visits",
    subcaption: "Purchase - Conversion analysis for last year",
    decimals: "1",
    showvalues: "1",
    plottooltext: "$label: <b>$dataValue</b>",
    plotfillalpha: "70",
    theme: "fusion",
    streamlineddata: "0",
  },
  data: [
    {
      label: "Website Visits",
      value: "17362",
    },
    {
      label: "Downloads",
      value: "8039",
    },
    {
      label: "Checked Pricing",
      value: "5509",
    },
    {
      label: "Asked for Quotation",
      value: "3962",
    },
    {
      label: "Purchased",
      value: "2397",
    },
  ],
};

function SimpleFunnel(props) {
  return (
    <>
      <h1>Simple Funnel Charts</h1>
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

export default SimpleFunnel;
