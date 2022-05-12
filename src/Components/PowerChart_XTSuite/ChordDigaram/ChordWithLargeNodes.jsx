import React from "react";

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Fouls in FIFA, 2018",
    subcaption:
      "Exchange of fouls between different playing nations; Color of the link showing the winner in the fouls-battle",
    theme: "fusion",
    palettecolors: "#1E1A19, #1849CA, #7F60AE, #81A753, #9F000E, #DF7C00",
    chordradius: 100,
    showlegend: 0,
    nodelabelposition: "tangential",
    linkaplha: 40,
    nodealpha: 50,
  },
  nodes: [
    {
      label: "Spain",
    },
    {
      label: "Portugal",
    },
    {
      label: "Iran",
    },
    {
      label: "Russia",
    },
    {
      label: "Morocco",
    },
    {
      label: "England",
    },
    {
      label: "Belgium",
    },
    {
      label: "Sweden",
    },
    {
      label: "Croatia",
    },
    {
      label: "Colombia",
    },
    {
      label: "Tunisia",
    },
    {
      label: "Panama",
    },
    {
      label: "Germany",
    },
    {
      label: "Korea Republic",
    },
    {
      label: "Mexico",
    },
    {
      label: "France",
    },
    {
      label: "Denmark",
    },
    {
      label: "Australia",
    },
    {
      label: "Argentina",
    },
    {
      label: "Peru",
    },
    {
      label: "Uruguay",
    },
    {
      label: "Brazil",
    },
    {
      label: "Japan",
    },
    {
      label: "Switzerland",
    },
    {
      label: "Costa Rica",
    },
    {
      label: "Serbia",
    },
    {
      label: "Iceland",
    },
    {
      label: "Nigeria",
    },
    {
      label: "Poland",
    },
    {
      label: "Senegal",
    },
    {
      label: "Egypt",
    },
    {
      label: "Saudi Arabia",
    },
  ],
  links: [
    {
      from: "Spain",
      to: "Portugal",
      value: 10,
    },
    {
      from: "Spain",
      to: "Iran",
      value: 14,
    },
    {
      from: "Spain",
      to: "Russia",
      value: 5,
    },
    {
      from: "Spain",
      to: "Morocco",
      value: 5,
    },
    {
      from: "England",
      to: "Belgium",
      value: 16,
    },
    {
      from: "England",
      to: "Sweden",
      value: 7,
    },
    {
      from: "England",
      to: "Croatia",
      value: 15,
    },
    {
      from: "England",
      to: "Colombia",
      value: 14,
    },
    {
      from: "England",
      to: "Tunisia",
      value: 8,
    },
    {
      from: "England",
      to: "Panama",
      value: 13,
    },
    {
      from: "Germany",
      to: "Sweden",
      value: 12,
    },
    {
      from: "Germany",
      to: "Korea Republic",
      value: 7,
    },
    {
      from: "Germany",
      to: "Mexico",
      value: 10,
    },
    {
      from: "France",
      to: "Belgium",
      value: 8,
    },
    {
      from: "France",
      to: "Denmark",
      value: 10,
    },
    {
      from: "France",
      to: "Australia",
      value: 16,
    },
    {
      from: "France",
      to: "Croatia",
      value: 13,
    },
    {
      from: "France",
      to: "Argentina",
      value: 23,
    },
    {
      from: "France",
      to: "Peru",
      value: 11,
    },
    {
      from: "France",
      to: "Uruguay",
      value: 16,
    },
    {
      from: "Belgium",
      to: "England",
      value: 26,
    },
    {
      from: "Belgium",
      to: "France",
      value: 16,
    },
    {
      from: "Belgium",
      to: "Brazil",
      value: 16,
    },
    {
      from: "Belgium",
      to: "Japan",
      value: 13,
    },
    {
      from: "Belgium",
      to: "Tunisia",
      value: 12,
    },
    {
      from: "Belgium",
      to: "Panama",
      value: 17,
    },
    {
      from: "Brazil",
      to: "Belgium",
      value: 14,
    },
    {
      from: "Brazil",
      to: "Switzerland",
      value: 11,
    },
    {
      from: "Brazil",
      to: "Mexico",
      value: 7,
    },
    {
      from: "Brazil",
      to: "Costa Rica",
      value: 13,
    },
    {
      from: "Brazil",
      to: "Serbia",
      value: 7,
    },
    {
      from: "Switzerland",
      to: "Brazil",
      value: 19,
    },
    {
      from: "Switzerland",
      to: "Sweden",
      value: 13,
    },
    {
      from: "Switzerland",
      to: "Costa Rica",
      value: 9,
    },
    {
      from: "Switzerland",
      to: "Serbia",
      value: 13,
    },
    {
      from: "Sweden",
      to: "England",
      value: 11,
    },
    {
      from: "Sweden",
      to: "Germany",
      value: 14,
    },
    {
      from: "Sweden",
      to: "Switzerland",
      value: 11,
    },
    {
      from: "Sweden",
      to: "Korea Republic",
      value: 20,
    },
    {
      from: "Sweden",
      to: "Mexico",
      value: 11,
    },
    {
      from: "Denmark",
      to: "France",
      value: 10,
    },
    {
      from: "Denmark",
      to: "Australia",
      value: 8,
    },
    {
      from: "Denmark",
      to: "Croatia",
      value: 19,
    },
    {
      from: "Denmark",
      to: "Peru",
      value: 18,
    },
    {
      from: "Iceland",
      to: "Croatia",
      value: 11,
    },
    {
      from: "Iceland",
      to: "Argentina",
      value: 15,
    },
    {
      from: "Iceland",
      to: "Nigeria",
      value: 10,
    },
    {
      from: "Australia",
      to: "France",
      value: 19,
    },
    {
      from: "Australia",
      to: "Denmark",
      value: 5,
    },
    {
      from: "Australia",
      to: "Peru",
      value: 12,
    },
    {
      from: "Croatia",
      to: "England",
      value: 24,
    },
    {
      from: "Croatia",
      to: "France",
      value: 13,
    },
    {
      from: "Croatia",
      to: "Denmark",
      value: 5,
    },
    {
      from: "Croatia",
      to: "Iceland",
      value: 11,
    },
    {
      from: "Croatia",
      to: "Argentina",
      value: 22,
    },
    {
      from: "Croatia",
      to: "Russia",
      value: 19,
    },
    {
      from: "Croatia",
      to: "Nigeria",
      value: 20,
    },
    {
      from: "Portugal",
      to: "Spain",
      value: 12,
    },
    {
      from: "Portugal",
      to: "Iran",
      value: 12,
    },
    {
      from: "Portugal",
      to: "Uruguay",
      value: 14,
    },
    {
      from: "Portugal",
      to: "Morocco",
      value: 19,
    },
    {
      from: "Iran",
      to: "Spain",
      value: 14,
    },
    {
      from: "Iran",
      to: "Portugal",
      value: 18,
    },
    {
      from: "Iran",
      to: "Morocco",
      value: 14,
    },
    {
      from: "Argentina",
      to: "France",
      value: 16,
    },
    {
      from: "Argentina",
      to: "Iceland",
      value: 10,
    },
    {
      from: "Argentina",
      to: "Croatia",
      value: 17,
    },
    {
      from: "Argentina",
      to: "Nigeria",
      value: 16,
    },
    {
      from: "Colombia",
      to: "England",
      value: 25,
    },
    {
      from: "Colombia",
      to: "Japan",
      value: 15,
    },
    {
      from: "Colombia",
      to: "Poland",
      value: 9,
    },
    {
      from: "Colombia",
      to: "Senegal",
      value: 15,
    },
    {
      from: "Japan",
      to: "Belgium",
      value: 9,
    },
    {
      from: "Japan",
      to: "Colombia",
      value: 10,
    },
    {
      from: "Japan",
      to: "Poland",
      value: 11,
    },
    {
      from: "Japan",
      to: "Senegal",
      value: 8,
    },
    {
      from: "Poland",
      to: "Colombia",
      value: 15,
    },
    {
      from: "Poland",
      to: "Japan",
      value: 8,
    },
    {
      from: "Poland",
      to: "Senegal",
      value: 6,
    },
    {
      from: "Russia",
      to: "Spain",
      value: 20,
    },
    {
      from: "Russia",
      to: "Croatia",
      value: 24,
    },
    {
      from: "Russia",
      to: "Uruguay",
      value: 19,
    },
    {
      from: "Russia",
      to: "Egypt",
      value: 10,
    },
    {
      from: "Russia",
      to: "Saudi Arabia",
      value: 22,
    },
    {
      from: "Korea Republic",
      to: "Germany",
      value: 16,
    },
    {
      from: "Korea Republic",
      to: "Sweden",
      value: 23,
    },
    {
      from: "Korea Republic",
      to: "Mexico",
      value: 23,
    },
    {
      from: "Mexico",
      to: "Germany",
      value: 18,
    },
    {
      from: "Mexico",
      to: "Brazil",
      value: 18,
    },
    {
      from: "Mexico",
      to: "Sweden",
      value: 14,
    },
    {
      from: "Mexico",
      to: "Korea Republic",
      value: 7,
    },
    {
      from: "Peru",
      to: "France",
      value: 15,
    },
    {
      from: "Peru",
      to: "Denmark",
      value: 10,
    },
    {
      from: "Peru",
      to: "Australia",
      value: 12,
    },
    {
      from: "Uruguay",
      to: "France",
      value: 18,
    },
    {
      from: "Uruguay",
      to: "Portugal",
      value: 13,
    },
    {
      from: "Uruguay",
      to: "Russia",
      value: 17,
    },
    {
      from: "Uruguay",
      to: "Egypt",
      value: 6,
    },
    {
      from: "Uruguay",
      to: "Saudi Arabia",
      value: 10,
    },
    {
      from: "Egypt",
      to: "Russia",
      value: 10,
    },
    {
      from: "Egypt",
      to: "Uruguay",
      value: 12,
    },
    {
      from: "Egypt",
      to: "Saudi Arabia",
      value: 16,
    },
    {
      from: "Morocco",
      to: "Spain",
      value: 20,
    },
    {
      from: "Morocco",
      to: "Portugal",
      value: 22,
    },
    {
      from: "Morocco",
      to: "Iran",
      value: 22,
    },
    {
      from: "Tunisia",
      to: "England",
      value: 14,
    },
    {
      from: "Tunisia",
      to: "Belgium",
      value: 13,
    },
    {
      from: "Tunisia",
      to: "Panama",
      value: 19,
    },
    {
      from: "Saudi Arabia",
      to: "Russia",
      value: 10,
    },
    {
      from: "Saudi Arabia",
      to: "Uruguay",
      value: 13,
    },
    {
      from: "Saudi Arabia",
      to: "Egypt",
      value: 7,
    },
    {
      from: "Nigeria",
      to: "Iceland",
      value: 9,
    },
    {
      from: "Nigeria",
      to: "Croatia",
      value: 16,
    },
    {
      from: "Nigeria",
      to: "Argentina",
      value: 20,
    },
    {
      from: "Costa Rica",
      to: "Brazil",
      value: 12,
    },
    {
      from: "Costa Rica",
      to: "Switzerland",
      value: 16,
    },
    {
      from: "Costa Rica",
      to: "Serbia",
      value: 17,
    },
    {
      from: "Serbia",
      to: "Brazil",
      value: 14,
    },
    {
      from: "Serbia",
      to: "Switzerland",
      value: 18,
    },
    {
      from: "Serbia",
      to: "Costa Rica",
      value: 14,
    },
    {
      from: "Panama",
      to: "England",
      value: 14,
    },
    {
      from: "Panama",
      to: "Belgium",
      value: 20,
    },
    {
      from: "Panama",
      to: "Tunisia",
      value: 18,
    },
    {
      from: "Senegal",
      to: "Colombia",
      value: 15,
    },
    {
      from: "Senegal",
      to: "Japan",
      value: 15,
    },
    {
      from: "Senegal",
      to: "Poland",
      value: 15,
    },
  ],
};
function ChordWithLargeNodes(props) {
  return (
    <>
      <h1>Chord With Large Nodes</h1>
      <ReactFusioncharts
        type="chord"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default ChordWithLargeNodes;
