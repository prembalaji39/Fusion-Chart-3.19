import React from "react";
import BulbIndicator from "./BulbIndicator";
import GuageWithTrend from "./GuageWithTrend";
import HorizontalLed from "./HorizontalLed";
import LinearScale from "./LinearScale";
import LinearScaleWithColorCategories from "./LinearScaleWithColorCategories";
import QuarterGauge from "./QuarterGauge";
import RatingMeter from "./RatingMeter";
import SpeedoMeter from "./SpeedoMeter";
import ThermometerDisplay from "./ThermometerDisplay";
import VerticalLed from "./VerticalLed";

function RenderGuagesAndKpi(props) {
  return (
    <>
      <h1>Guages And KPI - Fusion Widgets</h1>
      <RatingMeter />
      <SpeedoMeter />
      <QuarterGauge />
      <GuageWithTrend />
      <LinearScale />
      <LinearScaleWithColorCategories />
      <HorizontalLed />
      <VerticalLed />
      <ThermometerDisplay />
      <BulbIndicator />
    </>
  );
}

export default RenderGuagesAndKpi;
