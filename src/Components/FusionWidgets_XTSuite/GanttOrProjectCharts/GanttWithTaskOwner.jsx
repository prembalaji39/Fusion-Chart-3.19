import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    dateformat: "mm/dd/yyyy",
    theme: "fusion",
    useverticalscrolling: "0",
  },
  datatable: {
    headervalign: "bottom",
    datacolumn: [
      {
        headertext: "Owner",
        headervalign: "bottom",
        headeralign: "left",
        align: "left",
        text: [
          {
            label: "Product Team",
          },
          {
            label: "Marketing Team",
          },
          {
            label: "Product Team",
          },
          {
            label: "Dev Team",
          },
          {
            label: "Design Team",
          },
          {
            label: "Dev Team",
          },
          {
            label: "QA Team",
          },
          {
            label: "Product Team",
          },
          {
            label: "Marketing Team",
          },
        ],
      },
    ],
  },
  tasks: {
    task: [
      {
        start: "1/1/2018",
        end: "1/13/2018",
        color: "#5D62B5",
      },
      {
        start: "1/4/2018",
        end: "1/21/2018",
        color: "#29C3BE",
      },
      {
        start: "1/22/2018",
        end: "2/4/2018",
        color: "#5D62B5",
      },
      {
        start: "2/5/2018",
        end: "2/11/2018",
        color: "#F2726F",
      },
      {
        start: "2/12/2018",
        end: "2/18/2018",
        color: "#FFC533",
      },
      {
        start: "2/19/2018",
        end: "3/11/2018",
        color: "#F2726F",
      },
      {
        start: "3/12/2018",
        end: "3/18/2018",
        color: "#62B58F",
      },
      {
        start: "3/16/2018",
        end: "3/23/2018",
        color: "#5D62B5",
      },
      {
        start: "3/24/2018",
        end: "3/29/2018",
        color: "#29C3BE",
      },
    ],
  },
  processes: {
    align: "left",
    headertext: "Tasks",
    headervalign: "bottom",
    headeralign: "left",
    process: [
      {
        label: "PRD & User-Stories",
      },
      {
        label: "Persona & Journey",
      },
      {
        label: "Architecture",
      },
      {
        label: "Prototyping",
      },
      {
        label: "Design",
      },
      {
        label: "Development",
      },
      {
        label: "Testing & QA",
      },
      {
        label: "UAT Test",
      },
      {
        label: "Handover & Documentation",
      },
    ],
  },
  categories: [
    {
      category: [
        {
          start: "1/1/2018",
          end: "4/1/2018",
          label: "Project Pipeline for Q1-2018",
        },
      ],
    },
    {
      category: [
        {
          start: "1/1/2018",
          end: "1/31/2018",
          label: "Jan",
        },
        {
          start: "2/1/2018",
          end: "2/28/2018",
          label: "Feb",
        },
        {
          start: "3/1/2018",
          end: "4/1/2018",
          label: "Mar",
        },
      ],
    },
    {
      category: [
        {
          start: "1/1/2018",
          end: "1/7/2018",
          label: "Week 1",
        },
        {
          start: "1/8/2018",
          end: "1/14/2018",
          label: "Week 2",
        },
        {
          start: "1/15/2018",
          end: "1/21/2018",
          label: "Week 3",
        },
        {
          start: "1/22/2018",
          end: "1/28/2018",
          label: "Week 4",
        },
        {
          start: "1/29/2018",
          end: "2/4/2018",
          label: "Week 5",
        },
        {
          start: "2/5/2018",
          end: "2/11/2018",
          label: "Week 6",
        },
        {
          start: "2/12/2018",
          end: "2/18/2018",
          label: "Week 7",
        },
        {
          start: "2/19/2018",
          end: "2/25/2018",
          label: "Week 8",
        },
        {
          start: "2/26/2018",
          end: "3/4/2018",
          label: "Week 9",
        },
        {
          start: "3/5/2018",
          end: "3/11/2018",
          label: "Week 10",
        },
        {
          start: "3/12/2018",
          end: "3/18/2018",
          label: "Week 11",
        },
        {
          start: "3/19/2018",
          end: "3/25/2018",
          label: "Week 12",
        },
        {
          start: "3/26/2018",
          end: "4/1/2018",
          label: "Week 13",
        },
      ],
    },
  ],
};

function GanttWithTaskOwner(props) {
  return (
    <>
      <h1>Gantt With Task Owner</h1>
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

export default GanttWithTaskOwner;
