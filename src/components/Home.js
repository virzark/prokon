/* import(s) */
import React from 'react';
import "../styles/home.css";
import { Col, Row} from "react-bootstrap"

const Home = ({ navigateToPage }) => {
    return (
        <div className = "home-container">
            <div className = "intro">
                <div className = "text-white text-center d-flex justify-content-center align-items-center">
                    <Row>
                        <Col>
                            <h2>Welcome to</h2>
                            <h1>Ethery</h1>
                        </Col>
                    </Row>
                </div>
            </div>
            
            <div className = "button-container">
                <button className ="customButton" onClick={() => navigateToPage('page1')}>Publisher</button>
                <button className ="customButton" onClick={() => navigateToPage('page2')}>Bookstore</button>
                <button className ="customButton" onClick={() => navigateToPage('page3')}>Buyer</button>
            </div>

        </div>
    );
}

export default Home;
