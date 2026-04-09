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
        <div className="flex">
          <SideMenu />
        </div>

        <div className="w-full text-white">
          <div>
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
