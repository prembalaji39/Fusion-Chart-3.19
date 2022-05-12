import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Weekly Maintenance Checks for Denver Plant",
    subcaption: "Sun Industries",
    dateformat: "mm/dd/yyyy hh:mm:ss",
    outputdateformat: "ddds mnl, yyyy hh12:mn ampm",
    theme: "fusion",
    plottooltext: "<b>$label</b><br>Start: <b>$start</b><br>End: <b>$end</b>",
  },
  tasks: {
    showlabels: "0",
    color: "#5D62B5",
    task: [
      {
        processid: "MC7",
        start: "04/02/2018 12:00:00",
        end: "04/02/2018 23:00:00",
        label: "11 Hrs",
      },
      {
        processid: "MC7",
        start: "04/04/2018 12:00:00",
        end: "04/04/2018 23:00:00",
        label: "11 Hrs",
      },
      {
        processid: "MC7",
        start: "04/06/2018 12:00:00",
        end: "04/06/2018 23:00:00",
        label: "11 Hrs",
      },
      {
        processid: "MC6",
        start: "04/02/2018 8:00:00",
        end: "04/02/2018 16:00:00",
        label: "8 Hrs",
      },
      {
        processid: "MC6",
        start: "04/07/2018 8:00:00",
        end: "04/07/2018 16:00:00",
        label: "8 Hrs",
      },
      {
        processid: "MC5",
        start: "04/04/2018 10:00:00",
        end: "04/04/2018 23:00:00",
        label: "13 Hrs",
      },
      {
        processid: "MC4",
        start: "04/03/2018 13:30:00",
        end: "04/03/2018 22:30:00",
        label: "9 Hrs",
      },
      {
        processid: "MC4",
        start: "04/06/2018 13:30:00",
        end: "04/06/2018 22:30:00",
        label: "9 Hrs",
      },
      {
        processid: "MC3",
        start: "04/05/2018 11:30:00",
        end: "04/05/2018 22:30:00",
        label: "11 Hrs",
      },
      {
        processid: "MC2",
        start: "04/07/2018 13:30:00",
        end: "04/07/2018 23:30:00",
        label: "10 Hrs",
      },
      {
        processid: "MC1",
        start: "04/04/2018 11:45:00",
        end: "04/04/2018 23:45:00",
        label: "12 Hrs",
      },
    ],
  },
  processes: {
    align: "left",
    headertext: "Tasks",
    headervalign: "middle",
    headeralign: "left",
    process: [
      {
        label: "Bedplate Latch Bolts",
        id: "MC1",
      },
      {
        label: "Bedplate Hydraulic Hoses",
        id: "MC2",
      },
      {
        label: "Dust Stops Leakage",
        id: "MC3",
      },
      {
        label: "Mixing Chamber Oiling",
        id: "MC4",
      },
      {
        label: "Latch Stroke",
        id: "MC5",
      },
      {
        label: "Latch Cylinder Leakage",
        id: "MC6",
      },
      {
        label: "Latch Fastener Tightness",
        id: "MC7",
      },
    ],
  },
  categories: [
    {
      category: [
        {
          start: "04/02/2018 00:00:00",
          end: "04/02/2018 23:59:59",
          label: "Monday",
        },
        {
          start: "04/03/2018 00:00:00",
          end: "04/03/2018 23:59:59",
          label: "Tuesday",
        },
        {
          start: "04/04/2018 00:00:00",
          end: "04/04/2018 23:59:59",
          label: "Wednesday",
        },
        {
          start: "04/05/2018 00:00:00",
          end: "04/05/2018 23:59:59",
          label: "Thursday",
        },
        {
          start: "04/06/2018 00:00:00",
          end: "04/06/2018 23:59:59",
          label: "Friday",
        },
        {
          start: "04/07/2018 00:00:00",
          end: "04/07/2018 23:59:59",
          label: "Saturday",
        },
      ],
    },
  ],
};

function GanttWithWeeklyTask(props) {
  return (
    <>
      <h1>Gantt With Weekly Task</h1>
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

export default GanttWithWeeklyTask;
