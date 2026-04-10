import { linearSearch } from "../constants/info";
const StatementPanel = () => {
  return (
    <div className="blur-[0px] disabled:relative border border-[#262626] bg-[#171717] h-[80vh] px-4 rounded-sm disabled:-left-10">
      <div className="h-full px-4 overflow-hidden">
        <h1 className="text-lg font-bold">{linearSearch.meta.topic}</h1>
        <div>
          <p>{linearSearch.introduction.summary}</p>
          <p>{linearSearch.introduction.analogy}</p>
          <p>{linearSearch.introduction.realWorldUse}</p>
        </div>
        <div className="my-3">
          <h2 className="text-xl font-bold">How It Works</h2>
          <ul>
            {linearSearch.howItWorks.steps.map((step, i) => (
              <li id={i}>{i+1}: {step}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatementPanel;
