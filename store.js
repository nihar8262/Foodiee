import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import restarauntSlice from './slices/restarauntSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant:restarauntSlice,
  },
})