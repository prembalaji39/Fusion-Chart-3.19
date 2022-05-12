import "./App.css";
import AddingReferenceLine from "./Components/AddingReferenceLine";
import AnnotatingSingleDataPoint from "./Components/AnnotatingSingleDataPoint";
import ApplyTheme from "./Components/ApplyTheme";
import DateRangeEventOverlay from "./Components/DateRangeEventOverlay";
import DrillDownToChart from "./Components/DrillDownToChart";
import EventListenerFromChart from "./Components/EventListenerFromChart";
import ExportPDF from "./Components/ExportPDF";
import FusionChartXtSuite from "./Components/FusionChart_XTSuite/FusionChart_Xt_Suite";
import FusionMaps from "./Components/FusionMaps/FusionMaps";
import FusionTime from "./Components/FusionTime/FusionTime";
import FusionWidgetsXTSuite from "./Components/FusionWidgets_XTSuite/FusionWidgets_XT_Suite";
import PercentageCalculation from "./Components/PercentageCalculation";
import PowerChartsXTSuite from "./Components/PowerChart_XTSuite/PowerCharts_XT_Suite";
import ResponsiveCharts from "./Components/ResponsiveCharts";
import SingleEventOverlay from "./Components/SingleEventOverlay";
import SliceDataPlot from "./Components/SliceDataPlot";
import UpdateChartAttribute from "./Components/UpdateChartAttribute";
import UpdateChartData from "./Components/UpdateChartData";

function App() {
  return (
    <div className="App">
      <h1>Fusion Charts</h1>
      <FusionChartXtSuite />
      <FusionWidgetsXTSuite />
      <PowerChartsXTSuite />
      <FusionTime />
      <FusionMaps />
      <UpdateChartData />
      <UpdateChartAttribute />
      <EventListenerFromChart />
      <ApplyTheme />
      <ResponsiveCharts />
      <ExportPDF />
      <DrillDownToChart />
      <SliceDataPlot />
      <PercentageCalculation />
      <AddingReferenceLine />
      <AnnotatingSingleDataPoint />
      <SingleEventOverlay />
      <DateRangeEventOverlay />
    </div>
  );
}

export default App;
