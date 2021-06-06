import * as actionTypes from '../constants/procutsConstants'

import axios from 'axios'

export const getProducts=() => async(dispatch)=>{
    try {
        dispatch({type:actionTypes.GET_PRODUCTS_REQUEST});
        const {data} = await axios.get('/api/products')
    } catch (error) {
        dispatch({
            type:actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}