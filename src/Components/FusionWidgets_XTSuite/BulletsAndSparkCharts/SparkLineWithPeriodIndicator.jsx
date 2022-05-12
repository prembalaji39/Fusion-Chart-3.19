import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Amazon Inc. Stock Price",
    subcaption: "Jan - May 2018",
    numberprefix: "$",
    charttopmargin: "10",
    theme: "fusion",
    showclosevalue: "1",
    showopenvalue: "1",
    setadaptiveymin: "1",
    periodlength: "21",
  },
  dataset: [
    {
      data: [
        {
          tooltext: "Jan 02, 2018<br>Price: <b>$dataValue</b>",
          value: 1629.62,
        },
        {
          tooltext: "Jan 03, 2018<br>Price: <b>$dataValue</b>",
          value: 1624.89,
        },
        {
          tooltext: "Jan 04, 2018<br>Price: <b>$dataValue</b>",
          value: 1612.87,
        },
        {
          tooltext: "Jan 05, 2018<br>Price: <b>$dataValue</b>",
          value: 1610.15,
        },
        {
          tooltext: "Jan 08, 2018<br>Price: <b>$dataValue</b>",
          value: 1603.07,
        },
        {
          tooltext: "Jan 09, 2018<br>Price: <b>$dataValue</b>",
          value: 1601.86,
        },
        {
          tooltext: "Jan 10, 2018<br>Price: <b>$dataValue</b>",
          value: 1581.4,
        },
        {
          tooltext: "Jan 11, 2018<br>Price: <b>$dataValue</b>",
          value: 1585.46,
        },
        {
          tooltext: "Jan 12, 2018<br>Price: <b>$dataValue</b>",
          value: 1574.37,
        },
        {
          tooltext: "Jan 16, 2018<br>Price: <b>$dataValue</b>",
          value: 1581.76,
        },
        {
          tooltext: "Jan 17, 2018<br>Price: <b>$dataValue</b>",
          value: 1587.28,
        },
        {
          tooltext: "Jan 18, 2018<br>Price: <b>$dataValue</b>",
          value: 1576.12,
        },
        {
          tooltext: "Jan 19, 2018<br>Price: <b>$dataValue</b>",
          value: 1601.54,
        },
        {
          tooltext: "Jan 22, 2018<br>Price: <b>$dataValue</b>",
          value: 1602.91,
        },
        {
          tooltext: "Jan 23, 2018<br>Price: <b>$dataValue</b>",
          value: 1609.08,
        },
        {
          tooltext: "Jan 24, 2018<br>Price: <b>$dataValue</b>",
          value: 1608,
        },
        {
          tooltext: "Jan 25, 2018<br>Price: <b>$dataValue</b>",
          value: 1592.39,
        },
        {
          tooltext: "Jan 26, 2018<br>Price: <b>$dataValue</b>",
          value: 1600.14,
        },
        {
          tooltext: "Jan 29, 2018<br>Price: <b>$dataValue</b>",
          value: 1580.95,
        },
        {
          tooltext: "Jan 30, 2018<br>Price: <b>$dataValue</b>",
          value: 1572.08,
        },
        {
          tooltext: "Jan 31, 2018<br>Price: <b>$dataValue</b>",
          value: 1569.68,
        },
        {
          tooltext: "Feb 01, 2018<br>Price: <b>$dataValue</b>",
          value: 1582.26,
        },
        {
          tooltext: "Feb 02, 2018<br>Price: <b>$dataValue</b>",
          value: 1566.13,
        },
        {
          tooltext: "Feb 05, 2018<br>Price: <b>$dataValue</b>",
          value: 1572.62,
        },
        {
          tooltext: "Feb 06, 2018<br>Price: <b>$dataValue</b>",
          value: 1517.96,
        },
        {
          tooltext: "Feb 07, 2018<br>Price: <b>$dataValue</b>",
          value: 1460.17,
        },
        {
          tooltext: "Feb 08, 2018<br>Price: <b>$dataValue</b>",
          value: 1460.09,
        },
        {
          tooltext: "Feb 09, 2018<br>Price: <b>$dataValue</b>",
          value: 1517.86,
        },
        {
          tooltext: "Feb 12, 2018<br>Price: <b>$dataValue</b>",
          value: 1527.49,
        },
        {
          tooltext: "Feb 13, 2018<br>Price: <b>$dataValue</b>",
          value: 1556.91,
        },
        {
          tooltext: "Feb 14, 2018<br>Price: <b>$dataValue</b>",
          value: 1527.84,
        },
        {
          tooltext: "Feb 15, 2018<br>Price: <b>$dataValue</b>",
          value: 1503.83,
        },
        {
          tooltext: "Feb 16, 2018<br>Price: <b>$dataValue</b>",
          value: 1441.5,
        },
        {
          tooltext: "Feb 20, 2018<br>Price: <b>$dataValue</b>",
          value: 1430.79,
        },
        {
          tooltext: "Feb 21, 2018<br>Price: <b>$dataValue</b>",
          value: 1448.5,
        },
        {
          tooltext: "Feb 22, 2018<br>Price: <b>$dataValue</b>",
          value: 1427.05,
        },
        {
          tooltext: "Feb 23, 2018<br>Price: <b>$dataValue</b>",
          value: 1436.22,
        },
        {
          tooltext: "Feb 26, 2018<br>Price: <b>$dataValue</b>",
          value: 1406.08,
        },
        {
          tooltext: "Feb 27, 2018<br>Price: <b>$dataValue</b>",
          value: 1405.23,
        },
        {
          tooltext: "Feb 28, 2018<br>Price: <b>$dataValue</b>",
          value: 1451.75,
        },
        {
          tooltext: "Mar 01, 2018<br>Price: <b>$dataValue</b>",
          value: 1410.57,
        },
        {
          tooltext: "Mar 02, 2018<br>Price: <b>$dataValue</b>",
          value: 1392.05,
        },
        {
          tooltext: "Mar 05, 2018<br>Price: <b>$dataValue</b>",
          value: 1371.99,
        },
        {
          tooltext: "Mar 06, 2018<br>Price: <b>$dataValue</b>",
          value: 1447.34,
        },
        {
          tooltext: "Mar 07, 2018<br>Price: <b>$dataValue</b>",
          value: 1431.42,
        },
        {
          tooltext: "Mar 08, 2018<br>Price: <b>$dataValue</b>",
          value: 1497.05,
        },
        {
          tooltext: "Mar 09, 2018<br>Price: <b>$dataValue</b>",
          value: 1555.86,
        },
        {
          tooltext: "Mar 12, 2018<br>Price: <b>$dataValue</b>",
          value: 1495.56,
        },
        {
          tooltext: "Mar 13, 2018<br>Price: <b>$dataValue</b>",
          value: 1544.92,
        },
        {
          tooltext: "Mar 14, 2018<br>Price: <b>$dataValue</b>",
          value: 1581.86,
        },
        {
          tooltext: "Mar 15, 2018<br>Price: <b>$dataValue</b>",
          value: 1586.51,
        },
        {
          tooltext: "Mar 16, 2018<br>Price: <b>$dataValue</b>",
          value: 1544.93,
        },
        {
          tooltext: "Mar 19, 2018<br>Price: <b>$dataValue</b>",
          value: 1571.68,
        },
        {
          tooltext: "Mar 20, 2018<br>Price: <b>$dataValue</b>",
          value: 1582.32,
        },
        {
          tooltext: "Mar 21, 2018<br>Price: <b>$dataValue</b>",
          value: 1591,
        },
        {
          tooltext: "Mar 22, 2018<br>Price: <b>$dataValue</b>",
          value: 1588.18,
        },
        {
          tooltext: "Mar 23, 2018<br>Price: <b>$dataValue</b>",
          value: 1598.39,
        },
        {
          tooltext: "Mar 26, 2018<br>Price: <b>$dataValue</b>",
          value: 1578.89,
        },
        {
          tooltext: "Mar 27, 2018<br>Price: <b>$dataValue</b>",
          value: 1551.86,
        },
        {
          tooltext: "Mar 28, 2018<br>Price: <b>$dataValue</b>",
          value: 1545,
        },
        {
          tooltext: "Mar 29, 2018<br>Price: <b>$dataValue</b>",
          value: 1537.64,
        },
        {
          tooltext: "Apr 02, 2018<br>Price: <b>$dataValue</b>",
          value: 1523.61,
        },
        {
          tooltext: "Apr 03, 2018<br>Price: <b>$dataValue</b>",
          value: 1500.25,
        },
        {
          tooltext: "Apr 04, 2018<br>Price: <b>$dataValue</b>",
          value: 1493.45,
        },
        {
          tooltext: "Apr 05, 2018<br>Price: <b>$dataValue</b>",
          value: 1512.45,
        },
        {
          tooltext: "Apr 06, 2018<br>Price: <b>$dataValue</b>",
          value: 1511.98,
        },
        {
          tooltext: "Apr 09, 2018<br>Price: <b>$dataValue</b>",
          value: 1521.95,
        },
        {
          tooltext: "Apr 10, 2018<br>Price: <b>$dataValue</b>",
          value: 1500,
        },
        {
          tooltext: "Apr 11, 2018<br>Price: <b>$dataValue</b>",
          value: 1485.34,
        },
        {
          tooltext: "Apr 12, 2018<br>Price: <b>$dataValue</b>",
          value: 1482.92,
        },
        {
          tooltext: "Apr 13, 2018<br>Price: <b>$dataValue</b>",
          value: 1468.35,
        },
        {
          tooltext: "Apr 16, 2018<br>Price: <b>$dataValue</b>",
          value: 1448.69,
        },
        {
          tooltext: "Apr 17, 2018<br>Price: <b>$dataValue</b>",
          value: 1461.76,
        },
        {
          tooltext: "Apr 18, 2018<br>Price: <b>$dataValue</b>",
          value: 1451.05,
        },
        {
          tooltext: "Apr 19, 2018<br>Price: <b>$dataValue</b>",
          value: 1414.51,
        },
        {
          tooltext: "Apr 20, 2018<br>Price: <b>$dataValue</b>",
          value: 1386.23,
        },
        {
          tooltext: "Apr 23, 2018<br>Price: <b>$dataValue</b>",
          value: 1339.6,
        },
        {
          tooltext: "Apr 24, 2018<br>Price: <b>$dataValue</b>",
          value: 1350.5,
        },
        {
          tooltext: "Apr 25, 2018<br>Price: <b>$dataValue</b>",
          value: 1416.78,
        },
        {
          tooltext: "Apr 26, 2018<br>Price: <b>$dataValue</b>",
          value: 1442.84,
        },
        {
          tooltext: "Apr 27, 2018<br>Price: <b>$dataValue</b>",
          value: 1390,
        },
        {
          tooltext: "Apr 30, 2018<br>Price: <b>$dataValue</b>",
          value: 1429.95,
        },
        {
          tooltext: "May 01, 2018<br>Price: <b>$dataValue</b>",
          value: 1390,
        },
        {
          tooltext: "May 02, 2018<br>Price: <b>$dataValue</b>",
          value: 1450.89,
        },
        {
          tooltext: "May 03, 2018<br>Price: <b>$dataValue</b>",
          value: 1437.82,
        },
        {
          tooltext: "May 04, 2018<br>Price: <b>$dataValue</b>",
          value: 1417.68,
        },
        {
          tooltext: "May 07, 2018<br>Price: <b>$dataValue</b>",
          value: 1402.05,
        },
        {
          tooltext: "May 08, 2018<br>Price: <b>$dataValue</b>",
          value: 1377.95,
        },
        {
          tooltext: "May 09, 2018<br>Price: <b>$dataValue</b>",
          value: 1357.51,
        },
        {
          tooltext: "May 10, 2018<br>Price: <b>$dataValue</b>",
          value: 1362.54,
        },
        {
          tooltext: "May 11, 2018<br>Price: <b>$dataValue</b>",
          value: 1327.31,
        },
        {
          tooltext: "May 14, 2018<br>Price: <b>$dataValue</b>",
          value: 1294.58,
        },
        {
          tooltext: "May 15, 2018<br>Price: <b>$dataValue</b>",
          value: 1293.32,
        },
        {
          tooltext: "May 16, 2018<br>Price: <b>$dataValue</b>",
          value: 1295,
        },
        {
          tooltext: "May 17, 2018<br>Price: <b>$dataValue</b>",
          value: 1304.86,
        },
        {
          tooltext: "May 18, 2018<br>Price: <b>$dataValue</b>",
          value: 1305.2,
        },
        {
          tooltext: "May 21, 2018<br>Price: <b>$dataValue</b>",
          value: 1276.68,
        },
        {
          tooltext: "May 22, 2018<br>Price: <b>$dataValue</b>",
          value: 1254.33,
        },
        {
          tooltext: "May 23, 2018<br>Price: <b>$dataValue</b>",
          value: 1252.7,
        },
        {
          tooltext: "May 24, 2018<br>Price: <b>$dataValue</b>",
          value: 1246.87,
        },
        {
          tooltext: "May 25, 2018<br>Price: <b>$dataValue</b>",
          value: 1229.14,
        },
        {
          tooltext: "May 29, 2018<br>Price: <b>$dataValue</b>",
          value: 1209.59,
        },
        {
          tooltext: "May 30, 2018<br>Price: <b>$dataValue</b>",
          value: 1204.2,
        },
        {
          tooltext: "May 31, 2018<br>Price: <b>$dataValue</b>",
          value: 1189.01,
        },
      ],
    },
  ],
};
function SparkLineWithPeriodIndicator(props) {
  return (
    <>
      <h1>Spark Line With Period Indicator</h1>
      <ReactFusioncharts
        type="sparkline"
        width="600"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
}

export default SparkLineWithPeriodIndicator;
