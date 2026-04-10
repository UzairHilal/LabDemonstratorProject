import Breadcrumb from "./Breadcrumb";
import CodeEditorPanel from "./CodeEditorPanel";
import DemoVizPanel from "./DemoVizPanel";
import FlowChartPanel from "./FlowChartPanel";
import StatementPanel from "./StatementPanel";

export const MainScreen = () => {
  return (
    <main className="px-6 my-6 lg:mx-40 flex flex-col justify-center items-center">
      <div className="my-3">
        <Breadcrumb />
      </div>

      <div className="flex gap-1">
        {/* <StatementPanel /> */}
        <FlowChartPanel />
        <DemoVizPanel />
        <CodeEditorPanel />
      </div>
    </main>
  );
};
