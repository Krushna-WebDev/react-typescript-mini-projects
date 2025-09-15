import React from "react";

interface CryptoInterface {
  name: string;
  price: number;
  change: number;
  img: string;
  symbol: string;
}

const CryptoCard = ({ name, price, change, img, symbol }: CryptoInterface) => {
  return (
    <div className="flex justify-center py-5 ">
      <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-xl w-full max-w-3xl">
        <div className="grid grid-cols-4 items-center p-6 gap-4">
          <div className="flex flex-col items-center">
            <img src={img} alt="" className="w-15 h-15 rounded-full" />
            <p className="rounded-3xl font-bold mt-2 uppercase px-3 text-white">{symbol}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-white">{name}</span>
          </div>

          <div className="text-center">
            <span className="text-gray-400 text-sm">Price</span>
            <p className="text-white font-bold">${price.toLocaleString()}</p>
          </div>

          <div className="flex justify-end">
            <span
              className={`
                ${
                  change > 0
                    ? "bg-green-500/10 text-green-500"
                    : "bg-red-500/10 text-red-500"
                }
                px-4 py-1 rounded-full font-medium
                `}
            >
              {change > 0 ? "+" : ""}
              {change}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
