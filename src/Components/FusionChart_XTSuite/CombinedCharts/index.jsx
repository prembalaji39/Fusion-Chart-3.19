import React from "react";
import DualAxisColumnLineAreaWithScrolling from "./DualAxisColumnLineAreaWithScrolling";
import SameAxisColumnLineArea from "./SameAxisColumnLineArea";
import SameAxisColumnLineAreaWithScrolling from "./SameAxisColumnLineAreaWithScrolling";

function RenderCombinedCharts(props) {
  return (
    <>
      <h1>Combined Charts - FusionChart_XTSuite</h1>
      <SameAxisColumnLineArea />
      <SameAxisColumnLineAreaWithScrolling />
      <DualAxisColumnLineAreaWithScrolling />
    </>
  );
}

export default RenderCombinedCharts;
