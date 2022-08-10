import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { filterCategorisThunk, getProductsTrunk } from '../store/slices/products.slice';
import { filterHeadlineThunk } from '../store/slices/products.slice'
import { Row, Col, InputGroup, Form, Button, ListGroup, Container } from "react-bootstrap";
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import { addCartThunk } from '../store/slices/cart.slice';

/* Trunk  */

/*  CSS Card Image 

.card-img, .card-img-bottom, .card-img-top {
    width: fit-content;
    height: 200px;
    padding: 10px;
    margin: 0 auto;
}
*/


const Home = () => {
    /* https://vimeo.com/696804852/330637a647  video postman */
    /*  */
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((state) => state.products);

    /* Var search */
    const [searchValue, setSearchValue] = useState("");

    /* Categories */
    const [categories, setCategories] = useState([])

    /* Ver productos */
    useEffect(() => {
        dispatch(getProductsTrunk());
    }, []);

    /*  Categorias */
    useEffect(() => {
        dispatch(getProductsTrunk())
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => setCategories(res.data.data.categories))

    }, [])

    /*  Categorias 
    useEffect(() => {
        dispatch(getProductsTrunk())
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => setCategories(res.data.data.categories))

    }, []) */

    
    /* Client : addProduct */
    const addProduct = (id, quantity) => {
        console.log(id + "-" + quantity)
        if (localStorage.getItem("token")) {

            dispatch(addCartThunk(id, quantity))
        } else {

            navigate("/login")
        }
    }



    console.log(categories)

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Home</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Search Products"
                                aria-label="Search Products "
                                aria-describedby="basic-addon2"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                            />
                            <button
                                 className="btn btn-secondary " 
                                onClick={() => dispatch(filterHeadlineThunk(searchValue))}
                            >
                                Search
                            </button>
                        </InputGroup>

                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={2}>
                        <ListGroup>
                            {categories.map((category) => (
                                <ListGroup.Item
                                    onClick={() => dispatch(filterCategorisThunk(category.id))}
                                    style={{ cursor : 'pointer' }}
                                    key={category.name}
                                >
                                    {category.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col sm={10}>

                        <Row xs={1} md={3} className="g-4">

                            {
                                products.map((product) => (

                                    <Col key={product.productImgs?.[0]} >
                                        <Card  >
                                            <Card.Img variant="top"
                                                src={product.productImgs[0]} 
                                                style={{ height: '160px', objectFit: 'contain', padding: '10px', cursor: 'pointer' }}
                                                onClick={() => navigate(`/product/${product.id}`)}
                                                onMouseOver={e=>e.target.src= product.productImgs?.[1] }
                                                onMouseOut ={e=>e.target.src= product.productImgs?.[0] }
                                                 
                                            />
                                            <Card.Body>
                                                {/*<Card.Title>{product.title}</Card.Title>*/}
                                                <Card.Text>
                                                    {product.title}

                                                </Card.Text>
                                            </Card.Body>
                                            <div className='card-footer'>
                                                <div>{product.price} $</div>
                                                <Button onClick={() => addProduct(product.id, 1)} className="btn btn-primary btn-sm " >Cart</Button >
                                            </div>
                                        </Card>
                                    </Col>
                                ))
                            }

                        </Row>
                    </Col>
                </Row>
            </Container>


        </>


    );
};

export default Home;