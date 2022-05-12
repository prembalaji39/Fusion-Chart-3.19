import React from "react";
import HorizontalBulletGraph from "./HorizontalBulletGraph";
import HorizontalBulletWithDot from "./HorizontalBulletWithDot";
import SimpleSparkColumn from "./SimpleSparkColumn";
import SimpleSparkLine from "./SimpleSparkLine";
import SparkColumnWithPeriodIndicator from "./SparkColumnWithPeriodIndicator";
import SparkLineWithDots from "./SparkLineWithDots";
import SparkLineWithPeriodIndicator from "./SparkLineWithPeriodIndicator";
import VerticalBulletGraph from "./VerticalBulletGraph";
import WinOrLossChart from "./WinOrLossChart";

function RenderBulletsAndSparkCharts(props) {
  return (
    <>
      <h1>Render Bullet And Spark Charts</h1>
      <HorizontalBulletGraph />
      <HorizontalBulletWithDot />
      <VerticalBulletGraph />
      <SimpleSparkLine />
      <SparkLineWithPeriodIndicator />
      <SparkLineWithDots />
      <SimpleSparkColumn />
      <SparkColumnWithPeriodIndicator />
      <WinOrLossChart />
    </>
  );
}

export default RenderBulletsAndSparkCharts;
