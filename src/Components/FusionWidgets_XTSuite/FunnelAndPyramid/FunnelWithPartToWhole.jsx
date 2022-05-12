import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Recruitment Analysis for Engineering Positions @ Peoplefy",
    subcaption: "For the year 2017",
    theme: "fusion",
    showlabels: "1",
    showvalues: "1",
    showpercentvalues: "1",
    streamlineddata: "0",
    plottooltext: "$label: <b>$dataValue</b>",
  },
  data: [
    {
      label: "Applications Received",
      value: "3000",
    },
    {
      label: "CVs Shortlisted",
      value: "1500",
    },
    {
      label: "Cleared Machine Test",
      value: "1000",
    },
    {
      label: "Cleared Technical Rounds",
      value: "500",
    },
    {
      label: "Cleared Cultural Fit Round",
      value: "300",
    },
    {
      label: "Final Selection",
      value: "200",
    },
  ],
};

function FunnelWithPartToWhole(props) {
  return (
    <>
      <h1>Funnel To Show Part To Whole</h1>
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

export default FunnelWithPartToWhole;
