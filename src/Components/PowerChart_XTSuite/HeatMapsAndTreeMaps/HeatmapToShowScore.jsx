import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    theme: "fusion",
    caption: "Social Media Impact on Well-Being",
    showvalues: "0",
    subcaption: "Britain, 2017",
    showplotborder: "1",
    plotbordercolor: "#FFFFFF",
    plotborderthickness: "3",
    showshadow: "0",
    placexaxislabelsontop: "1",
    labelfontsize: "16",
    showtooltip: "0",
    usehovereffect: "0",
  },
  dataset: [
    {
      data: [
        {
          rowid: "Sleep",
          columnid: "Instagram",
          value: "-6",
        },
        {
          rowid: "Sleep",
          columnid: "Snapchat",
          value: "-7",
        },
        {
          rowid: "Sleep",
          columnid: "Facebook",
          value: "-8",
        },
        {
          rowid: "Sleep",
          columnid: "Twitter",
          value: "-5",
        },
        {
          rowid: "Fear of missing out",
          columnid: "Instagram",
          value: "-5",
        },
        {
          rowid: "Fear of missing out",
          columnid: "Snapchat",
          value: "-7",
        },
        {
          rowid: "Fear of missing out",
          columnid: "Facebook",
          value: "-4",
        },
        {
          rowid: "Fear of missing out",
          columnid: "Twitter",
          value: "-3",
        },
        {
          rowid: "Bullying",
          columnid: "Instagram",
          value: "-3",
        },
        {
          rowid: "Bullying",
          columnid: "Snapchat",
          value: "-4",
        },
        {
          rowid: "Bullying",
          columnid: "Facebook",
          value: "-5",
        },
        {
          rowid: "Bullying",
          columnid: "Twitter",
          value: "-4",
        },
        {
          rowid: "Body image",
          columnid: "Instagram",
          value: "-6",
        },
        {
          rowid: "Body image",
          columnid: "Snapchat",
          value: "-3",
        },
        {
          rowid: "Body image",
          columnid: "Facebook",
          value: "-4",
        },
        {
          rowid: "Body image",
          columnid: "Twitter",
          value: "-2",
        },
        {
          rowid: "Anxiety",
          columnid: "Instagram",
          value: "-3",
        },
        {
          rowid: "Anxiety",
          columnid: "Snapchat",
          value: "-2",
        },
        {
          rowid: "Anxiety",
          columnid: "Facebook",
          value: "-3",
        },
        {
          rowid: "Anxiety",
          columnid: "Twitter",
          value: "-2",
        },
        {
          rowid: "Depression",
          columnid: "Instagram",
          value: "3",
        },
        {
          rowid: "Depression",
          columnid: "Snapchat",
          value: "-2",
        },
        {
          rowid: "Depression",
          columnid: "Facebook",
          value: "-3",
        },
        {
          rowid: "Depression",
          columnid: "Twitter",
          value: "-2",
        },
        {
          rowid: "Loneliness",
          columnid: "Instagram",
          value: "-2",
        },
        {
          rowid: "Loneliness",
          columnid: "Snapchat",
          value: "-1",
        },
        {
          rowid: "Loneliness",
          columnid: "Facebook",
          value: "-2",
        },
        {
          rowid: "Loneliness",
          columnid: "Twitter",
          value: "-1",
        },
        {
          rowid: "Access to health advice",
          columnid: "Instagram",
          value: "1",
        },
        {
          rowid: "Access to health advice",
          columnid: "Snapchat",
          value: "-1",
        },
        {
          rowid: "Access to health advice",
          columnid: "Facebook",
          value: "3",
        },
        {
          rowid: "Access to health advice",
          columnid: "Twitter",
          value: "2",
        },
        {
          rowid: "Real-world relationships",
          columnid: "Instagram",
          value: "2",
        },
        {
          rowid: "Real-world relationships",
          columnid: "Snapchat",
          value: "4",
        },
        {
          rowid: "Real-world relationships",
          columnid: "Facebook",
          value: "3",
        },
        {
          rowid: "Real-world relationships",
          columnid: "Twitter",
          value: "1",
        },
        {
          rowid: "Awareness of people's health",
          columnid: "Instagram",
          value: "4",
        },
        {
          rowid: "Awareness of people's health",
          columnid: "Snapchat",
          value: "2",
        },
        {
          rowid: "Awareness of people's health",
          columnid: "Facebook",
          value: "5",
        },
        {
          rowid: "Awareness of people's health",
          columnid: "Twitter",
          value: "4",
        },
        {
          rowid: "Community building",
          columnid: "Instagram",
          value: "4",
        },
        {
          rowid: "Community building",
          columnid: "Snapchat",
          value: "2",
        },
        {
          rowid: "Community building",
          columnid: "Facebook",
          value: "5",
        },
        {
          rowid: "Community building",
          columnid: "Twitter",
          value: "4",
        },
        {
          rowid: "Emotional support",
          columnid: "Instagram",
          value: "4",
        },
        {
          rowid: "Emotional support",
          columnid: "Snapchat",
          value: "4",
        },
        {
          rowid: "Emotional support",
          columnid: "Facebook",
          value: "6",
        },
        {
          rowid: "Emotional support",
          columnid: "Twitter",
          value: "4",
        },
        {
          rowid: "Self-identity",
          columnid: "Instagram",
          value: "5",
        },
        {
          rowid: "Self-identity",
          columnid: "Snapchat",
          value: "4",
        },
        {
          rowid: "Self-identity",
          columnid: "Facebook",
          value: "2",
        },
        {
          rowid: "Self-identity",
          columnid: "Twitter",
          value: "4",
        },
        {
          rowid: "Self-expression",
          columnid: "Instagram",
          value: "7",
        },
        {
          rowid: "Self-expression",
          columnid: "Snapchat",
          value: "5",
        },
        {
          rowid: "Self-expression",
          columnid: "Facebook",
          value: "6",
        },
        {
          rowid: "Self-expression",
          columnid: "Twitter",
          value: "8",
        },
      ],
    },
  ],
  colorrange: {
    gradient: "1",
    minvalue: "-8",
    code: "#862d2d",
    startlabel: "Negative",
    endlabel: "Positive",
    color: [
      {
        code: "#ff9933",
        maxvalue: "-4",
      },
      {
        code: "#FFFFFF",
        maxvalue: "0",
      },
      {
        code: "#9ae5e5",
        maxvalue: "4",
      },
      {
        code: "#004d4d",
        maxvalue: "8",
      },
    ],
  },
};

function HeatmapToShowScore(props) {
  return (
    <>
      <h1>Heatmap To Show Score</h1>
      <ReactFusioncharts
        type="heatmap"
        width="400"
        height="600"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default HeatmapToShowScore;
