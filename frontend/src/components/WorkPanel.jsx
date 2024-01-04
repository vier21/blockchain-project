import { useContext } from "react";

import { WorkPanelContext } from "../App";
import SearchBar from "./SearchBar";
import InputCertificationWorkPanel from "./InputCertificateWorkPanel";
import ShowCertificateWorkPanel from "./ShowCertificateWorkPanel";

function WorkPanel() {
  const WorkPanelContexter = useContext(WorkPanelContext);

  switch (WorkPanelContexter.workPanelState) {
    case "ShowInputCertificateForm":
      return <InputCertificationWorkPanel />;
    case "ShowCertificateGrid":
      return <ShowCertificateWorkPanel />;
    case "":
      return <SearchBar />;
    default:
      return <SearchBar />;
  }
}

export default WorkPanel;
