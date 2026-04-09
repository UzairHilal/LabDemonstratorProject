import { Editor } from "@monaco-editor/react";
import { useRef } from "react";

const CodeEditorPanel = () => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = monaco;
  };

  return (
    <div className="blur-[0.6px] disabled:relative border border-[#3c3c3c] bg-[#282828] h-[70vh] px-4 rounded-sm disabled:-left-30 -z-15 ">
      <div className="disabled:hidden flex justify-center items-center">
        <Editor
        className=""
          height={"600px"}
          width={"900px"}
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
  );
};

export default CodeEditorPanel;
