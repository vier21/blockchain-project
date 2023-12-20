import { Button } from "flowbite-react";
import { useEffect } from "react";
import {Web3} from "web3";
import abiJSON from '../abi/CertiicateStorage.json' 

function RootPage(){
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); 
    web3.eth.Contract.handleRevert = true;

    const contractABI = abiJSON.abi;
    const contractAddress = "0x85B6b8c0c61c6c0E0ca9C887508C2c575A802238"
    const contract = new web3.eth.Contract(contractABI, contractAddress)
    contract.handleRevert = true;

    async function interact(){
        const providerAccount = await web3.eth.getAccounts()[9];
        console.log(providerAccount)
        try{
            const cert = await contract.methods.inputCert("darrel", "admin").send({
                from: providerAccount,
                gas: '10000000'
            })
            console.log('Transaction Hash: ' + cert.transactionHash);
        }catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="flex flex-col w-full h-full justify-center items-center place-content-center bg-slate-500">
            <div className="w-96 h-96 bg-green-400">
                <Button onClick={()=>interact()}>Testing</Button>
            </div>
            <div className="w-96 h-96 bg-red-400">
                <Button>Testing</Button>
            </div>
            <div className="w-96 h-96 bg-yellow-200">
                <Button>Testing</Button>
            </div>
        </div>
    )
}

export default RootPage;