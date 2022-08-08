import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart.slice'
// import user from './slices/user.slice'
import  isLoadingSlice  from './slices/isLoading.slice'
import messageSlice from './slices/message.slice'
import  productsSlice  from './slices/products.slice'
import  purchasesSlice from './slices/purchases.slice'

export default configureStore({
  reducer: {
     isLoading : isLoadingSlice,
     products : productsSlice,
     purchases : purchasesSlice,
     cart : cartSlice,
     messages : messageSlice
	}
})