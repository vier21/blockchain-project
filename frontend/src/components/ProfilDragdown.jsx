import { useEffect, useState } from "react";
import { getPublicKey } from "../config/blockchain-config";

function ProfileDragdown() {
  const [publicKeyState, setUserPublicKeyState] = useState("");

  useEffect(() => {
    ShowPublicKey();
  }, []);

  async function ShowPublicKey() {
    await getPublicKey()
      .then((value) => {
        setUserPublicKeyState(value);
      })
      .catch((error) => {
        console.log("ShowPublicKey : " + error);
      });
  }

  return (
    <div className="flex flex-row-reverse ">
      <div className="flex flex-col w-1/4 min-h-fit bg-slate-100 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="flex flex-row min-w-4/5 p-5 gap-2">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
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
          <div className="flex flex-col w-3/4 overflow-auto">
            <div className="text-black text-sm">Public Key</div>
            <div className=" text-black text-sm">{publicKeyState}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDragdown;
