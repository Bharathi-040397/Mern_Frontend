import React from 'react'
import { Card } from 'react-bootstrap'
import{useSelector,useDispatch} from 'react-redux'
import { clearCart, removeCart } from '../redux/Action/Cart'
import { showErrMsg,showSuccessMsg} from './Notification'

function Cart() {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart)
    const { success, error } = useSelector(state => state.messages);

    const remove_Cart = (name) => {
        dispatch(removeCart(name));
    }

    const clearAll = () => {
        dispatch(clearCart());
    }
  return (
    
      <div className="gallery">
    {error && showErrMsg(error)}
   {success && showSuccessMsg(success)} 
   <div className="remove_all_btn">
     <button className="btn btn-outline-danger" onClick={()=>clearAll()}>Remove All</button>
     </div>
        <div className="gallery-center">
        {cart && cart.map((p) => (
            <Card style={{ width: '18rem' }} key={p._id}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt={p.name} style={{width:'auto', height:'200px'}} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-left">{p.name}</Card.Title>
                     <Card.Text style={{textAlign:'left' ,fontWeight:'500px'}}>
                       {p.description} 
                     </Card.Text>
                     <Card.Text style={{textAlign:'right',color:'red',fontWeight:'500px'}}>
                       ₹ {p.price} 
                    </Card.Text>
                    <button className="btn btn-danger" onClick={()=>remove_Cart(p.name)}>Remove</button>
                </Card.Body>
              </Card>
            ))}
            </div>
        </div>
    )
}

export default Cart
