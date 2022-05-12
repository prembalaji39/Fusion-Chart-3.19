import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    dateformat: "dd/mm/yyyy",
    caption: "Planned vs Actual",
    subcaption: "For BigHead v3",
    plottooltext: "<b>$label</b><br>Start: <b>$start</b><br>End: <b>$end</b>",
    theme: "fusion",
  },
  legend: {
    item: [
      {
        label: "Planned",
        color: "#0000AA",
      },
      {
        label: "Actual",
        color: "#88D8B0",
      },
      {
        label: "Slack (Delay)",
        color: "#e44a00",
      },
    ],
  },
  tasks: {
    task: [
      {
        label: "Planned",
        processid: "1",
        start: "5/4/2018",
        end: "12/4/2018",
        id: "1-1",
        color: "#0000AA",
        alpha: "100",
        height: "27%",
        toppadding: "32%",
      },
      {
        label: "Actual",
        processid: "1",
        start: "5/4/2018",
        end: "12/4/2018",
        id: "1",
        color: "#88D8B0",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
      },
      {
        label: "Planned",
        processid: "2",
        start: "10/4/2018",
        end: "20/4/2018",
        id: "2-1",
        color: "#0000AA",
        alpha: "100",
        height: "27%",
        toppadding: "32%",
      },
      {
        label: "Actual",
        processid: "2",
        start: "10/4/2018",
        end: "22/4/2018",
        id: "2",
        color: "#88D8B0",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
      },
      {
        label: "Delay",
        processid: "2",
        start: "20/4/2018",
        end: "22/4/2018",
        id: "2-2",
        color: "#FF6F69",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
        tooltext: "Delayed by 2 days.",
      },
      {
        label: "Planned",
        processid: "3",
        start: "21/4/2018",
        end: "30/4/2018",
        id: "3-1",
        color: "#0000AA",
        alpha: "100",
        height: "27%",
        toppadding: "32%",
      },
      {
        label: "Actual",
        processid: "3",
        start: "22/4/2018",
        end: "1/5/2018",
        id: "3",
        color: "#88D8B0",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
      },
      {
        label: "Delay",
        processid: "3",
        start: "30/4/2018",
        end: "1/5/2018",
        id: "3-2",
        color: "#FF6F69",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
        tooltext: "Delayed by 1 day",
      },
      {
        label: "Planned",
        processid: "4",
        start: "02/5/2018",
        end: "10/5/2018",
        id: "4-1",
        color: "#0000AA",
        alpha: "100",
        height: "27%",
        toppadding: "32%",
      },
      {
        label: "Actual",
        processid: "4",
        start: "4/5/2018",
        end: "10/5/2018",
        id: "4",
        color: "#88D8B0",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
      },
      {
        label: "Planned",
        processid: "5",
        start: "5/5/2018",
        end: "16/5/2018",
        id: "5-1",
        color: "#0000AA",
        alpha: "100",
        height: "27%",
        toppadding: "32%",
      },
      {
        label: "Actual",
        processid: "5",
        start: "6/5/2018",
        end: "16/5/2018",
        id: "5",
        color: "#88D8B0",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
      },
      {
        label: "Planned",
        processid: "6",
        start: "16/5/2018",
        end: "27/5/2018",
        id: "6-1",
        color: "#0000AA",
        alpha: "100",
        height: "27%",
        toppadding: "32%",
      },
      {
        label: "Actual",
        processid: "6",
        start: "15/5/2018",
        end: "31/5/2018",
        id: "6",
        color: "#88D8B0",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
      },
      {
        label: "Delay",
        processid: "6",
        start: "27/5/2018",
        end: "1/6/2018",
        id: "6-2",
        color: "#FF6F69",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
        tooltext: "Delayed by 4 days",
      },
      {
        label: "Planned",
        processid: "7",
        start: "1/6/2018",
        end: "12/5/2018",
        id: "7-1",
        color: "#0000AA",
        alpha: "100",
        height: "27%",
        toppadding: "32%",
      },
      {
        label: "Actual",
        processid: "7",
        start: "1/6/2018",
        end: "12/5/2018",
        id: "7",
        color: "#88D8B0",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
      },
      {
        label: "Planned",
        processid: "8",
        start: "12/6/2018",
        end: "20/6/2018",
        id: "8-1",
        color: "#0000AA",
        alpha: "100",
        height: "27%",
        toppadding: "32%",
      },
      {
        label: "Actual",
        processid: "8",
        start: "12/6/2018",
        end: "19/6/2018",
        id: "8",
        color: "#88D8B0",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
      },
      {
        label: "Planned",
        processid: "9",
        start: "20/6/2018",
        end: "27/6/2018",
        id: "9-1",
        color: "#0000AA",
        alpha: "100",
        height: "27%",
        toppadding: "32%",
      },
      {
        label: "Actual",
        processid: "9",
        start: "20/6/2018",
        end: "30/6/2018",
        id: "9",
        color: "#88D8B0",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
      },
      {
        label: "Delay",
        processid: "9",
        start: "27/6/2018",
        end: "30/6/2018",
        id: "9-2",
        color: "#FF6F69",
        alpha: "100",
        height: "27%",
        toppadding: "65%",
        tooltext: "Delayed by 3 days",
      },
    ],
  },
  processes: {
    headertext: "Task",
    align: "left",
    process: [
      {
        label: "Market Research",
        id: "1",
      },
      {
        label: "Define Specifications",
        id: "2",
      },
      {
        label: "Overall Architecture",
        id: "3",
      },
      {
        label: "Project Planning",
        id: "4",
      },
      {
        label: "Detail Design",
        id: "5",
      },
      {
        label: "Software Development",
        id: "6",
      },
      {
        label: "Test Plan",
        id: "7",
      },
      {
        label: "Testing & QA",
        id: "8",
      },
      {
        label: "User Documentation",
        id: "9",
      },
    ],
  },
  categories: [
    {
      category: [
        {
          start: "1/4/2018",
          end: "30/4/2018",
          label: "April",
        },
        {
          start: "1/5/2018",
          end: "31/5/2018",
          label: "May",
        },
        {
          start: "1/6/2018",
          end: "30/6/2018",
          label: "June",
        },
      ],
    },
    {
      category: [
        {
          start: "1/4/2018",
          end: "7/4/2018",
          label: "W 1",
        },
        {
          start: "8/4/2018",
          end: "14/4/2018",
          label: "W 2",
        },
        {
          start: "15/4/2018",
          end: "21/4/2018",
          label: "W 3",
        },
        {
          start: "22/4/2018",
          end: "28/4/2018",
          label: "W 4",
        },
        {
          start: "29/4/2018",
          end: "5/5/2018",
          label: "W 5",
        },
        {
          start: "6/5/2018",
          end: "12/5/2018",
          label: "W 6",
        },
        {
          start: "13/5/2018",
          end: "19/5/2018",
          label: "W 7",
        },
        {
          start: "20/5/2018",
          end: "26/5/2018",
          label: "W 8",
        },
        {
          start: "27/5/2018",
          end: "2/6/2018",
          label: "W 9",
        },
        {
          start: "3/6/2018",
          end: "9/6/2018",
          label: "W 10",
        },
        {
          start: "10/6/2018",
          end: "16/6/2018",
          label: "W 11",
        },
        {
          start: "17/6/2018",
          end: "23/6/2018",
          label: "W 12",
        },
        {
          start: "24/6/2018",
          end: "30/6/2018",
          label: "W 13",
        },
      ],
    },
  ],
};

function GanttWithShowingsVsActuals(props) {
  return (
    <>
      <h1>Gantt Chart With Showings Vs Actuals</h1>
      <ReactFusioncharts
        type="gantt"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default GanttWithShowingsVsActuals;
