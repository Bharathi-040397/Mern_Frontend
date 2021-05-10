import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { makeStyles,fade } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { ProductModal} from './Modal'
import {useSelector,useDispatch} from 'react-redux'
import { deleteProduct } from '../redux/Action/Product'
import { clearMessage } from '../redux/Action/Message'
import { showErrMsg, showSuccessMsg } from './Notification'






  
const myStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        border: '1px solid black',
        borderRadius:'30px',
    },
    marginLeft: 0,
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
},


  }));

 
  
function Home() {
  const classes = myStyles();
  const dispatch = useDispatch();

  const { products } = useSelector(state => state.products)
  const { success, error } = useSelector(state => state.messages);

  const [modalShow, setModalShow] = useState(false);
  const [dense] = useState(false);
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    dispatch(clearMessage());
  }, [products,dispatch])
	

  const deleteproduct =async (productId) => {
    await dispatch(deleteProduct(productId));
 }
	
	return (
    <div className="bg-light" style={{height:"100vh"}}>
   
    <div className='my-3'>
    <div className='container'>
    <div className='row pb-3'>

      <div className='col-md-12 my-1'>
          <Button variant="info"  block onClick={() => setModalShow(true)} style={{marginRight:'2rem'}} >
        <i className="fa fa-plus" aria-hidden="true" style={{marginRight:'.3rem'}}></i>Add Product
        </Button>

        <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </div>
        </div>
        <div className='gallery_container'>
         <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h5>Products <span>({products.length})</span></h5>
            <div className={classes.search}>
        <div className={classes.searchIcon}>
        <SearchIcon />
        </div>
        <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
                      </div>
                      </div>
          <div className="item_container">
              <List dense={dense} style={{width:'100%'}}>
            {error && showErrMsg(error)}
            {success && showSuccessMsg(success)}
            
            {products && products.filter((p) => {
            if (search === '') {
              return p
            }
            else if(p.name.toLowerCase().includes(search.toLowerCase())) {
              return p
            }
            return 0
                   }).map((p) => (
            
        <ListItem key={p._id} style={{ borderBottom: '1px solid #3333',cursor:'pointer' }}>

            <ListItemText style={{width:'60px'}}
            primary={p.name}
          />
            {/* <ProductEditModal
             show={product_editModal}
             productId={id}
             onHide={() => setProduct_editModal(false)}
          />	 */}
        
        <ListItemSecondaryAction className={classes.action_buttons}>
          <Tooltip title="delete" arrow>
            <IconButton edge="end" aria-label="delete" onClick={()=>deleteproduct(p._id) }   >
            <DeleteIcon  />
            </IconButton>
          </Tooltip>
      </ListItemSecondaryAction>
      </ListItem>
        ))}
            
          </List>
        </div>	
                </div>
          </div>
  </div>
</div>
	)
}

export default Home
