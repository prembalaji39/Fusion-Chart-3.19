import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, TimeSeries);

const jsonify = (res) => res.json();
const dataFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/variable-canvas-height_data.json"
).then(jsonify);
const schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/variable-canvas-height_schema.json"
).then(jsonify);

const dataSource = {
  chart: {
    multiCanvas: true,
    canvasHeightProportion: '1:3'
  },
  caption: {
    text: 'Sales Performance'
  },
  subcaption: {
    text: 'Configuration of the canvas height proportion'
  },
  yAxis: [{
    plot: {
      value: "Sale Amount",
      type: "area"
    },
    title: "Sale Amount",
    format: {
      prefix: "$"
    }
  }, {
    plot: {
      value: "Units Sold",
      type: "column"
    },
    title: "Units Sold"
  }],
};

export default class ChartWithVariableCanvasHeightOnMultiVariate extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    this.state = {
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "600",
        height: "400",
        dataSource,
      },
    };
  }

  componentDidMount() {
    this.onFetchData();
  }

  onFetchData() {
    Promise.all([dataFetch, schemaFetch]).then((res) => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs,
      });
    });
  }

  render() {
    return (
      <>
        <h1>Charts With Variable Canvas Height</h1>
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          "loading"
        )}
      </>
    );
  }
}
