import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Federal Budget",
    subcaption: "Requested Vs Proposed",
    numberprefix: "$",
    numbersuffix: "B",
    scrollheight: "10",
    numvisibleplot: "7",
    showanchors: "0",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "Defence & Contigency",
        },
        {
          label: "International Affairs",
        },
        {
          label: "Space Technology",
        },
        {
          label: "Energy",
        },
        {
          label: "Natural Resource",
        },
        {
          label: "Agriculture",
        },
        {
          label: "Commerce",
        },
        {
          label: "Transportation",
        },
        {
          label: "Regional Dev.",
        },
        {
          label: "Education",
        },
        {
          label: "Health",
        },
        {
          label: "Medicare",
        },
        {
          label: "Income Security",
        },
        {
          label: "Social Security",
        },
        {
          label: "Veterans Benefit",
        },
        {
          label: "Justice Adm.",
        },
        {
          label: "General Government",
        },
        {
          label: "Net Interest",
        },
        {
          label: "Allowances",
        },
        {
          label: "Offsetting Reciepts",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Presidential Request",
      data: [
        {
          value: "531.280",
        },
        {
          value: "50.086",
        },
        {
          value: "30.839",
        },
        {
          value: "8.620",
        },
        {
          value: "41.349",
        },
        {
          value: "16.953",
        },
        {
          value: "31.430",
        },
        {
          value: "97.825",
        },
        {
          value: "28.865",
        },
        {
          value: "117.350",
        },
        {
          value: "512.193",
        },
        {
          value: "532.324",
        },
        {
          value: "535.963",
        },
        {
          value: "903.196",
        },
        {
          value: "158.524",
        },
        {
          value: "55.843",
        },
        {
          value: "25.706",
        },
        {
          value: "251.871",
        },
        {
          value: "29.285",
        },
        {
          value: "95.653",
        },
      ],
    },
    {
      seriesname: "Congress Proposal",
      renderas: "area",
      data: [
        {
          value: "470.1",
        },
        {
          value: "32.0",
        },
        {
          value: "27.9",
        },
        {
          value: "5.8",
        },
        {
          value: "39.3",
        },
        {
          value: "19.5",
        },
        {
          value: "15.8",
        },
        {
          value: "80.7",
        },
        {
          value: "23.6",
        },
        {
          value: "91.8",
        },
        {
          value: "416.6",
        },
        {
          value: "519.4",
        },
        {
          value: "505.0",
        },
        {
          value: "892.0",
        },
        {
          value: "153.0",
        },
        {
          value: "54.3",
        },
        {
          value: "23.6",
        },
        {
          value: "267.3",
        },
        {
          value: "521.0",
        },
        {
          value: "95.6",
        },
      ],
    },
  ],
};

class SameAxisColumnLineAreaWithScrolling extends React.Component {
  render() {
    return (
      <>
        <h1>Same Axis Column, Line / Area With Scrolling</h1>
        <ReactFusioncharts
          type="scrollcombi2d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default SameAxisColumnLineAreaWithScrolling;
