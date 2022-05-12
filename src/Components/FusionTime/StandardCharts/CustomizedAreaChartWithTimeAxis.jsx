import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";
ReactFC.fcRoot(FusionCharts, TimeSeries);

const jsonify = res => res.json();
const dataFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/customized-area-chart-data.json"
).then(jsonify);
const schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/customized-area-chart-schema.json"
).then(jsonify);

const dataSource = {
  styledefinition: {
    areaplot: {
      "stroke-opacity": 0.95,
      "fill-opacity": 0.6,
      stroke: "#003840"
    }
  },
  chart: {
    showlegend: 0,
    palettecolors: "#165952"
  },
  caption: {
    text: "Daily Visitors Count of a Website"
  },
  yaxis: [
    {
      plot: {
        value: "Daily Visitors",
        type: "area",
        style: {
          area: "areaplot"
        }
      },
      title: "Daily Visitors Count",
      format: {
        suffix: "k"
      }
    }
  ]
};

export default class CustomizedAreaChartWithTimeAxis extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    this.state = {
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "600",
        height: "400",
        dataSource
      }
    };
  }

  componentDidMount() {
    this.onFetchData();
  }

  onFetchData() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
    });
  }

  render() {
    return (
      <>
      <h1>Customized Area Chart With TimeAxis</h1>
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          "loading"
        )}
      </>
    );
  }
}
