import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setMessages } from './message.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            const cart = action.payload;
            return cart;
        }

    }
})

/* add Cart where data = { id , quantity}   */
export const addCartThunk = (id ,quantity) => (dispatch) => {
    const data = { id: id, quantity : quantity}
    console.log('*********>>>>')
    console.log(data)
    console.log('*********>>>>')
    dispatch(setIsLoading(true));
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, data , getConfig() )
        .then(()=>{
           /* Products in Cart */
            dispatch(getCartThunk())

        })

        .catch(error => {
            /* 401 (Unauthorized) */
            if(error.response.status == 401 ){
                console.log('----------------------------------------')
                console.log(error)   
               // dispatch(setCart({}));
            }
        })
        .finally(() => dispatch(setIsLoading(false)));
};

/* get Cart where data = { id , quantity}   */
export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, getConfig())
        .then((res) => {
            dispatch(setCart(res.data.data.cart.products))
        })
        .catch((error) => console.log(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
};

/* delete Product of Cart param id  */
export const delCartThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig())
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => console.log(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
};

/* Modific quantity Product of Cart param id  */
export const qtyCartThunk = (id, quantity ) => (dispatch) => {
    dispatch(setIsLoading(true));
    const data = { id: id, newQuantity : quantity}

    return axios.patch(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/`, data, getConfig())
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => console.log(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
};


export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
