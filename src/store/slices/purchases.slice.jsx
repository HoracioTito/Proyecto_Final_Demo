import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import  { setIsLoading }  from './isLoading.slice';



export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases : (state, action) => {
            const purchases = action.payload;
            return purchases;
          }

    }
})

/* Trunk  */
export const getPurchasesTrunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    // alert("dd")
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",getConfig())
      .then((res) => {
         dispatch(setPurchases(res.data.data.purchases))
         console.log(res.data)
        }) // setNews(res.data)
      .finally(() => dispatch(setIsLoading(false)));
  };

  /* Trunk  */
export const checkoutTrunk = () => (dispatch) => {
  dispatch(setIsLoading(true))
  const data = {
    "street": "Green St. 1456",
    "colony": "Southwest",
    "zipCode": 12345,
    "city": "USA",
    "references": "Some references"
    }
   alert("checkout")
  return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",data,getConfig())
    .then((res) => {
       // dispatch(setPurchases(res.data.data.purchases))
       console.log(res.data)
      })
      .catch(error => console.log(error))
    .finally(() => dispatch(setIsLoading(false)));
};



  /* Trunk  */
/* export const getPurchasesListTrunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true))

     alert("getPurchasesListTrunk")
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases/${id}/`,getConfig())
      .then((res) => {
         dispatch(setPurchases(res.data.data.purchase.cart.products))
         console.log(res.data.data.purchase.cart.products)
        }) // setNews(res.data)
      .finally(() => dispatch(setIsLoading(false)));
  }; */

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
