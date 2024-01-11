import { configureStore } from '@reduxjs/toolkit'
import restaurantSlice from './slices/restaurantSlice'
import authSlice from './slices/authSlice'
import cartSlice from './slices/cartSlice'

let store = configureStore({
  reducer: {
    restaurants: restaurantSlice,
    auth: authSlice,
    cart: cartSlice,
  },
  devTools: true,
})

export default store
