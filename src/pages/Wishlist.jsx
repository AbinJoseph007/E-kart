import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';

function Wishlist() {

  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()
  return (
    <div style={{ marginTop: "100px", marginBottom: "50px" }}>
      <Row className='ms-5 me-3' style={{ marginTop: "100px" }}>
        {wishlistArray?.length > 0 ?
          wishlistArray?.map((item) => (<Col className='mb-5 mt-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail} style={{ height: "200px", width: "100%" }} />
              <Card.Body>
                <Card.Title className='fw-bolder' style={{ fontSize: "20px" }}>{item.title.slice(0, 20)}..</Card.Title>
                <Card.Text>
                  <p>{item.description.slice(0, 40)}..</p>
                  <p className='fw-bolder'>Price : {item.price}</p>
                </Card.Text>
                <div className='d-flex align-items-center justify-content-between'>
                  <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-dark btn rounded"><i class="fa-regular fa-trash"></i></Button>
                  <Button variant="outline-dark btn rounded"><i class="fa-solid fa-cart-shopping"></i></Button>
                </div>

              </Card.Body>
            </Card>
          </Col>))
          :
          <div style={{ height: "100vh" }} className='d-flex flex-column justify-content-center align-items-center'>
            <img height={'300px'} src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="no image" />
            <h4 className='mt-4'>your wishlist is empty</h4>
            <Link to={'/'} style={{ textDecoration: "none" }}> back to home </Link>
          </div>
        }

      </Row>
    </div>
  )
}

export default Wishlist