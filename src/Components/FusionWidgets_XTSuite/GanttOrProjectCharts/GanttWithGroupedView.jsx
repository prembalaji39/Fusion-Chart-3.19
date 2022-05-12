import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    dateformat: "dd/mm/yyyy",
    outputdateformat: "ddds mns yy",
    theme: "fusion",
    ganttpaneduration: "110",
    ganttpanedurationunit: "d",
    useverticalscrolling: "0",
  },
  connectors: [
    {
      connector: [
        {
          fromtaskid: "2-A",
          totaskid: "2-B",
          color: "#FFC533",
          thickness: "2",
        },
        {
          fromtaskid: "3-A",
          totaskid: "3-B",
          color: "#FFC533",
          thickness: "2",
        },
        {
          fromtaskid: "4-A",
          totaskid: "4-B",
          color: "#FFC533",
          thickness: "2",
        },
        {
          fromtaskid: "5-A",
          totaskid: "5-B",
          color: "#FFC533",
          thickness: "2",
        },
        {
          fromtaskid: "5-A",
          totaskid: "6",
          color: "#FFC533",
          thickness: "2",
        },
      ],
    },
  ],
  tasks: {
    task: [
      {
        label: "Rescue the Princess",
        processid: "1",
        start: "1/1/2018",
        end: "30/4/2018",
        id: "1-1",
        color: "#5D62B5",
        showasgroup: "1",
      },
      {
        label: "Fight the Minions",
        processid: "2",
        start: "1/1/2018",
        end: "31/1/2018",
        id: "2-2",
        color: "#29C3BE",
        showasgroup: "1",
      },
      {
        label: "The Undeads & Bugs",
        processid: "2.1",
        start: "1/1/2018",
        end: "18/1/2018",
        id: "2-A",
        color: "#29C3BE",
        showasgroup: "0",
      },
      {
        label: "Sign",
        processid: "2.2",
        start: "18/1/2018",
        end: "31/1/2018",
        id: "2-B",
        color: "#29C3BE",
        showasgroup: "0",
      },
      {
        label: "Get to the Castle",
        processid: "3",
        start: "1/2/2018",
        end: "3/3/2018",
        id: "3-3",
        color: "#F2726F",
        showasgroup: "1",
      },
      {
        label: "Find the Map",
        processid: "3.1",
        start: "1/2/2018",
        end: "15/2/2018",
        id: "3-A",
        color: "#F2726F",
        showasgroup: "0",
      },
      {
        label: "Find the Horse",
        processid: "3.2",
        start: "15/2/2018",
        end: "3/3/2018",
        id: "3-B",
        color: "#F2726F",
        showasgroup: "0",
      },
      {
        label: "Get Past Witch",
        processid: "4",
        start: "3/3/2018",
        end: "23/3/2018",
        id: "4-4",
        color: "#62B58F",
        showasgroup: "1",
      },
      {
        label: "Shield & Eye Contact",
        processid: "4.1",
        start: "3/3/2018",
        end: "17/3/2018",
        id: "4-A",
        color: "#62B58F",
        showasgroup: "0",
      },
      {
        label: "Run when She's calm",
        processid: "4.2",
        start: "17/3/2018",
        end: "23/3/2018",
        id: "4-B",
        color: "#62B58F",
        showasgroup: "0",
      },
      {
        label: "Battle",
        processid: "5",
        start: "23/3/2018",
        end: "24/4/2018",
        id: "5-5",
        color: "#BC95DF",
        showasgroup: "1",
      },
      {
        label: "Find new Sword & Shield",
        processid: "5.1",
        start: "23/3/2018",
        end: "10/4/2018",
        id: "5-A",
        color: "#BC95DF",
        showasgroup: "0",
      },
      {
        label: "Prepare for Battle",
        processid: "5.2",
        start: "10/4/2018",
        end: "24/4/2018",
        id: "5-B",
        color: "#BC95DF",
        showasgroup: "0",
      },
      {
        label: "Marry the Princess",
        processid: "6",
        start: "24/4/2018",
        end: "30/4/2018",
        id: "6-6",
        color: "#67CDF2",
        showasgroup: "0",
      },
    ],
  },
  processes: {
    headertext: "Task",
    isanimated: "1",
    headervalign: "bottom",
    headeralign: "left",
    align: "left",
    process: [
      {
        label: "Rescue the Princess",
        id: "1",
      },
      {
        label: "Fight the Minions",
        id: "2",
      },
      {
        label: "The Undeads & Bugs",
        id: "2.1",
      },
      {
        label: "Sign",
        id: "2.2",
      },
      {
        label: "Get to the Castle",
        id: "3",
      },
      {
        label: "Find the Map",
        id: "3.1",
      },
      {
        label: "Find the Horse",
        id: "3.2",
      },
      {
        label: "Get Past Witch",
        id: "4",
      },
      {
        label: "Shield & Eye Contact",
        id: "4.1",
      },
      {
        label: "Run when She's calm",
        id: "4.2",
      },
      {
        label: "Battle",
        id: "5",
      },
      {
        label: "Find new Sword & Shield",
        id: "5.1",
      },
      {
        label: "Prepare for Battle",
        id: "5.2",
      },
      {
        label: "Marry the Princess",
        id: "6",
      },
    ],
  },
  categories: [
    {
      category: [
        {
          start: "1/1/2018",
          end: "30/4/2018",
          label: "2018",
          align: "middle",
        },
      ],
    },
    {
      align: "middle",
      category: [
        {
          start: "1/1/2018",
          end: "31/1/2018",
          label: "January",
        },
        {
          start: "1/2/2018",
          end: "28/2/2018",
          label: "February",
        },
        {
          start: "1/3/2018",
          end: "31/3/2018",
          label: "March",
        },
        {
          start: "1/4/2018",
          end: "30/4/2018",
          label: "April",
        },
      ],
    },
  ],
};

function GanttWithGroupedView(props) {
  return (
    <>
      <h1>Gantt With Grouped View</h1>
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

export default GanttWithGroupedView;
