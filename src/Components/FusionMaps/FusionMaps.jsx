import React from "react";
import AverageTemparatureInUS from "./AverageTemparatureInUS";
import FertilityRateInUS from "./FertilityRateInUS";
import GreenHouseGasEmission from "./GreenHouseGasEmission";
import PopulationGrowth from "./PopulationGrowth";
import SaleOfCigaratte from "./SaleOfCigaratte";
import ShippingRouteInUs from "./ShippingRouteInUs";
import TelevisonExposureInUs from "./TelevisonExposureInUs";
import WeWorkOfficeLocation from "./WeWorkOfficeLocation";

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
