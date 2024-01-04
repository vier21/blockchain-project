import { useState, createContext, useEffect } from "react";

import Header from "./components/Header";
import LogoCertiblock from "./components/LogoCertiblock";
import WorkPanel from "./components/WorkPanel";
import { initiateLogin } from "./config/blockchain-config";

export const WorkPanelContext = createContext();

export function App() {
  const [workPanelState, setWorkPanelState] = useState("");

  useEffect(() => {
    initiateLogin();
  }, []);

  return (
    <>
      <WorkPanelContext.Provider value={{ setWorkPanelState }}>
        <Header />
      </WorkPanelContext.Provider>
      <div className="flex flex-col w-full grow min-h-0 gap-6 place-content-center ">
        <LogoCertiblock />
        <WorkPanelContext.Provider
          value={{ workPanelState, setWorkPanelState }}
        >
          <WorkPanel />
        </WorkPanelContext.Provider>
      </div>
    </>
  );
}

export default App;
