import { callIssueCertificate } from "../config/blockchain-config";

function InputCertificateWorkPanel() {
  function handleSubmit(e) {
    e.preventDefault();
    const recipientAddress = e.target.recipient.value;
    const senderName = e.target.senderName.value;
    const certName = Number(e.target.certName.value);

    callIssueCertificate(recipientAddress, senderName, certName);
  }

  return (
    <form
      className="w-3/5 mx-auto rounded-lg p-10 bg-gray-700 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition-shadow duration-500 focus:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] outline-none"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="relative z-0 w-full mb-5 group">
        <input
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-bright-sun-500 focus:outline-none focus:ring-0  peer"
          placeholder=" "
          id="recipient"
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bright-sun-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Recipient Address
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-bright-sun-500 focus:outline-none focus:ring-0  peer"
          placeholder=" "
          id="senderName"
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bright-sun-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Vaccine Type
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-bright-sun-500 focus:outline-none focus:ring-0  peer"
          placeholder=" "
          id="certName"
          required
        />
        <label
          htmlFor="floating_repeat_password"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bright-sun-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Dosage
        </label>
      </div>
      <button
        type="submit"
        className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-bright-sun-500 hover:bg-bright-sun-600 focus:ring-bright-sun-700"
      >
        Submit
      </button>
    </form>
  );
}

export default InputCertificateWorkPanel;
