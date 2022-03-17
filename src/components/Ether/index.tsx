import { MetaMaskInpageProvider } from "@metamask/providers";
import { Maybe } from "@metamask/providers/dist/utils";
import { useState } from "react";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const Ether: React.FC = () => {
  const [accounts, setAccounts] = useState<any>([]);
  const [balance, setBalance] = useState<any>(0);
  const connectClickHandler = async () => {
    const accountsCalled = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => console.log(err));
    setAccounts(accountsCalled);
  };
  const balanceClickHandler = async () => {
    const balance = await window.ethereum
      .request({ method: "eth_getBalance", params: [accounts[0], "latest"] })
      .catch((err) => console.log(err));
    //   @ts-ignore
    const convertedBalance = parseFloat(balance) / Math.pow(10, 18);
    setBalance(convertedBalance);
  };
  console.log(accounts, balance);
  return (
    <div className=" flex justify-center items-center h-96 w-96 bg-green-200 text-black">
      <button
        onClick={connectClickHandler}
        className="p-2 bg-yellow-200 hover:bg-yellow-400 shadow-xl rounded-xl border-2 border-yellow-600 duration-500"
      >
        connect your wallet
      </button>
      <button
        onClick={balanceClickHandler}
        className="p-2 bg-blue-200 hover:bg-blue-400 shadow-xl rounded-xl border-2 border-blue-600 duration-500"
      >
        my balance
      </button>
    </div>
  );
};

export default Ether;
