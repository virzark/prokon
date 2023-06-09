/* import(s) */
import React from 'react';
import "../styles/home.css";

const Home = ({ navigateToPage }) => {
    return (
        <div>
            <div className = "home-container">
                <h2>Welcome to</h2>
                <h1>Ethery</h1>
            </div>
            <div className = "button-container">
                <button onClick={() => navigateToPage('page1')}>Publisher</button>
                <button onClick={() => navigateToPage('page2')}>Bookstore</button>
                <button onClick={() => navigateToPage('page3')}>Buyer</button>
            </div>
        </div>
    );
}

export default Home;
