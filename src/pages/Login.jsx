import { Button, Col, Container, Form, Row, Spinner, Stack } from 'react-bootstrap';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../store/slices/isLoading.slice';



const Login = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.isLoading);


    //{setTimeout(() => dispatch(setIsLoading(false)), 2000)}
    //setTimeout (()=> setIsLoading(false) , 3000)

    /* Navigate - redirect */

    const navigate = useNavigate()

    /*  Form react */
    const { register, handleSubmit } = useForm()

    /* Hidden isLoadin */

    const loadingHidden = () => {
        dispatch(setIsLoading(false))
    }

    /* Get Token*/
    const getToken = (dataObj) => {

        const token = []

        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', dataObj)
            .then(res => {
                console.log(res.data)
                token[0] = res.data.data.token
                token[1] = res.data.data.user.firstName
                token[2] = res.data.data.user.lastName
                console.log(token)
                localStorage.setItem("token", token[0])
                localStorage.setItem("userName", token[1])
                window.location.reload(false);

            })
            .catch(error => {
                console.log(error)
                if(error.response.status === 404 ){
                    alert("Error Credencials")
                }
                
                // setToken([])
            })
    }

    /* Reception info Form */
    const submit = (data) => {

        console.log(data)
        /*  Form control */

        if (data.email === "" || data.password === "") {
            alert("Campo vacio")

        } else if (data.password.length > 5) {
            /* Request info */
            getToken(data)
        } else {
            alert("Password menos a 5 caracteres !!!")
        }
    }


    return (
        <Container >

            <Row className="justify-content-md-center">
                <Col sm={4} >
                    <div style={{ marginTop: 'calc(50% - 80px)' }}>
                        <h3>Login</h3>
                        {
                            !localStorage.getItem("token") ?
                                (


                                    <Form onSubmit={handleSubmit(submit)}>

                                        <Form.Group className="form-group row" >


                                            <Form.Label htmlFor='email-input' className="col-sm-2 col-form-Form.Label">Email</Form.Label>
                                            <Form.Control type='email' id='email-input' {...register("email")} />
                                        </Form.Group >
                                        <Form.Group className="form-group row">



                                            <Form.Label htmlFor='password-input' className="col-sm-2 col-form-Form.Label">Password</Form.Label>
                                            <Form.Control type='password' id='password-input' {...register("password")} />

                                        </Form.Group >
                                        <p> </p>

                                        <button className="btn btn-primary" >Login</button>
                                        <br />
                                        <br/>
                                        <p>user: hchoque@gmail</p>
                                        <p>Password: pass0123</p>
                                        <br />
                                       
                                    </Form>

                                ) : (
                                    <><div className='text-center' >
                                        <br />
                                        <Spinner animation="border" variant="danger" className='spinner-redirect ' />
                                        <br />
                                        <h2 >{localStorage.getItem("userName")}</h2>
                                        <br />
                                        <br />
                                        <br />
                                        <div id={setTimeout(() => navigate('/'), 2000)}> </div>
                                    </div>
                                    </>
                                )


                        }

                    </div>
                </Col>
            </Row>
            <script> onLoad={setTimeout(() => loadingHidden(), 2000)} </script>
        </Container>

    );
};

export default Login;