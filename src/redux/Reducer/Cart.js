import ACTIONS from '../Action'

const initialState = {
    cart: [],
   
};

const Cart = (state = initialState, action) => {
   
    switch (action.type) {
        case ACTIONS.ADD_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case ACTIONS.EMPTY_CART:
            return {
                ...state,
                cart:[]
            }
            
        case ACTIONS.REMOVE_CART:
            let newcart = [...state.cart];
            const index = state.cart.findIndex(
                (cartItem) => cartItem._id === action.payload._id
            );
                
            if (index >= 0) {
                newcart.splice(index, 1);
             }
            else {
                console.warn("can't remove product");
            }
            return {
                ...state,
                cart: newcart,
            };
        
        default:
            return state;
    }
  
};

export default Cart