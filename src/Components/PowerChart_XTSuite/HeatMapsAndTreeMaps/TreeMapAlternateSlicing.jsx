import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  data: [
    {
      label: "Manufacturers",
      value: "10639578",
      data: [
        {
          label: "Toyota Group",
          value: "458560",
          svalue: "7.6",
          data: [
            {
              label: "Lexus",
              value: "29274",
              svalue: "27.1",
            },
            {
              label: "Toyota",
              value: "429286",
              svalue: "1.1",
            },
          ],
        },
        {
          label: "Renault Group",
          value: "1009047",
          svalue: "7.9",
          data: [
            {
              label: "Renault",
              value: "720197",
              svalue: "4.6",
            },
            {
              label: "Dacia",
              value: "288850",
              svalue: "-1",
            },
          ],
        },
        {
          label: "FCA Group",
          value: "594922",
          svalue: "13.5",
          data: [
            {
              label: "Alfa Romeo",
              value: "43495",
              svalue: "-9.5",
            },
            {
              label: "Fiat",
              value: "503101",
              svalue: "5.6",
            },
            {
              label: "Lancia",
              value: "48326",
              svalue: "-18.5",
            },
          ],
        },
        {
          label: "Jaguar Land Rover Group",
          value: "132313",
          svalue: "18.4",
          data: [
            {
              label: "Land Rover",
              value: "103239",
              svalue: "10.7",
            },
            {
              label: "Jaguar",
              value: "29074",
              svalue: "24",
            },
          ],
        },
        {
          label: "BMW Group",
          value: "696355",
          svalue: "12.3",
          data: [
            {
              label: "BMW",
              value: "554822",
              svalue: "4",
            },
            {
              label: "Mini",
              value: "141533",
              svalue: "22.5",
            },
          ],
        },
        {
          label: "VW Group",
          value: "2693833",
          svalue: "7.4",
          data: [
            {
              label: "Audi",
              value: "590719",
              svalue: ".8",
            },
            {
              label: "Volkswagen",
              value: "1313310",
              svalue: "2.8",
            },
            {
              label: "Porsche",
              value: "53849",
              svalue: "28.9",
            },
            {
              label: "Skoda",
              value: "472648",
              svalue: "1.5",
            },
            {
              label: "Seat",
              value: "263307",
              svalue: "1.6",
            },
          ],
        },
        {
          label: "Daimler Group",
          value: "626233",
          svalue: "17.2",
          data: [
            {
              label: "Mercedes",
              value: "554354",
              svalue: "7.5",
            },
            {
              label: "Smart",
              value: "71879",
              svalue: "28",
            },
          ],
        },
        {
          label: "PSA Group",
          value: "1121881",
          svalue: "4.9",
          data: [
            {
              label: "Peugeot",
              value: "642212",
              svalue: "2.2",
            },
            {
              label: "DS",
              value: "57078",
              svalue: "-22.6",
            },
            {
              label: "Citroen",
              value: "422591",
              svalue: ".3",
            },
          ],
        },
        {
          label: "Opel Group",
          value: "739829",
          svalue: "1.2",
          data: [
            {
              label: "Vauxhall",
              value: "13154",
              svalue: "1.3",
            },
            {
              label: "Opel",
              value: "726675",
              svalue: "1.3",
            },
          ],
        },
        {
          label: "Others",
          value: "2566605",
          svalue: "23.8",
          data: [
            {
              label: "Mazda",
              value: "160711",
              svalue: "10.8",
            },
            {
              label: "Nissan",
              value: "437187",
              svalue: "15.6",
            },
            {
              label: "Mitsubishi",
              value: "98659",
              svalue: "27.9",
            },
            {
              label: "Volvo Car Corp.",
              value: "198390",
              svalue: "3.2",
            },
            {
              label: "Hyundai",
              value: "355423",
              svalue: "4",
            },
            {
              label: "Honda",
              value: "100056",
              svalue: "-9.6",
            },
            {
              label: "Kia",
              value: "295140",
              svalue: "3.3",
            },
            {
              label: "Ford",
              value: "784252",
              svalue: "2",
            },
            {
              label: "Suzuki",
              value: "136787",
              svalue: "2.9",
            },
          ],
        },
      ],
    },
  ],
  colorrange: {
    mapbypercent: "1",
    gradient: "1",
    minvalue: "-30",
    code: "#F2726F",
    startlabel: "Decline",
    endlabel: "Rise",
    color: [
      {
        code: "#FFC533",
        maxvalue: "0",
        label: "Static",
      },
      {
        code: "#62B58F",
        maxvalue: "30",
      },
    ],
  },
  chart: {
    algorithm: "sliceanddice",
    slicingmode: "alternate",
    legendcaption: "Growth in sales - Compared to previous year",
    caption: "Top-selling Car Manufacturers by Brands",
    subcaption: "Europe - 2017",
    plottooltext:
      "<b>$label</b><br>Cars Sold: <b>$dataValue</b><br>Growth: <b>$sValue%</b>",
    theme: "fusion",
  },
};

class TreeMapAlternateSlicing extends React.Component {
  render() {
    return (
      <>
      <h1>TreeMap Alternate Slicing</h1>
      <ReactFusioncharts
        type="treemap"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
      </>
    );
  }
}

export default TreeMapAlternateSlicing;
