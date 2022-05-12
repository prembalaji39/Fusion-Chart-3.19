import React from "react";
import HeatmapToShowRanking from "./HeatmapToShowRanking";
import HeatmapToShowScore from "./HeatmapToShowScore";
import HeatmapWithCategoricalValue from "./HeatmapWithCategoricalValue";
import HeatmapWithNumericValues from "./HeatmapWithNumericValues";
import HeatmapWithPercentData from "./HeatmapWithPercentData";
import HeatmapWithSingleVariantOfColor from "./HeatmapWithSingleVariantOfColor";
import SimpleTreeMap from "./SimpleTreeMap";
import TreeMapAlternateSlicing from "./TreeMapAlternateSlicing";
import TreeMapHorizontalSlicing from "./TreeMapHorizontalSlicing";
import TreeMapVerticalSlicing from "./TreeMapVerticalSlicing";
import TreeMapWithBreadCrump from "./TreeMapWithBreadCrump";
import TreeMapWithSquarifiedLayout from "./TreemapWithSquarifiedLayout";

function RenderHeatmapsAndTreemaps(props) {
  return (
    <>
      <h1>Heatmap and TreeMap - Power Charts</h1>
      <HeatmapWithNumericValues />
      <HeatmapWithPercentData />
      <HeatmapWithSingleVariantOfColor />
      <HeatmapWithCategoricalValue />
      <HeatmapToShowScore />
      <HeatmapToShowRanking />
      <SimpleTreeMap />
      <TreeMapWithBreadCrump />
      <TreeMapWithSquarifiedLayout />
      <TreeMapHorizontalSlicing />
      <TreeMapVerticalSlicing />
      <TreeMapAlternateSlicing />
    </>
  );
}

export default RenderHeatmapsAndTreemaps;
