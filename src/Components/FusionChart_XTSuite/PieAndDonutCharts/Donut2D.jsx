import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Android Distribution for our app",
    subcaption: "For all users in 2017",
    showpercentvalues: "1",
    defaultcenterlabel: "Android Distribution",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:
      "<b>$percentValue</b> of our Android users are on <b>$label</b>",
    centerlabel: "# Users: $value",
    theme: "fusion",
  },
  data: [
    {
      label: "Ice Cream Sandwich",
      value: "1000",
    },
    {
      label: "Jelly Bean",
      value: "5300",
    },
    {
      label: "Kitkat",
      value: "10500",
    },
    {
      label: "Lollipop",
      value: "18900",
    },
    {
      label: "Marshmallow",
      value: "17904",
    },
  ],
};

class Donut2D extends React.Component {
  render() {
    return (
      <>
        <h1>Donut 2D Chart</h1>
        <ReactFusioncharts
          type="doughnut2d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default Donut2D;
