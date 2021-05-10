import ACTIONS from '../Action'

const INITIAL_STATE = {
	product:null,
	products: [],
};

const Product = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTIONS.CREATE_PRODUCT:
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case ACTIONS.GET_PRODUCTS:
			return {
				...state,
				products:[...action.payload]
			};
		
		case ACTIONS.DELETE_PRODUCT:
			return {
				...state,
				products: state.products.filter(
					p => p._id !== action.payload._id
				),
			};
		case ACTIONS.GET_PRODUCT:
			return {
				...state,
				product: action.payload
			}

		default:
			return state;
	}
}
export default Product

