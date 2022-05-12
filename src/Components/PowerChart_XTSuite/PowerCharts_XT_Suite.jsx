import React from "react";
import RenderChordDiagram from "./ChordDigaram";
import RenderGraphVisualizationCharts from "./GraphVisualization";
import RenderHeatmapsAndTreemaps from "./HeatMapsAndTreeMaps";
import RenderRadarCharts from "./Radar";
import RenderSankeyDiagram from "./SankeyDiagram";
import RenderStockCharts from "./StockCharts";
import RenderSunBurstCharts from "./SunBursts";
import RenderWaterfallCharts from "./Waterfall";

import FusionCharts from "fusioncharts";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import TreeMap from "fusioncharts/fusioncharts.treemap";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);
ReactFC.fcRoot(FusionCharts, TreeMap, FusionTheme);

function PowerChartsXTSuite(props) {
  return (
    <>
      <h1>PowerCharts_XT_Suite</h1>
      <RenderHeatmapsAndTreemaps />
      <RenderRadarCharts />
      <RenderWaterfallCharts />
      <RenderGraphVisualizationCharts />
      <RenderStockCharts />
      <RenderSankeyDiagram />
      <RenderSunBurstCharts />
      <RenderChordDiagram />
    </>
  );
}

export default PowerChartsXTSuite;
