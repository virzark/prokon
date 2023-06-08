/* import(s) */
import React, { useState, useEffect } from "react";
import NavigationBar from "../NavigationBarTokoBuku";
import Sidebar from "./SidebarTokoBuku";
import Content from "./ContentTokoBuku";
import "../../styles/App.css";
import '../../styles/navbar.css';
import '../../styles/sidebar.css';
import '../../styles/content.css';

function Tokobuku() {
    /* init */
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    /* store into local-storage in selected-menu-item for 'menu1' */
    
    useEffect (() => {
        const storeMenuItem = localStorage.getItem('selectedMenuItem');
        if (storeMenuItem) {
        setSelectedMenuItem(storeMenuItem);
        } else {
        setSelectedMenuItem('menu1');
        }
    }, []);

    return (
        /* parent div to contains all*/
        <div className="myBG">
            {/* navbar */}
            <div>
                <NavigationBar />
            </div>

            {/* body */}
            <div className='full-container'>
                {/*sidebar-menu */}
                <div className='sidebar'>
                <Sidebar setSelectedMenuItem = {setSelectedMenuItem} />
                </div>

                {/* selected sidebar's content */}
                <div className='content'>
                <Content selectedMenuItem = {selectedMenuItem} />
                </div>
            </div>
            

            {/* footer (copyright) */}
            <footer>
                <div>
                <small>Copyright © 2023 Ethery All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
}

export default Tokobuku;