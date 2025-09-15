import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Crypto {
  id: string;
  name: string;
  current_price: number;
  high_24h: number;
  image: string;
  symbol:string;
}

interface CryptoState {
  cryptoData: Crypto[];
}

const initialState: CryptoState = {
  cryptoData: [],
};
const api =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
export const getdata = createAsyncThunk<Crypto[]>("crypto", async () => {
  const res = await axios.get(`${api}`);
  return res.data;
});

const CryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getdata.pending, () => {
        console.log("Loading...");
      })
      .addCase(getdata.fulfilled, (state, action) => {
        state.cryptoData = action.payload;
      })
      .addCase(getdata.rejected, () => {
        console.log("Error fetching data");
      });
  },
});
export default CryptoSlice.reducer;
