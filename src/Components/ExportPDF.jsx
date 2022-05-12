import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chart1Configs = {
  type: "column2d",
  width: 700,
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

const chart2Configs = {
  type: "stackedcolumn2d",
  width: 600,
  height: 500,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Yearly Energy Production Rate",
      subCaption: " Top 5 Developed Countries",
      numbersuffix: " TWh",
      showSum: "1",
      plotToolText:
        "$label produces <b>$dataValue</b> of energy from $seriesName",
      theme: "fusion",
    },
    categories: [
      {
        category: [
          {
            label: "Canada",
          },
          {
            label: "China",
          },
          {
            label: "Russia",
          },
          {
            label: "Australia",
          },
          {
            label: "United States",
          },
          {
            label: "France",
          },
        ],
      },
    ],
    dataSet: [
      {
        seriesName: "Coal",
        data: [
          {
            value: "400",
          },
          {
            value: "830",
          },
          {
            value: "500",
          },
          {
            value: "420",
          },
          {
            value: "790",
          },
          {
            value: "380",
          },
        ],
      },
      {
        seriesName: "Hydro",
        data: [
          {
            value: "350",
          },
          {
            value: "620",
          },
          {
            value: "410",
          },
          {
            value: "370",
          },
          {
            value: "720",
          },
          {
            value: "310",
          },
        ],
      },
      {
        seriesName: "Nuclear",
        data: [
          {
            value: "210",
          },
          {
            value: "400",
          },
          {
            value: "450",
          },
          {
            value: "180",
          },
          {
            value: "570",
          },
          {
            value: "270",
          },
        ],
      },
      {
        seriesName: "Gas",
        data: [
          {
            value: "180",
          },
          {
            value: "330",
          },
          {
            value: "230",
          },
          {
            value: "160",
          },
          {
            value: "440",
          },
          {
            value: "350",
          },
        ],
      },
      {
        seriesName: "Oil",
        data: [
          {
            value: "60",
          },
          {
            value: "200",
          },
          {
            value: "200",
          },
          {
            value: "50",
          },
          {
            value: "230",
          },
          {
            value: "150",
          },
        ],
      },
    ],
  },
};

class ExportPDF extends Component {
  constructor(props) {
    super(props);
    this.exportChart = this.exportChart.bind(this);
  }

  // Handler for export button.
  // Fires an export operation which exports all charts on the page as a PDF.
  exportChart(e) {
    FusionCharts.batchExport({
      exportFormat: "pdf",
    });
  }
  render() {
    return (
      <>
        <h1>Export PDF</h1>
        <ReactFC {...chart1Configs} />
        <ReactFC {...chart2Configs} />
        <center>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={this.exportChart}
          >
            Export both charts as a single PDF
          </button>
        </center>
      </>
    );
  }
}

export default ExportPDF;
