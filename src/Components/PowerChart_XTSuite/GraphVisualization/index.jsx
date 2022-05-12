import React from "react";
import AddRemoveNodesFromChart from "./AddRemoveNodesFromChart";
import NetworkVisualization from "./NetworkVisualization";
import OrgChart from "./OrgChart";
import SequenceFlowVisualization from "./SequenceFlowVisualization";
import SimpleGraphLayout from "./SimpleGraphLayout";
import StationMapChart from "./StationMapChart";

function RenderGraphVisualizationCharts(props) {
  return (
    <>
      <h1>Graph Visualaization Charts</h1>
      <SimpleGraphLayout />
      <StationMapChart />
      <NetworkVisualization />
      <SequenceFlowVisualization />
      <AddRemoveNodesFromChart />
      <OrgChart />
    </>
  );
}

export default RenderGraphVisualizationCharts;
