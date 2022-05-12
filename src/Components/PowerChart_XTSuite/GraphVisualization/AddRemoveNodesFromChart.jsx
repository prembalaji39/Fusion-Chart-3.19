import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Amazon Prime Video Categorization",
    subcaption: "Use the menu on right to add/remove more categories",
    theme: "fusion",
    valuefontcolor: "#FFFFFF",
    yaxismaxvalue: "1000",
    yaxisminvalue: "0",
    divlinealpha: "0",
  },
  dataset: [
    {
      data: [
        {
          id: "01",
          label: "Home",
          x: "50",
          y: "900",
          shape: "rectangle",
          width: "80",
          height: "40",
        },
        {
          id: "02",
          label: "TV Shows",
          x: "20",
          y: "500",
          shape: "rectangle",
          width: "80",
          height: "40",
        },
        {
          id: "02.1",
          label: "Thriller",
          x: "2",
          y: "100",
          shape: "rectangle",
          width: "60",
          height: "40",
        },
        {
          id: "02.2",
          label: "Drama",
          x: "12",
          y: "100",
          shape: "rectangle",
          width: "60",
          height: "40",
        },
        {
          id: "02.3",
          label: "Comedy",
          x: "22",
          y: "100",
          shape: "rectangle",
          width: "60",
          height: "40",
        },
        {
          id: "03",
          label: "Movies",
          x: "50",
          y: "500",
          shape: "rectangle",
          width: "80",
          height: "40",
        },
        {
          id: "03.1",
          label: "Drama",
          x: "35",
          y: "100",
          shape: "rectangle",
          width: "60",
          height: "40",
        },
        {
          id: "03.2",
          label: "Action",
          x: "45",
          y: "100",
          shape: "rectangle",
          width: "60",
          height: "40",
        },
        {
          id: "03.3",
          label: "Horror",
          x: "55",
          y: "100",
          shape: "rectangle",
          width: "60",
          height: "40",
        },
        {
          id: "03.5",
          label: "Thriller",
          x: "65",
          y: "100",
          shape: "rectangle",
          width: "60",
          height: "40",
        },
        {
          id: "04",
          label: "Kids",
          x: "80",
          y: "500",
          shape: "rectangle",
          width: "80",
          height: "40",
        },
        {
          id: "04.1",
          label: "Fantasy",
          x: "80",
          y: "100",
          shape: "rectangle",
          width: "60",
          height: "40",
        },
        {
          id: "04.2",
          label: "Anime Cartoons",
          x: "90",
          y: "100",
          shape: "rectangle",
          width: "60",
          height: "40",
        },
      ],
    },
  ],
  connectors: [
    {
      stdthickness: "1.5",
      connector: [
        {
          from: "01",
          to: "03",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "01",
          to: "04",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "01",
          to: "02",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "01.02",
          to: "04",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "01.01",
          to: "02",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "02",
          to: "02.1",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "02",
          to: "02.2",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "02",
          to: "02.3",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "03",
          to: "03.1",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "03",
          to: "03.2",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "03",
          to: "03.3",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "03",
          to: "03.4",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "03",
          to: "03.5",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "03",
          to: "03.6",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "04",
          to: "04.1",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
        {
          from: "04",
          to: "04.2",
          color: "#FFC533",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "100",
        },
      ],
    },
  ],
};

function AddRemoveNodesFromChart(props) {
  return (
    <>
      <h1>Add / Remove Nodes From Charts</h1>
      <ReactFusioncharts
        type="dragnode"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default AddRemoveNodesFromChart;
