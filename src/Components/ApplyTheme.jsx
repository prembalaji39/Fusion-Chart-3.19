import React, { Component } from "react";
import FusionCharts from "fusioncharts/core";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import GammelTheme from "fusioncharts/themes/fusioncharts.theme.gammel";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import ZuneTheme from "fusioncharts/themes/fusioncharts.theme.zune";
import OceanTheme from "fusioncharts/themes/fusioncharts.theme.ocean";
import CarbonTheme from "fusioncharts/themes/fusioncharts.theme.carbon";

ReactFC.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme,
  GammelTheme,
  CandyTheme,
  ZuneTheme,
  OceanTheme,
  CarbonTheme
);

const chartConfigs = {
  type: "column2d",
  width: "600",
  height: "400",
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

class ApplyTheme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {},
      currentVal: "fusion",
    };

    this.renderComplete = this.renderComplete.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
  }
  renderComplete(chart) {
    this.setState({ chart });
  }

  // Handler for radio buttons to change chart theme.
  radioHandler(e) {
    this.state.chart.setChartAttribute("theme", e.currentTarget.value);
    this.setState({
      currentVal: e.currentTarget.value,
    });
  }
  render() {
    return (
      <>
        <h1>Apply Theme </h1>
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
        <br />
        <center>
          <span>Choose a theme:</span>
          <div className="change-type">
            <>
              <input
                type="radio"
                value="fusion"
                onChange={this.radioHandler}
                checked={this.state.currentVal === "fusion"}
              />
              <label>Fusion</label>
            </>
            <>
              <input
                type="radio"
                value="gammel"
                onChange={this.radioHandler}
                checked={this.state.currentVal === "gammel"}
              />
              <label>Gammel</label>
            </>
            <>
              <input
                type="radio"
                value="candy"
                onChange={this.radioHandler}
                checked={this.state.currentVal === "candy"}
              />
              <label>Candy</label>
            </>
            <>
              <input
                type="radio"
                value="zune"
                onChange={this.radioHandler}
                checked={this.state.currentVal === "zune"}
              />
              <label>Zune</label>
            </>
            <>
              <input
                type="radio"
                value="ocean"
                onChange={this.radioHandler}
                checked={this.state.currentVal === "ocean"}
              />
              <label>Ocean</label>
            </>
            <>
              <input
                type="radio"
                value="carbon"
                onChange={this.radioHandler}
                checked={this.state.currentVal === "carbon"}
              />
              <label>Carbon</label>
            </>
          </div>
        </center>
      </>
    );
  }
}

export default ApplyTheme;
