import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const Ether: React.FC = () => {
  const etherClickHandler = async () => {
    const accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => console.log(err));
    console.log(accounts);
  };
  return (
    <div className=" flex justify-center items-center h-96 w-96 bg-green-200 text-black">
      <button
        onClick={etherClickHandler}
        className="p-2 bg-yellow-200 hover:bg-yellow-400 shadow-xl rounded-xl border-2 border-yellow-600 duration-500"
      >
        connect your wallet
      </button>
    </div>
  );
};

export default Ether;
