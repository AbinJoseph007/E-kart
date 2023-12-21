import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
    const  wishlist = useSelector((state)=>state.wishlistReducer) //state represent store 
    console.log(wishlist);

    const cart = useSelector((state)=>state.cartreducer)
    console.log(cart);
  return (
    <>
     <Navbar expand="lg" className="bg-success fixed-top">
      <Container >
        <Navbar.Brand><Link to={'/'} style={{textDecoration:"none" ,color:"black"}}><i class="fa-solid fa-cart-shopping me-3"></i>{' '}
E-CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/wishlist'}  style={{textDecoration:"none" ,color:"black"}} ><i class="fa-regular fa-heart fa-ms me-5"><Badge bg="secondary" className='rounded ms-2'>{wishlist.length}</Badge></i></Link></Nav.Link>
            <Nav.Link><Link to={'/cart'}  style={{textDecoration:"none" ,color:"black"}} ><i class="fa-solid fa-cart-shopping fa-2x "></i><Badge bg="secondary" className='rounded ms-2'>{cart.length}</Badge></Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header