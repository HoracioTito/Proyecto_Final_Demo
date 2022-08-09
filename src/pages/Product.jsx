import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsTrunk } from '../store/slices/products.slice';
import { addCartThunk, getCartThunk } from '../store/slices/cart.slice';
/*  Carrousel */
import Button from 'react-bootstrap/Button';

// import "../../node_modules/bootstrap/dist/css/bootstrap.css"
/*  CSS  */
import { Container, Row, Col, Card } from 'react-bootstrap';
import InputQuantity from '../components/InputQuantity';
import ImageProduct from '../components/ImageProduct';
import ProductsCart from '../components/ProductsCart';



const Product = () => {

    /* Dispatch */
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams()

    /*  Quantity Sales  */
    const [quantity, setQuantity] = useState(1)

    /* AllProducts  - Product Deatil - Product Suggest */
    const allProducts = useSelector(state => state.products)
    const messages = useSelector(state => state.messages)
    const cartList = useSelector(state => state.cart)

    const [productDetail, setProductDetail] = useState([])
    const [productsSuggest, setproductsSuggest] = useState([])

    /* Client : addProduct */
    const addProduct = (id, quantity) => {
        console.log(id + "-" + quantity)
        if (localStorage.getItem("token")) {

            dispatch(addCartThunk(id, quantity))
        } else {

            navigate("/login")
        }
    }


    /* getCartThunk */
    const getCart = () => {
        alert("NO usado ")
        ///  dispatch(getCartThunk())

    }


    /* Get Product - Ecommers  */
    useEffect(() => {

        dispatch(getProductsTrunk());
        dispatch(getCartThunk())
        /*  Scroll top Page */
        // document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

    }, [id]);

    /* Get Product Category - Ecommers  */
    useEffect(() => {
        const productFind = allProducts.find(productDetail => productDetail.id === Number(id))
        setProductDetail(productFind)
        // console.log(productFind)
        // console.log(productFind?.category.id)

        /* productos sugeridos */
        const filterProducts = allProducts.filter(product => {

            return product.category.id === productFind?.category.id
        })

        setproductsSuggest(filterProducts)

        console.log(filterProducts)

    }, [allProducts, id])


    /* console.log(allProducts)
    console.log(productDetail)
    console.log(messages) */
    console.log('-------------------------------------------')
    console.log(cartList)



    return (
        <>
            <Container>
                <Row>
                    <br />
                </Row>
                <Row>
                    <Col sm={6}>

                        <ImageProduct productDetail={productDetail} />

                    </Col>

                    <Col sm={6}>
                        <Row>
                            <h2>{productDetail?.title}</h2>
                            <p>Products SKU : {id}</p>
                        </Row>
                        <Row>

                            <p>{productDetail?.description}</p>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <div>Stock : 10 </div>
                                <div>
                                    <Button
                                        onClick={() => addProduct(Number(id), quantity)}
                                        style={{ width: '120px' }}

                                    >Cart{" "} {" "}{" "}<i className="fa-solid fa-cart-shopping"></i> </Button >
                                </div>
                            </Col>
                            <Col sm={6}>
                                <InputQuantity quantity={quantity} setQuantity={setQuantity} stock={10} />
                            </Col>

                        </Row>
                    </Col>



                </Row>

            </Container>

            <Container>
                <Row>
                    <br />
                    <br />
                </Row>
                <Row>

                    <h4>Product suggest</h4>
                </Row>
                <Row>

                    {
                        productsSuggest.map((suggest) => (

                            <Col sm={3} key={suggest.id}>
                                <Card style={{ width: '100%', padding: 10, marginTop: 20 }} >
                                    <img variant="top"
                                        src={suggest.productImgs?.[0]}
                                        style={{ height: '100px', objectFit: 'contain', padding: '10px', cursor: 'pointer' }}
                                        onClick={() => navigate(`/product/${suggest.id}`)}
                                        onMouseOver={e=>e.target.src= suggest.productImgs?.[1] }
                                        onMouseOut ={e=>e.target.src= suggest.productImgs?.[0] }
                                    />
                                    <Card.Body>

                                        <Card.Text>
                                            {suggest.title}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={6} >
                                                <Button onClick={() => addProduct(suggest.id, 1)} className="btn btn-primary btn-sm " >Cart</Button >
                                            </Col>
                                            <Col sm={6} >
                                                {suggest.price} $
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))

                    }
                </Row>
            </Container>
        </>

    );
};

export default Product;