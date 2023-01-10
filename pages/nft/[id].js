import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import React from "react";

const NFTDrop = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              src="https://links.papareact.com/8sg"
              alt=""
              className="w-44 rounded-xl object-cover md:h-64 md:w-48 lg:h-96 lg:w-72"
            />
          </div>
          <div className="text-center p-5 space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              MURAKAMI Apes
            </h1>
            <h2 className="text-base md:text-lg text-gray-300">
              A collection of MURAKAMI Apes who lives & breathe Manga!
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col lg:col-span-6 p-12">
        <div className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/60">
              MURAKAMI
            </span>{" "}
            NFT Market Place
          </h1>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 text-white py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </div>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            You&apos;re logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-3 text-center lg:space-y-2 lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The MURAKAMI Ape Coding Club | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT&apos;s claimed</p>
        </div>
        <button className="font-bold mt-10 h-16 w-full bg-red-500 text-white rounded-full">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDrop;
