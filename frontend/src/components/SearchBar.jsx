import { useEffect, useState } from "react";
import {
  callValidateCertificate,
  callGetCertificateByID,
} from "../config/blockchain-config";
import CertificateCard from "./CertificateCard";

function SearchBar() {
  const [showPanelState, setShowPanelState] = useState(false);
  const [certData, setCertData] = useState();

  useEffect(() => {
    setShowPanelState(false);
  }, []);

  function handleRenderCert(cert) {
    try {
      const handler = callGetCertificateByID(cert);
      setCertData(handler);
    } catch (error) {
      setCertData({ id: "not Found" });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;
    callValidateCertificate(searchQuery)
      .then((value) => {
        console.log(value);
        alert("Found");
        handleRenderCert(value);
      })
      .catch((error) => {
        alert("notFound");
      });
  }

  return (
    <>
      <form
        className="w-3/5 mx-auto"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="w-4 h-4  text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="searchQuery"
            className="block w-full h-fit p-4 ps-10 text-sm font-semibold rounded-lg bg-gray-700 placeholder-gray-400 text-white hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition-shadow duration-500 focus:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] outline-none"
            placeholder="Certificate ID Here ex: 0"
            required
          />
          <button
            type="submit"
            className="text-gray-800  absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-bright-sun-500 hover:bg-bright-sun-600 outline-none"
          >
            Search
          </button>
        </div>
      </form>
      {showPanelState ? <CertificateCard value={certData} /> : <></>}
    </>
  );
}

export default SearchBar;
