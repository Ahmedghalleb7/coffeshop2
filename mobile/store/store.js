import { configureStore } from '@reduxjs/toolkit';
import categorieSlice from './categorieSlice';

const store = configureStore({
 reducer:{
    categories : categorieSlice
 }
});

export default store;