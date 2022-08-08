import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPurchasesTrunk } from '../store/slices/purchases.slice';
import { Col, Container, Row } from 'react-bootstrap';
// import { getPurchasesListTrunk, getPurchasesTrunk } from '../store/slices/purchases.slice';




const Purchases = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const purchases = useSelector((state) => state.purchases);
    let total = 0

    /* Purchases productos */
    useEffect(() => {
        dispatch(getPurchasesTrunk());
    }, []);
    console.log(purchases)
    console.log(purchases?.[0]?.cart.products)
    return (
        <Container >
            <Row className="justify-content-md-center">

                <Col xs lg="8" >
                <h1> Puchases</h1>

                {
                    purchases.map((purchase) => (
                        <div key={purchase.createdAt} className="card text-white mb-5"  >
                            <div className="card-header bg-primary" >{purchase.id}  {" - Purchase : "}{purchase.createdAt}</div>
                            <div className="card-body text-muted" id={total=0}>


                                {

                                    purchase.cart.products.map((product) => (
                                        <div  key={product.cart?.products.title} style={{ padding: '15px 0px', borderBottom: 'solid 1px' }} >
                                            <div  
                                             style={{ cursor: 'pointer' }} 
                                             onClick={() => navigate(`/product/${product.id}`)} 
                                             className="card-title" 
                                             >
                                                <i className="fa-solid fa-eye"></i>{"    "}{product.title}
                                             </div>
                                            <div>Qty : {product.productsInCart.quantity}{"  Price : "} {product.price} $</div>
                                           <p id={total = Number( product.price )+ total  } ></p>
                                        </div>
                                         
                                    ))
                                    
                                }
                                <h5>{total} $</h5>
                            </div>

                        </div>

                    ))

                }
                </Col>
            </Row>
        </Container>
    );
};

export default Purchases;