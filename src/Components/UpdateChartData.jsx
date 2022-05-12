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
      updateAnimDuration: "0.4",
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

class UpdateChartData extends Component {
  constructor(props) {
    super(props);
    this.state = chartConfigs;
    this.updateData = this.updateData.bind(this);
  }
  getRandomNumber() {
    var max = 290,
      min = 30;
    return Math.round((max - min) * Math.random() + min);
  }
  updateData() {
    var prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[2].value = this.getRandomNumber();
    prevDs.data[3].value = this.getRandomNumber();
    this.setState({
      dataSource: prevDs,
    });
  }
  render() {
    return (
      <div>
        <h1>Update Chart Data</h1>
        <ReactFC {...this.state} />
        <center>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={this.updateData}
          >
            Change Chart Data
          </button>
        </center>
      </div>
    );
  }
}

export default UpdateChartData;
