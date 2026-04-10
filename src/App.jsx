import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Breadcrumb from "./components/Breadcrumb";
import { MainScreen } from "./components/MainScreen";
import Controls from "./components/Controls";
function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex">
        <div className="flex my-1 border-2 border-[#262626] rounded-tl-md">
          <SideMenu />
        </div>

        <div className="w-full text-white bg-[#171717] ml-1 my-1 border-2 border-[#262626] rounded-tr-md overflow-hidden">
          <div >
            <MainScreen />
          </div>
          <div className="flex justify-center items-center">
            <Controls />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
