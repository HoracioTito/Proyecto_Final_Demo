import '../css/modal.css'
import '../css/sitePrincipal.css'

import React, { useEffect } from 'react';
import { useState } from 'react';

import { Navbar, Nav, NavDropdown, InputGroup, Form, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { delCartThunk, getCartThunk, qtyCartThunk } from '../store/slices/cart.slice';
import ProductsCart from './ProductsCart';
import { useNavigate } from 'react-router-dom';
import { filterHeadlineThunk } from '../store/slices/products.slice';




const NavBar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartList = useSelector(state => state.cart)

  /* Var search */
  const [searchValue, setSearchValue] = useState("");

  /* Modal CSS  */
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  /* Is Login ? */
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);

    }
  }, [])

  /* Log Out  */
  const logOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    setIsCartOpen(false)
    navigate("/login")
  }



  /*  Modal Cart Products   ind 0=> Modal Cart */
  const modalCart = () => {
    if (localStorage.getItem("token")) {
      setIsCartOpen(!isCartOpen);
      dispatch(getCartThunk());
      // alert(isCartOpen)
    } else {
      alert("login")
      setIsCartOpen(false)
      navigate("/login")
    };
  }

  /* Search Products */

  const searchProduct=(searchValue)=>{
    dispatch(filterHeadlineThunk(searchValue))
    navigate('/')
  }

  /* Delete product of Cart  */
  const delProduct = (id) => {
    if (localStorage.getItem("token")) {

      let text = "Remove product from cart?\nOK or Cancel.";
      if (confirm(text) == true) {
        setIsCartOpen(!isCartOpen);
        dispatch(delCartThunk(id));
      }


    } else {
      // alert("login")
      navigate("/login")
    };
  }

  /* Modific quantity products of Cart */
  const qtyProduct = (id, quantity) => {
    if (localStorage.getItem("token")) {
      setIsCartOpen(!isCartOpen);
      dispatch(qtyCartThunk(id, quantity));

    } else {
      // alert("login")
      navigate("/login")
    };
  }


  return (

    <>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <Navbar.Brand href="/"><i className="fa-solid fa-solar-panel fa-2xl"></i> Electronic </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {isLogin === false ?
                (<Nav.Link href="#/login">Login <i className="fa-solid fa-user-lock"></i> </Nav.Link>)
                :
                (
                  <>
                    <NavDropdown title={localStorage.getItem("userName")} id="basic-nav-dropdown">
                      <NavDropdown.Item onClick={() => logOut()} >Log Out</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#/purchases">Purchases</Nav.Link>
                  </>
                )}


              <Nav.Link >
                <button className="btn btn-primary" onClick={() => modalCart()}  >
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </Nav.Link>

              <Form className="d-flex">
                <Form.Control
                  placeholder="Search"

                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  className="me-2"
                />
                <Button

                  className="btn btn-secondary my-2 my-sm-0"
                  onClick={() => searchProduct(searchValue)}
                >
                  Button
                </Button>
              </Form>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <ProductsCart cartList={cartList} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} delProduct={delProduct} qtyProduct={qtyProduct} />
    </>

  );
};

export default NavBar;