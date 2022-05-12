import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  map: {
    showlegend: 0,
    theme: "fusion",
    caption: "Shipping Routes in US",
    numbersuffix: "%",
    entityfillhovercolor: "#F5F3E4",
    showtooltip: "0",
    showlabels: "1",
    showentityhovereffect: "0",
    showmarkerlabels: "1",
    showconnectorlabels: "0",
    connectorcolor: "#8C8C8C",
    connectorthickness: "2",
    connectorhovercolor: "#000000",
    connectorhoverthickness: "2",
    markerfontsize: "18",
    markerfontcolor: "#0a0a0a",
  },
  data: [
    {
      id: "CA",
      showlabel: "0",
      color: "#74CCEB",
      showhovereffect: "1",
    },
    {
      id: "WA",
      color: "#CDEBF5",
      showhovereffect: "0",
    },
    {
      id: "ID",
      color: "#CDEBF5",
      showhovereffect: "0",
    },
    {
      id: "MT",
      color: "#CDEBF5",
      showhovereffect: "0",
    },
    {
      id: "WY",
      color: "#CDEBF5",
      showhovereffect: "0",
    },
    {
      id: "UT",
      color: "#CDEBF5",
      showhovereffect: "0",
    },
    {
      id: "AZ",
      color: "#CDEBF5",
      showhovereffect: "0",
    },
    {
      id: "NV",
      color: "#CDEBF5",
      showhovereffect: "0",
    },
    {
      id: "OR",
      color: "#CDEBF5",
      showhovereffect: "0",
    },
    {
      id: "TX",
      showlabel: "0",
      color: "#AC92ED",
      hovercolor: "#ffccff",
      showhovereffect: "1",
    },
    {
      id: "NM",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "CO",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "OK",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "KS",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "NE",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "SD",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "ND",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "MN",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "IA",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "MO",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "AR",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "LA",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "WI",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "IL",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "MS",
      color: "#DED2FC",
      showhovereffect: "0",
    },
    {
      id: "NC",
      showlabel: "0",
      color: "#A6C624",
      hovercolor: "#ffccff",
      showhovereffect: "1",
    },
    {
      id: "MI",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "MI",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "IN",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "KY",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "TN",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "AL",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "GA",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "FL",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "SC",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "WV",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "OH",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "VA",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "PA",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "NY",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "NJ",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "CT",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "MA",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "NH",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "VT",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "ME",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "DC",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "MD",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "DE",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "RI",
      color: "#EFF7CB",
      showhovereffect: "0",
    },
    {
      id: "HI",
      showlabel: "0",
      showhovereffect: "0",
    },
    {
      id: "AK",
      showlabel: "0",
      showhovereffect: "0",
    },
  ],
  markers: {
    shapes: [
      {
        id: "myCustomShape",
        type: "circle",
        fillcolor: "#f8bd19",
        showborder: "0",
      },
    ],
    items: [
      {
        shapeid: "myCustomShape",
        id: "WA",
        x: "54.5",
        y: "44.8",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "OR",
        x: "58.3",
        y: "101.7",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "ID",
        x: "132.8",
        y: "110.7",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "MT",
        x: "188.8",
        y: "45.1",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "WY",
        x: "220",
        y: "121",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "AZ",
        x: "165",
        y: "261",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "UT",
        x: "170",
        y: "178",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "NV",
        x: "101",
        y: "193",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "LA",
        x: "406",
        y: "300",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "OK",
        x: "347",
        y: "245",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "NM",
        x: "238",
        y: "263",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "CO",
        x: "246.72",
        y: "179.01",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "KS",
        x: "335",
        y: "195",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "MO",
        x: "408",
        y: "197",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "AR",
        x: "413",
        y: "253",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "MS",
        x: "442",
        y: "277",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "NE",
        x: "318",
        y: "146",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "SD",
        x: "311",
        y: "99",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "ND",
        x: "310",
        y: "42",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "MN",
        x: "382",
        y: "61",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "WI",
        x: "439",
        y: "91",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "IA",
        x: "396",
        y: "139",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "IL",
        x: "445",
        y: "174",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "MI",
        x: "502",
        y: "114",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "IN",
        x: "483",
        y: "174",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "OH",
        x: "530",
        y: "168",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "KY",
        x: "501",
        y: "210",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "WV",
        x: "544",
        y: "199",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "PA",
        x: "593",
        y: "155",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "VA",
        x: "580",
        y: "210",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "NY",
        x: "620",
        y: "120",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "VT",
        x: "654",
        y: "95",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "ME",
        x: "700",
        y: "82",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "NH",
        x: "666",
        y: "114",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "MA",
        x: "655",
        y: "132",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "CT",
        x: "654",
        y: "146",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "TN",
        x: "490",
        y: "237",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "GA",
        x: "522",
        y: "283",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "AL",
        x: "489",
        y: "279",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "FL",
        x: "539",
        y: "350",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "TX",
        x: "333",
        y: "304",
        label: "Texas",
        labelpos: "BOTTOM",
        bold: "1",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "NC",
        x: "576",
        y: "240",
        label: "North Carolina",
        labelpos: "RIGHT",
        radius: "1",
      },
      {
        shapeid: "myCustomShape",
        id: "CA",
        x: "68",
        y: "225",
        label: "California",
        labelpos: "LEFT",
        showmarkerlabel: "1",
        radius: "1",
      },
    ],
    connectors: [
      {
        from: "CA",
        to: "WA",
        label: "20540",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.2",
      },
      {
        from: "CA",
        to: "ID",
        label: "17400",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.1",
      },
      {
        from: "CA",
        to: "MT",
        label: "15600",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3",
      },
      {
        from: "CA",
        to: "WY",
        label: "18400",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6",
      },
      {
        from: "CA",
        to: "NV",
        label: "19300",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4",
      },
      {
        from: "CA",
        to: "UT",
        label: "16500",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5",
      },
      {
        from: "CA",
        to: "AZ",
        label: "18400",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5",
      },
      {
        from: "TX",
        to: "NM",
        label: "21300",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4",
      },
      {
        from: "TX",
        to: "LA",
        label: "15440",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3",
      },
      {
        from: "TX",
        to: "OK",
        label: "16800",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3",
      },
      {
        from: "TX",
        to: "CO",
        label: "17200",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.1",
      },
      {
        from: "TX",
        to: "KS",
        label: "13670",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5",
      },
      {
        from: "TX",
        to: "MO",
        label: "12560",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3",
      },
      {
        from: "TX",
        to: "AR",
        label: "19200",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4",
      },
      {
        from: "TX",
        to: "MS",
        label: "18760",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.6",
      },
      {
        from: "TX",
        to: "NE",
        label: "16870",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4",
      },
      {
        from: "TX",
        to: "SD",
        label: "17300",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6",
      },
      {
        from: "TX",
        to: "ND",
        label: "19900",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7",
      },
      {
        from: "TX",
        to: "MN",
        label: "16100",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7",
      },
      {
        from: "TX",
        to: "WI",
        label: "14890",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7",
      },
      {
        from: "TX",
        to: "IA",
        label: "15600",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: 1.3",
      },
      {
        from: "TX",
        to: "IL",
        label: "17650",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4",
      },
      {
        from: "NC",
        to: "IN",
        label: "14700",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $4",
      },
      {
        from: "NC",
        to: "MI",
        label: "18200",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1",
      },
      {
        from: "NC",
        to: "OH",
        label: "16540",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3",
      },
      {
        from: "NC",
        to: "KY",
        label: "15850",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4",
      },
      {
        from: "NC",
        to: "WV",
        label: "16430",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3",
      },
      {
        from: "NC",
        to: "PA",
        label: "15600",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3",
      },
      {
        from: "NC",
        to: "VT",
        label: "18400",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4",
      },
      {
        from: "NC",
        to: "NH",
        label: "16900",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4",
      },
      {
        from: "NC",
        to: "MA",
        label: "16590",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.2",
      },
      {
        from: "NC",
        to: "CT",
        label: "18340",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6",
      },
      {
        from: "NC",
        to: "ME",
        label: "14680",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7",
      },
      {
        from: "NC",
        to: "NY",
        label: "23600",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4",
      },
      {
        from: "NC",
        to: "TN",
        label: "19800",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.6",
      },
      {
        from: "NC",
        to: "AL",
        label: "13400",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4",
      },
      {
        from: "NC",
        to: "VA",
        label: "17260",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.2",
      },
      {
        from: "NC",
        to: "GA",
        label: "17400",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3",
      },
      {
        from: "NC",
        to: "SC",
        label: "16230",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.2",
      },
      {
        from: "NC",
        to: "FL",
        label: "21200",
        showtooltip: "1",
        tooltext:
          "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6",
      },
    ],
  },
};
function ShippingRouteInUs(props) {
  return (
    <>
      <h1>Shipping Route In US</h1>
      <ReactFusioncharts
        type="maps/usa"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default ShippingRouteInUs;
