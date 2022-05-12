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

class PercentageCalculation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue:
        "Hover on the plot to see the percentage along with the label",
      message: "Hover on the plot to see the value along with the label",
    };

    this.dataplotrollover = this.dataplotrollover.bind(this);
    this.dataplotrollout = this.dataplotrollout.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
  }

  // Event callback handler for 'dataplotRollOver'.
  // Shows the percentage of the hovered plot on the page.
  dataplotrollover(eventObj, dataObj) {
    const value = ((dataObj.value / this.state.total) * 100).toFixed(2);
    this.setState({
      message: [
        <strong>{dataObj.categoryLabel}</strong>,
        " is ",
        <strong>{value}</strong>,
        "% of top 8 oil reserve countries",
      ],
    });
  }

  // Event callback handler for 'dataplotRollOut'.
  // Resets to the default message.
  dataplotrollout(eventObj, dataObj) {
    this.setState({
      message: this.state.actualValue,
    });
  }

  // Trigerred when chart is rendered.
  // Calculates and stores the total value of the chart's data.
  renderComplete(chart) {
    const chartData = chart.getJSONData();
    this.setState({
      total: chartData.data.reduce((p, c) => p + Number(c.value), 0),
    });
  }
  render() {
    return (
      <>
        <h1>Percentage Calculation</h1>
        <ReactFC
          {...chartConfigs}
          onRender={this.renderComplete}
          fcEvent-dataplotRollOver={this.dataplotrollover}
          fcEvent-dataplotRollOut={this.dataplotrollout}
        />
        <p style={{ padding: "10px", background: "#f5f2f0" }}>
          {this.state.message}
        </p>
      </>
    );
  }
}

export default PercentageCalculation;
