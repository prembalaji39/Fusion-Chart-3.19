import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Fertility Rates in Europe - 2015",
    indecimalseparator: ",",
    decimalseparator: ".",
    theme: "fusion",
    showlabels: "0",
    legendposition: "Bottom",
    legendcaption: "Number of children per woman",
    basefontcolor: "#000000",
    entitytooltext:
      "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'><b>$datavalue</b> children per woman</div>",
    entityfillhovercolor: "#BBDEFB",
  },
  colorrange: {
    minvalue: "0.5",
    code: "#5D62B5",
    gradient: "0",
    color: [
      {
        displayvalue: "0.5 - 1.0",
        maxvalue: "1.0",
        code: "#F3726F",
      },
      {
        maxvalue: "1.5",
        displayvalue: "1.0 - 1.5",
        code: "#FFC532",
      },
      {
        maxvalue: "2.5",
        displayvalue: "1.5 - 2.0",
        code: "#61B68E",
      },
    ],
  },
  data: [
    {
      id: "001",
      value: "1,67",
    },
    {
      id: "002",
      value: "0,67",
    },
    {
      id: "003",
      value: "1,49",
      showlabel: "1",
    },
    {
      id: "004",
      value: "1,72",
      showlabel: "1",
    },
    {
      id: "005",
      value: "1,70",
    },
    {
      id: "006",
      value: "1,00",
    },
    {
      id: "007",
      value: "1,50",
      showlabel: "1",
    },
    {
      id: "008",
      value: "1,00",
    },
    {
      id: "044",
      value: "1,02",
    },
    {
      id: "009",
      value: "1,47",
    },
    {
      id: "010",
      value: "1,71",
      showlabel: "1",
    },
    {
      id: "011",
      value: "1,58",
    },
    {
      id: "012",
      value: "1,65",
      showlabel: "1",
    },
    {
      id: "013",
      value: "1,96",
      showlabel: "1",
    },
    {
      id: "014",
      value: "1,50",
      showlabel: "1",
    },
    {
      id: "015",
      value: "1,00",
      showlabel: "1",
    },
    {
      id: "016",
      value: "1,45",
    },
    {
      id: "017",
      value: "1,80",
      showlabel: "1",
    },
    {
      id: "018",
      value: "1,92",
      showlabel: "1",
    },
    {
      id: "019",
      value: "1,35",
      showlabel: "1",
    },
    {
      id: "047",
      value: "0,6",
    },
    {
      id: "020",
      value: "1,50",
    },
    {
      id: "021",
      value: "1,40",
    },
    {
      id: "022",
      value: "1,70",
    },
    {
      id: "023",
      value: "1,47",
    },
    {
      id: "024",
      value: "1,50",
    },
    {
      id: "025",
      value: "1,45",
    },
    {
      id: "026",
      value: "1,00",
    },
    {
      id: "027",
      value: "0,7",
    },
    {
      id: "028",
      value: "1,74",
    },
    {
      id: "029",
      value: "1,66",
    },
    {
      id: "030",
      value: "1,72",
      showlabel: "1",
    },
    {
      id: "031",
      value: "1,2",
      showlabel: "1",
    },
    {
      id: "032",
      value: "0,51",
      showlabel: "1",
    },
    {
      id: "033",
      value: "1,58",
      showlabel: "1",
    },
    {
      id: "046",
      value: "1,70",
      showlabel: "1",
    },
    {
      id: "034",
      value: "0,8",
    },
    {
      id: "035",
      value: "1,06",
    },
    {
      id: "036",
      value: "1,0",
    },
    {
      id: "037",
      value: "1,57",
    },
    {
      id: "038",
      value: "1,33",
      showlabel: "1",
    },
    {
      id: "039",
      value: "1,85",
      showlabel: "1",
    },
    {
      id: "040",
      value: "1,50",
      showlabel: "1",
    },
    {
      id: "045",
      value: "2,00",
      showlabel: "1",
    },
    {
      id: "041",
      value: "1,50",
      showlabel: "1",
    },
    {
      id: "042",
      value: "1,80",
    },
    {
      id: "043",
      value: "0,9",
    },
  ],
};

function FertilityRateInUS(props) {
  return (
    <>
      <h1>Fertility Rate In US</h1>
      <ReactFusioncharts
        type="maps/europe"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default FertilityRateInUS;
