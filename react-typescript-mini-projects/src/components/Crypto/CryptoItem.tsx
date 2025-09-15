import React, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/store";
import { getdata } from "../../Redux/CryptoSlice";

type SortType = "LTH" | "HTL";

const CryptoItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [sortPrice, setSortPrice] = useState<SortType | "">("");
  const data = useSelector((state: RootState) => state.crypto.cryptoData);

  useEffect(() => {
    dispatch(getdata());
  }, []);

  console.log("data", data);
  const sortedData = sortPrice
    ? [...data].sort((a, b) =>
        sortPrice === "LTH" ? a.current_price - b.current_price : b.current_price - a.current_price
      )
    : data;
  return (
    <div className="bg-gray-900 min-h-screen text-center ">
      <span className="font-semibold text-gray-300 text-xl px-2">Price: </span>
      <select
        onChange={(e) => setSortPrice(e.target.value as SortType)}
        className="bg-gray-800 text-white font-bold rounded px-2 py-1 mt-5"
      >
        <option value="LTH">Low To High</option>
        <option value="HTL">High To Low</option>
      </select>
      <button
        onClick={(e) => setSortPrice("")}
        className="bg-gradient-to-r text-white font-semibold mx-2 from-red-500 to-red-600 py-1 px-2 rounded"
      >
        clear
      </button>
      {sortedData.map((d) => (
        <CryptoCard name={d.name} price={d.current_price} change={d.high_24h} img={d.image} symbol={d.symbol} />
      ))}
    </div>
  );
};

export default CryptoItem;
