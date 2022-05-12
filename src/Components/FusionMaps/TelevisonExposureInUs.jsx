import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    theme: "fusion",
    caption: "Homes with TVs in US by DMA",
    showlabels: "0",
    nullentitycolor: "#4FCAF6",
    legendcaption: "Homes with TVs",
    entitytooltext: "$lname {br} Homes with TV: $datavalue ",
  },
  colorrange: {
    gradient: "0",
    color: [
      {
        minvalue: "0",
        maxvalue: "50000",
        displayvalue: "0 - 50000",
        code: "#F0F1F9",
      },
      {
        minvalue: "50000",
        maxvalue: "100000",
        displayvalue: "50000 - 100000",
        code: "#D6DBEF",
      },
      {
        minvalue: "100000",
        maxvalue: "500000",
        displayvalue: "100000 - 500000",
        code: "#B8C3E4",
      },
      {
        minvalue: "500000",
        maxvalue: "1000000",
        displayvalue: "500000 - 1000000",
        code: "#9DA6D4",
      },
      {
        minvalue: "1000000",
        maxvalue: "2000000",
        displayvalue: "1000000 - 2000000",
        code: "#8390C8",
      },
      {
        minvalue: "2000000",
        maxvalue: "9000000",
        displayvalue: "> 2000000",
        code: "#7570B3",
      },
    ],
  },
  data: [
    {
      value: "389530",
      id: "500",
    },
    {
      value: "7384340",
      id: "501",
    },
    {
      value: "133420",
      id: "502",
    },
    {
      value: "241170",
      id: "503",
    },
    {
      value: "2949310",
      id: "504",
    },
    {
      value: "1845920",
      id: "505",
    },
    {
      value: "2366690",
      id: "506",
    },
    {
      value: "334750",
      id: "507",
    },
    {
      value: "1165740",
      id: "508",
    },
    {
      value: "265390",
      id: "509",
    },
    {
      value: "1485140",
      id: "510",
    },
    {
      value: "2359160",
      id: "511",
    },
    {
      value: "1085070",
      id: "512",
    },
    {
      value: "446010",
      id: "513",
    },
    {
      value: "632150",
      id: "514",
    },
    {
      value: "897890",
      id: "515",
    },
    {
      value: "155190",
      id: "516",
    },
    {
      value: "1136420",
      id: "517",
    },
    {
      value: "695100",
      id: "518",
    },
    {
      value: "316080",
      id: "519",
    },
    {
      value: "257730",
      id: "520",
    },
    {
      value: "606400",
      id: "521",
    },
    {
      value: "216920",
      id: "522",
    },
    {
      value: "316910",
      id: "523",
    },
    {
      value: "2326840",
      id: "524",
    },
    {
      value: "150110",
      id: "525",
    },
    {
      value: "102890",
      id: "526",
    },
    {
      value: "1089700",
      id: "527",
    },
    {
      value: "1621130",
      id: "528",
    },
    {
      value: "670880",
      id: "529",
    },
    {
      value: "273120",
      id: "530",
    },
    {
      value: "319060",
      id: "531",
    },
    {
      value: "540050",
      id: "532",
    },
    {
      value: "996550",
      id: "533",
    },
    {
      value: "1453170",
      id: "534",
    },
    {
      value: "930460",
      id: "535",
    },
    {
      value: "260000",
      id: "536",
    },
    {
      value: "138040",
      id: "537",
    },
    {
      value: "395680",
      id: "538",
    },
    {
      value: "1806560",
      id: "539",
    },
    {
      value: "241800",
      id: "540",
    },
    {
      value: "485630",
      id: "541",
    },
    {
      value: "498270",
      id: "542",
    },
    {
      value: "252950",
      id: "543",
    },
    {
      value: "709730",
      id: "544",
    },
    {
      value: "303280",
      id: "545",
    },
    {
      value: "398510",
      id: "546",
    },
    {
      value: "409550",
      id: "547",
    },
    {
      value: "794310",
      id: "548",
    },
    {
      value: "92590",
      id: "549",
    },
    {
      value: "188420",
      id: "550",
    },
    {
      value: "251140",
      id: "551",
    },
    {
      value: "29250",
      id: "552",
    },
    {
      value: "84640",
      id: "553",
    },
    {
      value: "130110",
      id: "554",
    },
    {
      value: "377550",
      id: "555",
    },
    {
      value: "553390",
      id: "556",
    },
    {
      value: "520890",
      id: "557",
    },
    {
      value: "51240",
      id: "558",
    },
    {
      value: "134410",
      id: "559",
    },
    {
      value: "1150350",
      id: "560",
    },
    {
      value: "659170",
      id: "561",
    },
    {
      value: "720150",
      id: "563",
    },
    {
      value: "455490",
      id: "564",
    },
    {
      value: "95530",
      id: "565",
    },
    {
      value: "716990",
      id: "566",
    },
    {
      value: "846030",
      id: "567",
    },
    {
      value: "90260",
      id: "569",
    },
    {
      value: "285550",
      id: "570",
    },
    {
      value: "502050",
      id: "571",
    },
    {
      value: "445470",
      id: "573",
    },
    {
      value: "288100",
      id: "574",
    },
    {
      value: "353710",
      id: "575",
    },
    {
      value: "157830",
      id: "576",
    },
    {
      value: "581020",
      id: "577",
    },
    {
      value: "139600",
      id: "581",
    },
    {
      value: "66240",
      id: "582",
    },
    {
      value: "16910",
      id: "583",
    },
    {
      value: "74340",
      id: "584",
    },
    {
      value: "319860",
      id: "588",
    },
    {
      value: "123430",
      id: "592",
    },
    {
      value: "32940",
      id: "596",
    },
    {
      value: "62620",
      id: "597",
    },
    {
      value: "106480",
      id: "598",
    },
    {
      value: "203730",
      id: "600",
    },
    {
      value: "3484800",
      id: "602",
    },
    {
      value: "151200",
      id: "603",
    },
    {
      value: "173640",
      id: "604",
    },
    {
      value: "176160",
      id: "605",
    },
    {
      value: "107110",
      id: "606",
    },
    {
      value: "1243490",
      id: "609",
    },
    {
      value: "179240",
      id: "610",
    },
    {
      value: "143330",
      id: "611",
    },
    {
      value: "384410",
      id: "612",
    },
    {
      value: "1728050",
      id: "613",
    },
    {
      value: "931320",
      id: "616",
    },
    {
      value: "902190",
      id: "617",
    },
    {
      value: "2215650",
      id: "618",
    },
    {
      value: "414570",
      id: "619",
    },
    {
      value: "641550",
      id: "622",
    },
    {
      value: "2588020",
      id: "623",
    },
    {
      value: "154830",
      id: "624",
    },
    {
      value: "349540",
      id: "625",
    },
    {
      value: "31560",
      id: "626",
    },
    {
      value: "158500",
      id: "627",
    },
    {
      value: "175960",
      id: "628",
    },
    {
      value: "717530",
      id: "630",
    },
    {
      value: "46730",
      id: "631",
    },
    {
      value: "388340",
      id: "632",
    },
    {
      value: "147730",
      id: "633",
    },
    {
      value: "197110",
      id: "634",
    },
    {
      value: "705280",
      id: "635",
    },
    {
      value: "364160",
      id: "636",
    },
    {
      value: "342610",
      id: "637",
    },
    {
      value: "46180",
      id: "638",
    },
    {
      value: "93090",
      id: "639",
    },
    {
      value: "662830",
      id: "640",
    },
    {
      value: "881050",
      id: "641",
    },
    {
      value: "229320",
      id: "642",
    },
    {
      value: "94610",
      id: "643",
    },
    {
      value: "89280",
      id: "644",
    },
    {
      value: "66410",
      id: "647",
    },
    {
      value: "378720",
      id: "648",
    },
    {
      value: "284040",
      id: "649",
    },
    {
      value: "718770",
      id: "650",
    },
    {
      value: "159840",
      id: "651",
    },
    {
      value: "414060",
      id: "652",
    },
    {
      value: "129390",
      id: "656",
    },
    {
      value: "126930",
      id: "657",
    },
    {
      value: "441800",
      id: "658",
    },
    {
      value: "1014910",
      id: "659",
    },
    {
      value: "55820",
      id: "661",
    },
    {
      value: "114080",
      id: "662",
    },
    {
      value: "376670",
      id: "669",
    },
    {
      value: "297590",
      id: "670",
    },
    {
      value: "526960",
      id: "671",
    },
    {
      value: "184990",
      id: "673",
    },
    {
      value: "244050",
      id: "675",
    },
    {
      value: "169610",
      id: "676",
    },
    {
      value: "450300",
      id: "678",
    },
    {
      value: "427860",
      id: "679",
    },
    {
      value: "303800",
      id: "682",
    },
    {
      value: "525990",
      id: "686",
    },
    {
      value: "150000",
      id: "687",
    },
    {
      value: "390590",
      id: "691",
    },
    {
      value: "167110",
      id: "692",
    },
    {
      value: "561760",
      id: "693",
    },
    {
      value: "241930",
      id: "698",
    },
    {
      value: "211670",
      id: "702",
    },
    {
      value: "179450",
      id: "705",
    },
    {
      value: "268150",
      id: "709",
    },
    {
      value: "109950",
      id: "710",
    },
    {
      value: "68860",
      id: "711",
    },
    {
      value: "329620",
      id: "716",
    },
    {
      value: "103520",
      id: "717",
    },
    {
      value: "331500",
      id: "718",
    },
    {
      value: "276790",
      id: "722",
    },
    {
      value: "243890",
      id: "724",
    },
    {
      value: "258460",
      id: "725",
    },
    {
      value: "80740",
      id: "734",
    },
    {
      value: "78780",
      id: "736",
    },
    {
      value: "52530",
      id: "737",
    },
    {
      value: "14720",
      id: "740",
    },
    {
      value: "156280",
      id: "743",
    },
    {
      value: "437790",
      id: "744",
    },
    {
      value: "37920",
      id: "745",
    },
    {
      value: "128300",
      id: "746",
    },
    {
      value: "26320",
      id: "747",
    },
    {
      value: "72590",
      id: "749",
    },
    {
      value: "1566460",
      id: "751",
    },
    {
      value: "343990",
      id: "752",
    },
    {
      value: "1812040",
      id: "753",
    },
    {
      value: "67180",
      id: "754",
    },
    {
      value: "65930",
      id: "755",
    },
    {
      value: "109730",
      id: "756",
    },
    {
      value: "259090",
      id: "757",
    },
    {
      value: "125710",
      id: "758",
    },
    {
      value: "56350",
      id: "759",
    },
    {
      value: "64100",
      id: "760",
    },
    {
      value: "113010",
      id: "762",
    },
    {
      value: "98020",
      id: "764",
    },
    {
      value: "339130",
      id: "765",
    },
    {
      value: "28260",
      id: "766",
    },
    {
      value: "55270",
      id: "767",
    },
    {
      value: "917370",
      id: "770",
    },
    {
      value: "113230",
      id: "771",
    },
    {
      value: "70580",
      id: "773",
    },
    {
      value: "438440",
      id: "789",
    },
    {
      value: "691450",
      id: "790",
    },
    {
      value: "4050",
      id: "798",
    },
    {
      value: "221740",
      id: "800",
    },
    {
      value: "235570",
      id: "801",
    },
    {
      value: "59610",
      id: "802",
    },
    {
      value: "5613460",
      id: "803",
    },
    {
      value: "154560",
      id: "804",
    },
    {
      value: "2502030",
      id: "807",
    },
    {
      value: "231950",
      id: "810",
    },
    {
      value: "265600",
      id: "811",
    },
    {
      value: "167820",
      id: "813",
    },
    {
      value: "1818900",
      id: "819",
    },
    {
      value: "1182180",
      id: "820",
    },
    {
      value: "62950",
      id: "821",
    },
    {
      value: "1075120",
      id: "825",
    },
    {
      value: "224240",
      id: "828",
    },
    {
      value: "718990",
      id: "839",
    },
    {
      value: "231950",
      id: "855",
    },
    {
      value: "1387710",
      id: "862",
    },
    {
      value: "576820",
      id: "866",
    },
    {
      value: "191500",
      id: "868",
    },
    {
      value: "420640",
      id: "881",
    },
  ],
};

function TelevisonExposureInUs(props) {
  return (
    <>
      <h1>Television Exposure In US</h1>
      <ReactFusioncharts
        type="maps/usadma"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default TelevisonExposureInUs;
