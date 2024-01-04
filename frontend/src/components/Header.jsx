import { useContext, useState } from "react";
import {
  HiOutlineFolderOpen,
  HiOutlineFolderAdd,
  HiOutlineSearchCircle,
} from "react-icons/hi";

import { WorkPanelContext } from "../App";
import ProfileDragdown from "./ProfilDragdown";

function Header() {
  const WorkPanelContexter = useContext(WorkPanelContext);

  const [profileDragdownState, setProfileDragdownState] = useState(false);

  function toggleProfileDragDown() {
    setProfileDragdownState(!profileDragdownState);
  }

  function showCertificateGridHandler() {
    WorkPanelContexter.setWorkPanelState("ShowCertificateGrid");
  }

  function showInputCertificateForm() {
    WorkPanelContexter.setWorkPanelState("ShowInputCertificateForm");
  }

  function showSearchBar() {
    WorkPanelContexter.setWorkPanelState("");
  }

  return (
    <>
      <div className="flex flex-col w-full top-5 right-5 absolute gap-1">
        <div className="flex flex-row-reverse gap-3">
          <div
            className="relative w-10 h-10 overflow-hidden rounded-lg bg-bright-sun-500 hover:bg-bright-sun-600"
            onClick={() => toggleProfileDragDown()}
          >
            <svg
              className="absolute w-12 h-12 text-slate-600 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <button
            className="text-gray-800  text-lg rounded-lg text-sm px-4 py-2 bg-bright-sun-500 hover:bg-bright-sun-600 outline-none"
            onClick={() => {
              showCertificateGridHandler();
            }}
          >
            <HiOutlineFolderOpen className="place-self-center " />
          </button>
          <button
            className="text-gray-800  text-lg rounded-lg text-sm px-4 py-2 bg-bright-sun-500 hover:bg-bright-sun-600 outline-none"
            onClick={() => {
              showInputCertificateForm();
            }}
          >
            <HiOutlineFolderAdd className="place-self-center " />
          </button>
          <button
            className="text-gray-800  text-lg rounded-lg text-sm px-4 py-2 bg-bright-sun-500 hover:bg-bright-sun-600 outline-none"
            onClick={() => {
              showSearchBar();
            }}
          >
            <HiOutlineSearchCircle className="place-self-center " />
          </button>
        </div>
        {profileDragdownState ? <ProfileDragdown /> : <></>}
      </div>
    </>
  );
}

export default Header;
