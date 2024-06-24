import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

export const fetchCategories = createAsyncThunk("fetching/data", async () => {
    const response = await axios.get(`http://${config}/categories.json`);
    return response.data;
  });

  export const search = createAsyncThunk("search/products", async (querry) => {
    const res = await axios.get("http://localhost:3000/data.json");
    const res_data = res.data.filter(e =>
      e.productName.toLowerCase().includes(querry.toLowerCase())
    );
    return res_data;
  });

  export const fetchOneCategoryProducts = createAsyncThunk("fetchOne/categories", async (id) => {
    const resp = await axios.get(`http://${config}:3000/categories/${id}`);
   return resp.data
  });

  export const categories = createSlice({
    name: "categories",
    initialState: {
     productsCategory : [],
      categories : []
    },
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
      builder.addCase(fetchOneCategoryProducts.fulfilled, (state, action) => {
        state.productsCategory = action.payload;
      });
   
    }
  });
  
  export default categories.reducer;