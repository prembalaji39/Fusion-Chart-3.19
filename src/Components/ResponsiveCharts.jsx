import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "column2d",
  width: "600",
  height: "350",
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

class ResponsiveCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {},
      currentVal: "medium",
    };

    this.renderComplete = this.renderComplete.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
  }

  renderComplete(chart) {
    this.setState({ chart });
  }

  // Handler for radio buttons to change chart size.
  radioHandler(e) {
    switch (e.currentTarget.value) {
      case "small":
        this.state.chart.resizeTo(400, 250);
        break;

      case "medium":
        this.state.chart.resizeTo(600, 350);
        break;

      case "large":
        this.state.chart.resizeTo(700, 400);
        break;

      default:
        this.state.chart.resizeTo(400, 250);
        break;
    }
    this.setState({
      currentVal: e.currentTarget.value,
    });
  }
  render() {
    return (
      <div>
        <h1>Responsive Charts</h1>
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
        <br />
        <center>
          <span>Choose a dimension:</span>
          <div className="change-type">
            <div>
              <input
                type="radio"
                value="small"
                onChange={this.radioHandler}
                checked={this.state.currentVal === "small"}
              />
              <label>400 x 250</label>
            </div>
            <div>
              <input
                type="radio"
                value="medium"
                onChange={this.radioHandler}
                checked={this.state.currentVal === "medium"}
              />
              <label>600 x 350</label>
            </div>
            <div>
              <input
                type="radio"
                value="large"
                onChange={this.radioHandler}
                checked={this.state.currentVal === "large"}
              />
              <label>700 x 400</label>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default ResponsiveCharts;
