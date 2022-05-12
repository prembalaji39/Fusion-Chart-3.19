import React from "react";
import Funnel3DChart from "./Funnel3DChart";
import FunnelWithPartToWhole from "./FunnelWithPartToWhole";
import FunnelWithPercentage from "./FunnelWithPercentage";
import SimpleFunnel from "./SimpleFunnel";
import SimplePyramid from "./SimplePyramid";
import SimplePyramidWithPercentage from "./SimplePyramidWithPercentage";

function RenderFunnelAndPyramidCharts(props) {
  return (
    <>
      <h1>Funnel And Pyramid Charts</h1>
      <SimpleFunnel />
      <FunnelWithPercentage />
      <Funnel3DChart />
      <FunnelWithPartToWhole />
      <SimplePyramid />
      <SimplePyramidWithPercentage />
    </>
  );
}

export default RenderFunnelAndPyramidCharts;
