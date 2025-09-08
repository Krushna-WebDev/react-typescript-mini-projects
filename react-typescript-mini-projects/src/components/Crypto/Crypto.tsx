import React from "react";

interface CryptoInterface {
  name: string;
  price: number;
  change: number;
}

const Crypto = ({ name, price, change }: CryptoInterface) => {
  return (
      <div className="flex justify-center mb-4 ">
        <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-xl w-full max-w-md">
          <div className="grid grid-cols-3 items-center p-6 gap-4">
            {/* Crypto Name */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-white">{name}</span>
            </div>

            <div className="text-center">
              <span className="text-gray-400 text-sm">Price</span>
              <p className="text-white font-bold">${price.toLocaleString()}</p>
            </div>

            {/* Change Percentage */}
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

export default Crypto;
