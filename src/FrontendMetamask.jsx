import { useState } from "react";
import { ethers } from "ethers";
import FrontendMetamask_abi from "./FrontendMetamask_abi.json";

const FrontendMetamask = () => {
  //   const ethers = require("ethers");

  const contractAddresss = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const [value, setValue] = useState("None");
  const [address, setAddress] = useState("Wallet Not Connected");
  const [connectButtonText, setConnectButtonText] = useState(
    "Connect to MetaMask Wallet"
  );

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountChangeHandler(accounts[0]);
        setConnectButtonText("Wallet Connected");
      } catch (error) {
        console.log("error");
      }
    } else {
      alert("Add Metamask Wallet");
    }
  }

  const accountChangeHandler = (newAccount) => {
    try {
      setAddress(newAccount);
      updateEther();
    } catch (error) {
      console.log("error");
    }
  };

  const updateEther = () => {
    try {
      let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(tempProvider);

      let tempSigner = tempProvider.getSigner();
      setSigner(tempSigner);

      let tempContract = new ethers.Contract(
        contractAddresss,
        FrontendMetamask_abi,
        tempSigner
      );
      setContract(tempContract);
    } catch (error) {
      console.log(error);
    }
  };

  const setNum = async () => {
    try {
      contract.inputnum(
        document.getElementById("a").value,
        document.getElementById("b").value
      );
    } catch (error) {
      console.log(error);
    }
  };

  const sum = async () => {
    try {
      let s = await contract.sum();
      setValue(s.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const multi = async () => {
    try {
      let d = await contract.multi();
      setValue(d.toString());
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="App">
      <h1>Metamask project</h1>
      <h2>Address : {address}</h2>

      <button onClick={requestAccount}>{connectButtonText}</button>

      <div className="input-css">

        <input type="number" id="a" placeholder="Type only Number" />
        <input type="number" id="b" placeholder="Type only Number" />
      
      </div>      

      <button onClick={setNum}>Store Number</button>

      <br />

      <button onClick={sum}>Sum Of Number</button>
      <button onClick={multi}>Multiple Of Number</button>

      <h3>Answer: {value}</h3>

    </div>
  );
};

export default FrontendMetamask;
