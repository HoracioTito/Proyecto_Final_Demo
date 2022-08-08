import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Row>
            <footer className="footer-color align-items-center py-3 my-4 border-top">
                <div className='d-flex flex-wrap justify-content-between'>
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-c text-decoration-none lh-1">
                        <i className="fa-solid fa-solar-panel fa-2xl color-w"></i>
                        </a>
                        <h5 className="mb-3 mb-md-0 text-c color-w">Horacio Choque </h5>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-c" href="#"><i className="fa-brands fa-linkedin fa-2xl color-w"></i></a></li>
                        <li className="ms-3"><a className="text-c" href="#"><i className="fa-brands fa-instagram fa-2xl color-w"></i></a></li>                       
                        <li className="ms-3"><a className="text-c" href="#"><i className="fa-brands fa-twitter fa-2xl color-w"></i></a></li>

                         <li className="ms-3"><a className="text-c" href="#"><i className="fa-brands fa-facebook-f  fa-2xl color-w"></i></a></li>
                    </ul>
                </div>

                <p className="align-items-center mb-3 text-c">© 2022 Company, Inc</p>

            </footer>
            
            </Row>
            

        </Container>
    );
};

export default Footer;