/* import(s) */
import React, { useState, useEffect } from "react";
import NavigationBar from "./NavigationBarKonsumen";
import Sidebar from "./SidebarKonsumen";
import Content from "./ContentKonsumen";
import "../../styles/App.css";
import '../../styles/navbar.css';
import '../../styles/sidebar.css';
import '../../styles/content.css';

function Tokobuku({ navigateToHome, navigateToPage }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  useEffect(() => {
    const storeMenuItem = localStorage.getItem('selectedMenuItem');
    if (storeMenuItem) {
      setSelectedMenuItem(storeMenuItem);
    } else {
      setSelectedMenuItem('menu1');
    }
  }, []);

  return (
    <div className="myBG">
      {/* navbar */}
      <div>
        <NavigationBar />
      </div>

      {/* home button */}
      <div className="homeButton">
        <button className="customButton" onClick={navigateToHome}>Back to Home</button>
      </div>

      {/* body */}
      <div className="full-container">
        {/* sidebar-menu */}
        <div className="sidebar">
          <Sidebar setSelectedMenuItem={setSelectedMenuItem} />
        </div>

        {/* selected sidebar's content */}
        <div className="content">
          <Content selectedMenuItem={selectedMenuItem} />
        </div>
      </div>

      {/* footer */}
      <footer>
        <div>
          <p>© 2023 Ethery All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Tokobuku;