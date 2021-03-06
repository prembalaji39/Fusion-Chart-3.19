import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "column2d",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Sales of top 3 juice flavors last year",
      subcaption: "Click on a column to see details",
      xaxisname: "Flavor",
      yaxisname: "Amount (In USD)",
      numberprefix: "$",
      theme: "fusion",
      rotateValues: "0",
    },
    data: [
      {
        label: "Apple",
        value: "810000",
        link: "newchart-xml-apple",
      },
      {
        label: "Cranberry",
        value: "620000",
        link: "newchart-xml-cranberry",
      },
      {
        label: "Grape",
        value: "350000",
        link: "newchart-xml-grape",
      },
    ],
    linkeddata: [
      {
        id: "apple",
        linkedchart: {
          chart: {
            caption: "Apple Juice - Quarterly Sales",
            subcaption: "Last year",
            numberprefix: "$",
            theme: "fusion",
            rotateValues: "0",
            plottooltext: "$label, $dataValue,  $percentValue",
          },
          data: [
            {
              label: "Q1",
              value: "157000",
              displayValue: "Q1, $157K",
            },
            {
              label: "Q2",
              value: "172000",
              displayValue: "Q2, $172K",
            },
            {
              label: "Q3",
              value: "206000",
              displayValue: "Q3, $206K",
            },
            {
              label: "Q4",
              value: "275000",
              displayValue: "Q4, $275K",
            },
          ],
        },
      },
      {
        id: "cranberry",
        linkedchart: {
          chart: {
            caption: "Cranberry Juice - Quarterly Sales",
            subcaption: "Last year",
            numberprefix: "$",
            theme: "fusion",
            plottooltext: "$label, $dataValue,  $percentValue",
          },
          data: [
            {
              label: "Q1",
              value: "102000",
              displayValue: "Q1, $102K",
            },
            {
              label: "Q2",
              value: "142000",
              displayValue: "Q2, $142K",
            },
            {
              label: "Q3",
              value: "187000",
              displayValue: "Q3, $187K",
            },
            {
              label: "Q4",
              value: "189000",
              displayValue: "Q4, $189K",
            },
          ],
        },
      },
      {
        id: "grape",
        linkedchart: {
          chart: {
            caption: "Grape Juice - Quarterly Sales",
            subcaption: "Last year",
            numberprefix: "$",
            theme: "fusion",
            rotateValues: "0",
            plottooltext: "$label, $dataValue,  $percentValue",
          },
          data: [
            {
              label: "Q1",
              value: "45000",
              displayValue: "Q1, $45K",
            },
            {
              label: "Q2",
              value: "72000",
              displayValue: "Q2, $72K",
            },
            {
              label: "Q3",
              value: "95000",
              displayValue: "Q3, $95K",
            },
            {
              label: "Q4",
              value: "108000",
              displayValue: "Q4, $108K",
            },
          ],
        },
      },
    ],
  },
};

const alterChart = (chart) => {
  chart.configureLink(
    {
      type: "pie2d",
      width: "500",
      overlayButton: {
        message: "Back",
        fontColor: "880000",
        bgColor: "FFEEEE",
        borderColor: "660000",
      },
    },
    0
  );
};

class DrillDownToChart extends Component {
  render() {
    return (
      <>
        <h1>Drill Down Chart</h1>
        <ReactFC {...chartConfigs} onRender={alterChart} />;
      </>
    );
  }
}

export default DrillDownToChart;
