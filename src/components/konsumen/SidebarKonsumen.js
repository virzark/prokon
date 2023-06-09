/* import(s) */
import React from 'react';

function SidebarKonsumen({setSelectedMenuItem}) {
    /* init */
    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    }

    return (
        /* list of the sidebar-menu */
        <div>
            <ul>
                <li>
                    <a href="#" onClick={() => handleMenuItemClick('menu1')}>Dapatkan Produk
                    </a>
                </li>

            </ul>
        </div>  
    );
}

export default SidebarKonsumen;