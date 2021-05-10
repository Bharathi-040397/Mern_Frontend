import React,{useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Input from './Input'
import { showErrMsg, showSuccessMsg } from './Notification'
import { createProduct } from '../redux/Action/Product'
import {clearMessage} from '../redux/Action/Message'


export const ProductModal = (props) => {
  const { success, error } = useSelector(state => state.messages);
    
    const dispatch = useDispatch();
    const [err, setErr] = useState('');
    

    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        stock:''
      })

    const handleChangeInput = (e) => {
        const value = e.target.value;
        setProduct({
            ...product,
            [e.target.name]: value
        });
  }

  const handlemessage = () => {
    dispatch(clearMessage());
    setErr("");
      
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.name) {
     return setErr("title is required");
    }
   else if (!product.price) {
     return setErr("price is required");
    }
    else if (!product.description) {
     return setErr("description is required");
    }
    else if (!product.stock) {
     return setErr("stock is required");
    }
    else {
      dispatch(createProduct(product));
      setProduct({
        name: '',
        price: '',
        description: '',
        stock:''
      })
    }
  }
    
   
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onClick={()=>handlemessage()}
    >
      <Modal.Header className='giftbox text-white bg-info' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Product
        </Modal.Title>
          </Modal.Header>
        <Form onSubmit={(e)=>handleSubmit(e)} autoComplete="on">
              <Modal.Body>
                  {err && showErrMsg(err)}
                  {error && showErrMsg(error)}
                  {success && showSuccessMsg(success)}
                  <Input
                  label="Product"
                  type="text"
                  name="name"
                  value={product.name}
                  id="formProductName"
                  onChange={(e)=>handleChangeInput(e)}
                  />
                  <Input
                  label="Price"
                  type="text"
                  name="price"
                  value={product.price}
                  id="formProductPrice"
                  onChange={(e)=>handleChangeInput(e)}
              />
                  <Input
                  label="Description"
                  type="text"
                  name="description"
                  value={product.description}
                  id="formProductDesc"
                  onChange={(e)=>handleChangeInput(e)}
                    />
                    <Input
                    label="In-Stock"
                    type="text"
                    name="stock"
                    value={product.stock}
                    id="formProductStock"
                    onChange={(e)=>handleChangeInput(e)}
                    />             
      
 </Modal.Body>
          <Modal.Footer>
            <Button variant="info" type='submit'>Add</Button>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
              </Modal.Footer>
              </Form>
    </Modal>
  );
}




