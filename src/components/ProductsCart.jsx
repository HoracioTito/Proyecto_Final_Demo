import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ProductsCart = ({ cartList, isCartOpen, setIsCartOpen, delProduct, qtyProduct }) => {

    const modifQuantity = (id, quantity, comand) => {

        console.log(id, quantity, comand)
        /* Stock disponibl epor defecto 10 */
        const stock = 10

        if (comand === 1 && stock >= quantity) {
            /*  Add quantity */
            quantity++
            qtyProduct(id, quantity)
        }
        if (comand === 0 && quantity > 1) {
            /*  Minus quantity */
            quantity--
            qtyProduct(id, quantity)
        }

    }


    return (
        <Container>
            <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
                <Row>
                    <Col>
                        <h4 onClick={() => setIsCartOpen(false)} style={{cursor : 'pointer'}} > X Product Cart </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            cartList.map((cartProducts) =>
                                <div className='box-info' key={cartProducts.title} >
                                    {/*<div>{cartProducts.id}</div>*/}
                                    <div >{cartProducts.title}</div>
                                    <div ><p className="fw-semibold fsmall" >Price : {cartProducts.price}$ - Qty: {cartProducts.productsInCart.quantity}</p></div>
                                    <div>Total : {cartProducts.productsInCart.quantity * cartProducts.price}</div>
                                    <div className="box-price">
                                        <button onClick={() => modifQuantity(cartProducts.id, cartProducts.productsInCart.quantity, 0)}
                                            className="btn btn-success btn-modal h-modal"
                                        >-</button >
                                        <input type="number" id="quantity" className="form-control text-center h-modal" value={cartProducts.productsInCart.quantity} disabled />
                                        <button
                                            onClick={() => modifQuantity(cartProducts.id, cartProducts.productsInCart.quantity, 1)}
                                            className="btn btn-success  btn-modal h-modal"
                                        >+</button >
                                        <button
                                            onClick={() => delProduct(cartProducts.id)}
                                            className="btn btn-secondary  btn-modal h-modal"
                                        ><i className="fa-solid fa-trash-can"></i></button >
                                    </div>

                                </div>
                            )
                        }

                    </Col>
                </Row>
            </div>
        </Container>





    );
};

export default ProductsCart;