import { configureStore } from '@reduxjs/toolkit';
import {
  carsReducer,
 
  changeSearchTerm,
} from './slices/carsSlice';


const store = configureStore({
  reducer: {
    cars: carsReducer,
  
  },
});

export { store, changeSearchTerm };
