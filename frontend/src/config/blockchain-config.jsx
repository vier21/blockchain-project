import { Web3 } from "web3";
import * as CertificateStorage from "./VaccineCertificateStorage.json";

const contractAddress = "0x73715387d71a4d7200752cdE4302D7473C8FeF71";

export async function initiateLogin() {
  try {
    const web3 = await new Web3(window.ethereum);
    // eslint-disable-next-line no-unused-vars
    const Account = await web3.eth.requestAccount();
  } catch (error) {
    console.log(error);
  }
}

export async function getPublicKey() {
  try {
    const web3 = await new Web3(window.ethereum);
    const Account = await web3.eth.getAccounts();
    return Account[0];
  } catch (error) {
    return error.toString();
  }
}

export async function callIssueCertificate(recipient, vaccineType, dosage) {
  try {
    const web3 = await new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(
      CertificateStorage.abi,
      contractAddress
    );
    const account = await web3.eth.getAccounts();
    const senderAccount = account[0];

    const doingContract = await contract.methods
      .issueCertificate(recipient, vaccineType, dosage)
      .send({
        from: senderAccount,
        gas: 1000000,
        gasPrice: 10000000000,
      });

    console.log("Call Issue Certificate :" + doingContract);
    return "berhasil terkirim";
  } catch (error) {
    console.log("Call Issue Certificate :" + error);
    return error.toString();
  }
}

export async function callValidateCertificate(certAddress) {
  try {
    const web3 = await new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(
      CertificateStorage.abi,
      contractAddress
    );
    contract.handleRevert = true;
    const account = await web3.eth.getAccounts();
    const senderAccount = account[0];

    const doingContract = await contract.methods
      .validateCertificate(certAddress)
      .call({
        from: senderAccount,
        gas: 100000000,
        gasPrice: 30000000000,
      });
    return doingContract;
  } catch (error) {
    console.log("callValidate " + error);
    return error.toString();
  }
}

export async function callGetOwnerCertificates() {
  try {
    const web3 = await new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(
      CertificateStorage.abi,
      contractAddress
    );
    contract.handleRevert = true;
    const account = await web3.eth.getAccounts();
    const senderAccount = account[0];

    const doingContract = await contract.methods
      .getOwnerCertificates(senderAccount)
      .call({
        from: senderAccount,
        gas: 100000,
        gasPrice: 30000000000,
      });

    return doingContract;
  } catch (error) {
    console.log("callValidate " + error);
    return error.toString();
  }
}

export async function callGetCertificateByID(id) {
  try {
    const web3 = await new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(
      CertificateStorage.abi,
      contractAddress
    );
    contract.handleRevert = true;
    const account = await web3.eth.getAccounts();
    const senderAccount = account[0];

    const doingContract = await contract.methods
      .getVaccineCertificate(id)
      .call({
        from: senderAccount,
        gas: 100000,
        gasPrice: 30000000000,
      });

    return doingContract;
  } catch (error) {
    return error.toString();
  }
}
