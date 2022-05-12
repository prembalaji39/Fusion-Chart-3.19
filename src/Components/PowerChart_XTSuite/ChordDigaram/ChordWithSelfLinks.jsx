import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Migrant flow between different regions",
    subcaption:
      "The self links [regionX -> regionX] shows the internal migrations within the areas",
    showlegend: "0",
    nodelabelposition: "outside",
    theme: "fusion",
  },
  links: [
    {
      from: "North America",
      to: "North America",
      value: 96102,
    },
    {
      from: "North America",
      to: "Africa",
      value: 63080,
    },
    {
      from: "North America",
      to: "Europe",
      value: 1215929,
    },
    {
      from: "North America",
      to: "Fmr Soviet Union",
      value: 112823,
    },
    {
      from: "North America",
      to: "West Asia",
      value: 130359,
    },
    {
      from: "North America",
      to: "South Asia",
      value: 158,
    },
    {
      from: "North America",
      to: "East Asia",
      value: 39145,
    },
    {
      from: "North America",
      to: "South-East Asia",
      value: 41758,
    },
    {
      from: "North America",
      to: "Oceania",
      value: 52303,
    },
    {
      from: "North America",
      to: "Latin America",
      value: 276908,
    },
    {
      from: "Africa",
      to: "North America",
      value: 540887,
    },
    {
      from: "Africa",
      to: "Africa",
      value: 3832478,
    },
    {
      from: "Africa",
      to: "Europe",
      value: 2107883,
    },
    {
      from: "Africa",
      to: "Fmr Soviet Union",
      value: 4860,
    },
    {
      from: "Africa",
      to: "West Asia",
      value: 673004,
    },
    {
      from: "Africa",
      to: "South Asia",
      value: 244,
    },
    {
      from: "Africa",
      to: "East Asia",
      value: 3230,
    },
    {
      from: "Africa",
      to: "South-East Asia",
      value: 916,
    },
    {
      from: "Africa",
      to: "Oceania",
      value: 155988,
    },
    {
      from: "Africa",
      to: "Latin America",
      value: 12316,
    },
    {
      from: "Europe",
      to: "North America",
      value: 61217,
    },
    {
      from: "Europe",
      to: "Africa",
      value: 176905,
    },
    {
      from: "Europe",
      to: "Europe",
      value: 2401476,
    },
    {
      from: "Europe",
      to: "Fmr Soviet Union",
      value: 37517,
    },
    {
      from: "Europe",
      to: "West Asia",
      value: 136131,
    },
    {
      from: "Europe",
      to: "South Asia",
      value: 14,
    },
    {
      from: "Europe",
      to: "East Asia",
      value: 5211,
    },
    {
      from: "Europe",
      to: "South-East Asia",
      value: 6748,
    },
    {
      from: "Europe",
      to: "Oceania",
      value: 127437,
    },
    {
      from: "Europe",
      to: "Latin America",
      value: 16414,
    },
    {
      from: "Fmr Soviet Union",
      to: "North America",
      value: 21283,
    },
    {
      from: "Fmr Soviet Union",
      to: "Africa",
      value: 1701,
    },
    {
      from: "Fmr Soviet Union",
      to: "Europe",
      value: 609230,
    },
    {
      from: "Fmr Soviet Union",
      to: "Fmr Soviet Union",
      value: 1870501,
    },
    {
      from: "Fmr Soviet Union",
      to: "West Asia",
      value: 22341,
    },
    {
      from: "Fmr Soviet Union",
      to: "South Asia",
      value: 5428,
    },
    {
      from: "Fmr Soviet Union",
      to: "East Asia",
      value: 5625,
    },
    {
      from: "Fmr Soviet Union",
      to: "South-East Asia",
      value: 86,
    },
    {
      from: "Fmr Soviet Union",
      to: "Oceania",
      value: 1137,
    },
    {
      from: "Fmr Soviet Union",
      to: "Latin America",
      value: 733,
    },
    {
      from: "West Asia",
      to: "North America",
      value: 169274,
    },
    {
      from: "West Asia",
      to: "Africa",
      value: 135106,
    },
    {
      from: "West Asia",
      to: "Europe",
      value: 449623,
    },
    {
      from: "West Asia",
      to: "Fmr Soviet Union",
      value: 67967,
    },
    {
      from: "West Asia",
      to: "West Asia",
      value: 927243,
    },
    {
      from: "West Asia",
      to: "South Asia",
      value: 13532,
    },
    {
      from: "West Asia",
      to: "East Asia",
      value: 386,
    },
    {
      from: "West Asia",
      to: "South-East Asia",
      value: 3137,
    },
    {
      from: "West Asia",
      to: "Oceania",
      value: 39692,
    },
    {
      from: "West Asia",
      to: "Latin America",
      value: 9437,
    },
    {
      from: "South Asia",
      to: "North America",
      value: 1508008,
    },
    {
      from: "South Asia",
      to: "Africa",
      value: 63471,
    },
    {
      from: "South Asia",
      to: "Europe",
      value: 1390272,
    },
    {
      from: "South Asia",
      to: "Fmr Soviet Union",
      value: 15999,
    },
    {
      from: "South Asia",
      to: "West Asia",
      value: 4902081,
    },
    {
      from: "South Asia",
      to: "South Asia",
      value: 1307907,
    },
    {
      from: "South Asia",
      to: "East Asia",
      value: 73599,
    },
    {
      from: "South Asia",
      to: "South-East Asia",
      value: 525881,
    },
    {
      from: "South Asia",
      to: "Oceania",
      value: 347420,
    },
    {
      from: "South Asia",
      to: "Latin America",
      value: 6734,
    },
    {
      from: "East Asia",
      to: "North America",
      value: 1057904,
    },
    {
      from: "East Asia",
      to: "Africa",
      value: 17092,
    },
    {
      from: "East Asia",
      to: "Europe",
      value: 468762,
    },
    {
      from: "East Asia",
      to: "Fmr Soviet Union",
      value: 65366,
    },
    {
      from: "East Asia",
      to: "West Asia",
      value: 2581,
    },
    {
      from: "East Asia",
      to: "South Asia",
      value: 117,
    },
    {
      from: "East Asia",
      to: "East Asia",
      value: 781316,
    },
    {
      from: "East Asia",
      to: "South-East Asia",
      value: 145264,
    },
    {
      from: "East Asia",
      to: "Oceania",
      value: 278746,
    },
    {
      from: "East Asia",
      to: "Latin America",
      value: 35142,
    },
    {
      from: "South-East Asia",
      to: "North America",
      value: 973060,
    },
    {
      from: "South-East Asia",
      to: "Africa",
      value: 25580,
    },
    {
      from: "South-East Asia",
      to: "Europe",
      value: 601265,
    },
    {
      from: "South-East Asia",
      to: "Fmr Soviet Union",
      value: 8159,
    },
    {
      from: "South-East Asia",
      to: "West Asia",
      value: 869311,
    },
    {
      from: "South-East Asia",
      to: "South Asia",
      value: 59126,
    },
    {
      from: "South-East Asia",
      to: "East Asia",
      value: 380388,
    },
    {
      from: "South-East Asia",
      to: "South-East Asia",
      value: 1630997,
    },
    {
      from: "South East Asia",
      to: "Oceania",
      value: 333608,
    },
    {
      from: "South-East Asia",
      to: "Latin America",
      value: 6080,
    },
    {
      from: "Oceania",
      to: "North America",
      value: 27137,
    },
    {
      from: "Oceania",
      to: "Africa",
      value: 4747,
    },
    {
      from: "Oceania",
      to: "Europe",
      value: 170370,
    },
    {
      from: "Oceania",
      to: "Fmr Soviet Union",
      value: 5181,
    },
    {
      from: "Oceania",
      to: "West Asia",
      value: 11316,
    },
    {
      from: "Oceania",
      to: "South Asia",
      value: 5,
    },
    {
      from: "Oceania",
      to: "East Asia",
      value: 5659,
    },
    {
      from: "Oceania",
      to: "South-East Asia",
      value: 11883,
    },
    {
      from: "Oceania",
      to: "Oceania",
      value: 190706,
    },
    {
      from: "Oceania",
      to: "Latin America",
      value: 1785,
    },
    {
      from: "Latin America",
      to: "North America",
      value: 3627847,
    },
    {
      from: "Latin America",
      to: "Africa",
      value: 22652,
    },
    {
      from: "Latin America",
      to: "Europe",
      value: 1762587,
    },
    {
      from: "Latin America",
      to: "Fmr Soviet Union",
      value: 10553,
    },
    {
      from: "Latin America",
      to: "West Asia",
      value: 38714,
    },
    {
      from: "Latin America",
      to: "South Asia",
      value: 365,
    },
    {
      from: "Latin America",
      to: "East Asia",
      value: 112180,
    },
    {
      from: "Latin America",
      to: "South-East Asia",
      value: 2545,
    },
    {
      from: "Latin America",
      to: "Oceania",
      value: 36031,
    },
    {
      from: "Latin America",
      to: "Latin America",
      value: 879198,
    },
  ],
};

function ChordWithSelfLinks(props) {
  return (
    <>
      <h1>Chord With Self Links</h1>
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

export default ChordWithSelfLinks;
