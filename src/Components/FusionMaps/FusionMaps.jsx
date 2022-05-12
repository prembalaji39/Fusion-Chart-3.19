import React from "react";
import AverageTemparatureInUS from "./AverageTemparatureInUS";
import FertilityRateInUS from "./FertilityRateInUS";
import GreenHouseGasEmission from "./GreenHouseGasEmission";
import PopulationGrowth from "./PopulationGrowth";
import SaleOfCigaratte from "./SaleOfCigaratte";
import ShippingRouteInUs from "./ShippingRouteInUs";
import TelevisonExposureInUs from "./TelevisonExposureInUs";
import WeWorkOfficeLocation from "./WeWorkOfficeLocation";

import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import Usa from 'fusioncharts/maps/fusioncharts.usa';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);
ReactFC.fcRoot(FusionCharts, Maps, Usa, FusionTheme);

function FusionMaps(props) {
  return (
    <>
      <h1>Fusion Maps</h1>
      <SaleOfCigaratte />
      <PopulationGrowth />
      <WeWorkOfficeLocation />
      <ShippingRouteInUs />
      <AverageTemparatureInUS />
      <TelevisonExposureInUs />
      <FertilityRateInUS />
      <GreenHouseGasEmission />
    </>
  );
}

export default FusionMaps;
