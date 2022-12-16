import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const axiosLoop = createAsyncThunk("products/axiosproduct", async () => {
  const res = await axios.get("../data.json");
  const data = await res.data;
  console.log(data);
  return data;
});
export const ProductSlice = createSlice({
  initialState: [],
  name: "product",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosLoop.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});


export const {} = ProductSlice.actions;
export default ProductSlice.reducer;