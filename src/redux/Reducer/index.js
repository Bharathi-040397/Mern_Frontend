import {combineReducers} from 'redux'
import products from './Product'
import messages from './Message'
import cart from './Cart'


export default combineReducers({
    messages,
    products,
    cart
})