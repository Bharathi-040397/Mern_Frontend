import React from 'react'
import { Card } from 'react-bootstrap'
import{useSelector,useDispatch} from 'react-redux'
import { addCart } from '../redux/Action/Cart'
import { showErrMsg,showSuccessMsg} from './Notification'

function Product() {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products)
    const { success, error } = useSelector(state => state.messages);

    const add_to_Cart = (name) => {
        dispatch(addCart(name));
    }
  return (
    
      <div className="gallery">
    {error && showErrMsg(error)}
   {success && showSuccessMsg(success)}   
     
        <div className="gallery-center">
        {products && products.map((p) => (
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
                    <button className="btn btn-info" onClick={()=>add_to_Cart(p.name)}>Add to Cart</button>
                </Card.Body>
              </Card>
            ))}
            </div>
        </div>
    )
}

export default Product
