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
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",
    },
    data: [
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
    ],
  },
};

class UpdateChartAttribute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {},
    };

    this.renderComplete = this.renderComplete.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeCaptionTextAlignment =
      this.changeCaptionTextAlignment.bind(this);
    this.resetChart = this.resetChart.bind(this);
  }

  // Called by FC-React component to return the rendered chart
  renderComplete(chart) {
    this.setState({ chart });
  }

  // Handler for 'Change Background' button.
  // Changes the chart background color.
  changeBackgroundColor() {
    this.state.chart.setChartAttribute("bgColor", "#efefef");
  }

  // Handler for 'Change CaptionAlignment' button.
  // Changes the caption alignment to left.
  changeCaptionTextAlignment() {
    this.state.chart.setChartAttribute("captionAlignment", "left");
  }

  // Handler for 'Reset' button.
  // Resets the chart to the original version.
  resetChart() {
    this.state.chart.setChartAttribute("bgColor", null);
    this.state.chart.setChartAttribute("captionAlignment", null);
  }

  render() {
    return (
      <>
        <h1>Update Chart Attribute</h1>
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
        <center>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={this.changeBackgroundColor}
          >
            Change Background
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={this.changeCaptionTextAlignment}
          >
            Change Caption Alignment
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={this.resetChart}
          >
            Reset
          </button>
        </center>
      </>
    );
  }
}

export default UpdateChartAttribute;
