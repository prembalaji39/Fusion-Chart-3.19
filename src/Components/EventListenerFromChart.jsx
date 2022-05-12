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

class EventListenerFromChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: "Hover on the plot to see the value along with the label",
      message: "Hover on the plot to see the value along with the label",
    };

    this.dataplotrollover = this.dataplotrollover.bind(this);
    this.dataplotrollout = this.dataplotrollout.bind(this);
  }

  // Event callback handler for 'dataplotRollOver'.
  // Shows the value of the hovered plot on the page.
  dataplotrollover(eventObj, dataObj) {
    this.setState({
      message: [
        "You are currently hovering over ",
        <strong>{dataObj.categoryLabel}</strong>,
        " whose value is ",
        <strong>{dataObj.displayValue}</strong>,
      ],
    });
  }

  // Event callback handler for 'dataplotRollOut'.
  // Resets to the original message.
  dataplotrollout(eventObj, dataObj) {
    this.setState({
      message: this.state.actualValue,
    });
  }
  render() {
    return (
      <>
        <h1>Event Listeners from Chart</h1>
        <ReactFC
          {...chartConfigs}
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

export default EventListenerFromChart;
