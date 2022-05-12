import React from "react";
import GanttWithDependentTask from "./GanttWithDependentTask";
import GanttWithGroupedView from "./GanttWithGroupedView";
import GanttWithHourlyTask from "./GanttWithHourlyTask";
import GanttWithMileStoneIndicator from "./GanttWithMileStoneIndicator";
import GanttWithProgressIndicator from "./GanttWithProgressIndicator";
import GanttWithShowingsVsActuals from "./GanttWithShowingsVsActuals";
import GanttWithTaskOwner from "./GanttWithTaskOwner";
import GanttWithWeeklyTask from "./GanttWithWeeklyTask";
import MachineOperatingSchedule from "./MachineOperatingSchedule";
import SimpleGanttChart from "./SimpleGanttChart";

function RenderGanttOrProjectCharts(props) {
  return (
    <>
      <h1>Gantt Or Project Charts</h1>
      <SimpleGanttChart />
      <GanttWithProgressIndicator />
      <GanttWithTaskOwner />
      <GanttWithGroupedView />
      <GanttWithShowingsVsActuals />
      <GanttWithWeeklyTask />
      <GanttWithHourlyTask />
      <GanttWithMileStoneIndicator />
      <GanttWithDependentTask />
      <MachineOperatingSchedule />
    </>
  );
}

export default RenderGanttOrProjectCharts;
