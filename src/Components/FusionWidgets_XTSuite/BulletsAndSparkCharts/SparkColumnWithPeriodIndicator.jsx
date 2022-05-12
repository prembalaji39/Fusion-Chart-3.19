import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    theme: "fusion",
    caption: "Daily Orders Trend",
    subcaption: "Zulily App<br>Jan 2018",
    periodlength: "10",
  },
  dataset: [
    {
      data: [
        {
          tooltext: "Jan 01, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 500,
        },
        {
          tooltext: "Jan 02, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 350,
        },
        {
          tooltext: "Jan 03, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 400,
        },
        {
          tooltext: "Jan 04, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 410,
        },
        {
          tooltext: "Jan 05, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 390,
        },
        {
          tooltext: "Jan 06, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 310,
        },
        {
          tooltext: "Jan 07, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 330,
        },
        {
          tooltext: "Jan 08, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 440,
        },
        {
          tooltext: "Jan 09, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 450,
        },
        {
          tooltext: "Jan 10, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 310,
        },
        {
          tooltext: "Jan 11, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 320,
        },
        {
          tooltext: "Jan 12, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 500,
        },
        {
          tooltext: "Jan 13, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 500,
        },
        {
          tooltext: "Jan 14, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 350,
        },
        {
          tooltext: "Jan 15, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 400,
        },
        {
          tooltext: "Jan 16, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 330,
        },
        {
          tooltext: "Jan 17, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 440,
        },
        {
          tooltext: "Jan 18, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 450,
        },
        {
          tooltext: "Jan 19, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 310,
        },
        {
          tooltext: "Jan 20, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 320,
        },
        {
          tooltext: "Jan 21, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 450,
        },
        {
          tooltext: "Jan 22, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 500,
        },
        {
          tooltext: "Jan 23, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 350,
        },
        {
          tooltext: "Jan 24, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 400,
        },
        {
          tooltext: "Jan 25, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 330,
        },
        {
          tooltext: "Jan 26, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 440,
        },
        {
          tooltext: "Jan 27, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 450,
        },
        {
          tooltext: "Jan 28, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 310,
        },
        {
          tooltext: "Jan 29, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 390,
        },
        {
          tooltext: "Jan 30, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 500,
        },
        {
          tooltext: "Jan 31, 2018<br>No. of Orders: <b>$dataValue</b>",
          value: 350,
        },
      ],
    },
  ],
};
function SparkColumnWithPeriodIndicator(props) {
  return (
    <>
      <h1>Spark Column With Period Indicator</h1>
      <ReactFusioncharts
        type="sparkcolumn"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default SparkColumnWithPeriodIndicator;
