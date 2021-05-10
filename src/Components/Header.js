import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';




function Header() {
  const {cart} = useSelector(state=>state.cart)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
        style=
        {{
          padding: '15px',
          position: 'sticky',
        }}>
        <Container>
          <Link to="/" className="navbar-brand"><i className="fa fa-home" aria-hidden="true" style={{fontSize:'30px',marginRight:'.3rem'}}></i>Dashboard</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
              <Nav>
                <li className="nav-item" style={{ marginTop: '10px', marginRight: '10px', marginLeft: '1rem' }}>
                  <NavLink to='/products' className="nav-link"><i className="fa fa-folder-open" aria-hidden="true" style={{marginRight:'.2rem'}}></i>Gallery</NavLink>
                </li>
                <li className="nav-item" style={{ marginTop: '10px', marginRight: '10px', marginLeft: '1rem' }}>
                  <NavLink to='/cart' className="nav-link"><i className="fa fa-gift" aria-hidden="true" style={{marginRight:'.2rem'}}></i>Cart <span>({cart.length})</span></NavLink>
                </li>
                </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
                  
        
            
    
    )
}

export default Header
