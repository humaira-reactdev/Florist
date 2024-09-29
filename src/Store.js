import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Slice/ProductSlice'
import UserSlice from './Slice/UserSlice'

export default configureStore({
  reducer: {
    counter: ProductSlice,
    user: UserSlice
  },
})