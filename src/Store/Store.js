import { configureStore } from '@reduxjs/toolkit';
// import gamesReducer from './games/reducer';
import cartReducer from './Reducers/goods';

export const store = configureStore({
    reducer: {
        // games: gamesReducer,
        cart: cartReducer
    }
  })