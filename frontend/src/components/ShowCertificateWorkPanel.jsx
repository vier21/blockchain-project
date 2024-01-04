import { useEffect, useState } from "react";
import {
  callGetCertificateByID,
  callGetOwnerCertificates,
} from "../config/blockchain-config";
import CertificateCard from "./CertificateCard";

function ShowCertificateWorkPanel() {
  const [certDataState, setCertDataState] = useState([]);
  const [certDataTransState, setCertDataTransState] = useState([]);

  useEffect(() => {
    callGetOwnerCertificates().then((value) => {
      setCertDataState(value);
      console.log(value[0]);
    });
  }, []);

  /*
  useEffect(() => {
    async function runUseEffect() {
      const temp = [];
      certDataState.map(async (cert) => {
        const handler = await handleRenderCert(cert);
        temp.push(handler);
        console.log("push " + handler["vaccineType"]);
      });
      setCertDataTransState(temp);
      console.log("final :" + certDataTransState);
    }

    runUseEffect();
  }, [certDataState]);*/

  useEffect(() => {
    async function runUseEffect() {
      const temp = [];
      const handlers = await Promise.all(
        certDataState.map((cert) => handleRenderCert(cert))
      );

      handlers.forEach((handler) => {
        temp.push(handler);
        console.log("push " + handler["vaccineType"]);
      });

      setCertDataTransState(temp);
      console.log("final :", certDataTransState);
    }

    runUseEffect();
  }, [certDataState]);

  async function handleRenderCert(cert) {
    try {
      const handler = await callGetCertificateByID(cert);
      return handler;
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 rounded-lg p-10 bg-gray-700 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition-shadow duration-500 focus:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] outline-none overflow-auto">
      {certDataTransState.map((cert) => {
        return (
          <CertificateCard key={cert["id"]} value={cert}></CertificateCard>
        );
      })}
    </div>
  );
}

export default ShowCertificateWorkPanel;
