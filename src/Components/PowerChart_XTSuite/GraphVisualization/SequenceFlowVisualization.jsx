import React from "react";

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Process Involved During Course Design",
    yaxismaxvalue: "1100",
    yaxisminvalue: "0",
    theme: "fusion",
    valuefontsize: "12",
    viewmode: "1",
    valuefontcolor: "#FFFFFF",
    plotfillhovercolor: "#1A237E",
    divlinealpha: "0",
  },
  dataset: [
    {
      data: [
        {
          id: "01",
          x: "15",
          y: "1000",
          label: "Kick Off{br}meeting",
          shape: "rectangle",
          color: "#5D62B5",
          width: "100",
          height: "60",
          hovercolor: "#1A237E",
        },
        {
          id: "02",
          x: "15",
          y: "800",
          label: "Review existing{br}course materials",
          color: "#29C3BE",
          shape: "rectangle",
          width: "100",
          height: "60",
        },
        {
          id: "03",
          x: "15",
          y: "600",
          label:
            "Collaborate on{br}course topics,{br}outcomes,{br}objectives,etc.",
          color: "#F2726F",
          shape: "rectangle",
          width: "100",
          height: "60",
        },
        {
          id: "04",
          x: "15",
          y: "350",
          label: "Finalize outcomes{br}& objectives.",
          color: "#FFC533",
          shape: "polygon",
          radius: "60",
        },
        {
          id: "05",
          x: "15",
          y: "100",
          label: "Complete Course{br}blueprint.",
          color: "#62B58F",
          shape: "rectangle",
          width: "100",
          height: "60",
        },
        {
          id: "06",
          x: "45",
          y: "100",
          label: "Discuss{br}assessments of{br} course outcomes.",
          color: "#BC95DF",
          shape: "rectangle",
          width: "100",
          height: "60",
        },
        {
          id: "07",
          x: "45",
          y: "350",
          label: "Align assessments{br} to outcomes.",
          color: "#F2726F",
          shape: "rectangle",
          width: "100",
          height: "60",
        },
        {
          id: "08",
          x: "45",
          y: "600",
          label: "Develop{br}assessments for{br}online delivery.",
          color: "#FFC533",
          shape: "polygon",
          radius: "60",
        },
        {
          id: "09",
          x: "45",
          y: "800",
          label: "Update Course{br} blueprint with{br} assessment info.",
          color: "#C7D631",
          shape: "rectangle",
          width: "100",
          height: "60",
        },
        {
          id: "10",
          x: "45",
          y: "1000",
          label: "Determine weekly{br} activities and{br}materials",
          color: "#FFC533",
          shape: "polygon",
          radius: "60",
        },
        {
          id: "11",
          x: "75",
          y: "1000",
          label: "Update Course{br}blueprint with{br}weekly activities",
          color: "#C7D631",
          shape: "rectangle",
          width: "100",
          height: "60",
        },
        {
          id: "12",
          x: "75",
          y: "800",
          label: "Build course{br}carmen",
          color: "#BC95DF",
          shape: "rectangle",
          width: "100",
          height: "60",
        },
        {
          id: "13",
          x: "75",
          y: "600",
          label: "Complete syllabus{br}templete",
          color: "#C7D631",
          shape: "rectangle",
          width: "100",
          height: "60",
        },
        {
          id: "14",
          x: "75",
          y: "350",
          label: "Review course{br}(Faculty)",
          color: "#FFC533",
          shape: "polygon",
          radius: "60",
        },
        {
          id: "15",
          x: "75",
          label: "Course{br}complete",
          y: "100",
          shape: "rectangle",
          color: "#5D62B5",
          width: "100",
          height: "60",
        },
      ],
    },
  ],
  connectors: [
    {
      connector: [
        {
          from: "01",
          to: "02",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "02",
          to: "03",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "03",
          to: "04",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "04",
          to: "05",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "05",
          to: "06",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "06",
          to: "07",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "07",
          to: "08",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "08",
          to: "09",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "09",
          to: "10",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "10",
          to: "11",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "11",
          to: "12",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "12",
          to: "13",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "13",
          to: "14",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
        {
          from: "14",
          to: "15",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50",
        },
      ],
    },
  ],
};

function SequenceFlowVisualization(props) {
  return (
    <>
      <h1>Sequence Flow Visualization</h1>
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

export default SequenceFlowVisualization;
