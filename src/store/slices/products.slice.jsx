import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'producs',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload;
            return products;
          }
    }
})

/* Trunk  */
export const getProductsTrunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    // alert("dd")
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
      .then((res) => {
         dispatch(setProducts(res.data.data.products))
         console.log(res.data)
        }) // setNews(res.data)
      .finally(() => dispatch(setIsLoading(false)));
  };

  /* Search  */
  export const filterHeadlineThunk = (searchValue) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${searchValue}`
      )
      .then((res) => dispatch(setProducts(res.data.data.products)))
      .finally(() => dispatch(setIsLoading(false)));
  };

  /* categories */
  export const filterCategorisThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`
      )
      .then((res) => dispatch(setProducts(res.data.data.products)))
      .finally(() => dispatch(setIsLoading(false)));
  };

  
    

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
