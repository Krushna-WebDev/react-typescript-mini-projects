import React from "react";
import Todo from "./components/Todo/Todo";
import Crypto from "./components/Crypto/Crypto";

const data = [
  { name: "Bitcoin", price: 45000, change: +2.5 },
  { name: "Ethereum", price: 3200, change: -1.2 },
  { name: "Binance Coin", price: 420, change: +0.8 },
  { name: "Solana", price: 150, change: +5.1 },
  { name: "Cardano", price: 0.55, change: -0.9 },
  { name: "Ripple", price: 0.65, change: +3.3 },
  { name: "Dogecoin", price: 0.09, change: +10.2 },
  { name: "Polygon", price: 1.2, change: -2.1 },
  { name: "Polkadot", price: 7.5, change: +1.7 },
  { name: "Shiba Inu", price: 0.00002, change: -0.5 },
];
const App = () => {
  return (
    <>
      <Todo />
      {/* <div className="bg-gray-900">
        {data.map((d) => (
          <Crypto name={d.name} price={d.price} change={d.change} />
        ))}
      </div> */}
    </>
  );
};

export default App;
