import CodeEditorPanel from "./CodeEditorPanel";
import DemoVizPanel from "./DemoVizPanel";
import FlowChartPanel from "./FlowChartPanel";
import StatementPanel from "./StatementPanel";

export const MainScreen = () => {
  return (
    <main className="w-full px-6 mx-6 my-8 flex justify-center">
      <StatementPanel />
      <FlowChartPanel />
      <DemoVizPanel />
      <CodeEditorPanel />
    </main>
  );
};
