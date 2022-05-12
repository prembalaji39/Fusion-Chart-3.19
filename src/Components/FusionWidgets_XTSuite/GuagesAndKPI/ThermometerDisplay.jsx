import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Car Engine Temperature",
    subcaption: "(Per Quarter minute)",
    lowerlimit: "120",
    upperlimit: "200",
    numbersuffix: "°F",
    thmfillcolor: "#008ee4",
    showgaugeborder: "1",
    gaugebordercolor: "#008ee4",
    gaugeborderthickness: "2",
    plottooltext: "Temperature: <b>$datavalue</b> ",
    theme: "fusion",
    showvalue: "1",
  },
  value: "140",
};

class ThermometerDisplay extends React.Component {
  render() {
    return (
      <>
        <h1>Thermometer Display</h1>
        <ReactFusioncharts
          type="thermometer"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}
export default ThermometerDisplay;
