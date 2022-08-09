import React from 'react';
import "../css/loadingScreen.css";
import { Spinner } from "react-bootstrap";

const LoadingScreen = () => {
    return (
        <div className='spinner-center'>
            <div >
                <h1>Loading</h1>
                <Spinner animation="grow" variant="secondary spinner-w" />
            </div>
        </div>
    );
};

export default LoadingScreen;