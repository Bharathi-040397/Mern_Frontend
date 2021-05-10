import ACTIONS from '../Action'
import axios from '../../Components/axios'



export const getProducts = () => async dispatch => {
	try {
		const res = await axios.get('/products/allProducts');
		dispatch({
			type: ACTIONS.GET_PRODUCTS,
			payload: res.data.products,
		});
	} catch (err) {
		dispatch({
			type: ACTIONS.SHOW_ERR_MESSAGE,
			payload: err.response.data.msg
		});
	}
};

export const createProduct = (productData) => async dispatch => {
    const { name,price,description,stock } = productData;
	try {
        const res = await axios.post('/products/addProduct', { name,price,description,stock })
		dispatch({
			type: ACTIONS.SHOW_SUCCESS_MESSAGE,
			payload: res.data.msg,
		});
		dispatch({
			type: ACTIONS.CREATE_PRODUCT,
			payload: res.data.product,
		});
	} catch (err) {
		dispatch({
			type: ACTIONS.SHOW_ERR_MESSAGE,
			payload: err.response.data.msg,
		})
	}
};

export const deleteProduct = (productId) => async dispatch => {
	try {
		const res = await axios.delete(`/products/deleteproduct/${productId}`);
		dispatch({
			type: ACTIONS.SHOW_SUCCESS_MESSAGE,
			payload: res.data.msg,
		});
		dispatch({
			type: ACTIONS.DELETE_PRODUCT,
			payload: res.data.Products,
		});
	} catch (err) {
		dispatch({
			type: ACTIONS.SHOW_ERR_MESSAGE,
			payload: err.response.data.msg,
		});
	}
};

export const getProduct = (name) => async dispatch => {
	try {
		const res = await axios.get(`/products/specificProduct/${name}`);
		dispatch({
			type: ACTIONS.GET_PRODUCT,
			payload: res.data.product
		});

	} catch (err) {
		dispatch({
			type: ACTIONS.SHOW_ERR_MESSAGE,
			payload: err.response.data.msg,
		});
	}
};






