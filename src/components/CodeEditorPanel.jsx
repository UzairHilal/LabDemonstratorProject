import { Editor } from "@monaco-editor/react";
import { useRef } from "react";
import StatementPanel from "./StatementPanel";

const CodeEditorPanel = () => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = monaco;
  };

  return (
    <div className="blur-[0px] disabled:relative bg-[#171717] h-[80vh] rounded-sm disabled:-left-30 overflow-hidden">
      <div className="flex">
        <div>
          <StatementPanel />
        </div>
        <div className="ml-1 ">
          <div className="border border-[#262626] rounded-sm">
            <div className="bg-[#2E2E2E] w-full h-5 rounded-sm">
              <p className="px-6 w-full h-full flex items-center justify-start text-sm text-[#aaa]">
                Code Editor
              </p>
            </div>
            <div className="disabled:hidden flex justify-center items-center ">
              <Editor
                className="h-full"
                height={"500px"}
                width={"400px"}
                defaultLanguage="python"
                defaultValue={`def solve(n):
  # Write your code here
  pass`}
                theme="vs-dark"
                onMount={handleEditorDidMount}
                options={{
                  fontSize: 16,
                  minimap: { enabled: false },
                  automaticLayout: true,
                }}
              />
            </div>
          </div>
          <div className="h-full mt-1 border border-[#262626] rounded-sm">
            <div className="bg-[#2E2E2E] w-full h-5 rounded-sm">
              <p className="px-6 w-full h-full flex items-center justify-start text-[#aaa] text-sm ">
                Test Cases
              </p>
            </div>
            <div className="mx-3">
              <p>Test #1</p>
              <p>Test #2</p>
              <p>Test #3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorPanel;
