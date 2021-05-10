import ACTIONS from '../Action'
import axios from '../../Components/axios'

export const addCart = (name) =>async dispatch=> {
    try {
        const res = await axios.get(`/products/specificProduct/${name}`)
        console.log(res.data.product);
       
        dispatch({
            type:ACTIONS.ADD_CART,
            payload:res.data.product,
        })
       
    } catch (err) {
		dispatch({
			type: ACTIONS.SHOW_ERR_MESSAGE,
			payload: err.response.data.msg
		});
	}
   
}
export const removeCart = (name) =>async dispatch=> {
    try {
        const res = await axios.get(`/products/specificProduct/${name}`)
        console.log(res.data.product);
       
        dispatch({
            type:ACTIONS.REMOVE_CART,
            payload:res.data.product,
        })
       
    } catch (err) {
		dispatch({
			type: ACTIONS.SHOW_ERR_MESSAGE,
			payload: err.response.data.msg
		});
	}
}
export const clearCart = () => {
    return {
        type: ACTIONS.EMPTY_CART
    }
}
