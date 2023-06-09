/* import(s) */
import React from 'react';

function SidebarTokoBuku({setSelectedMenuItem}) {
    /* init */
    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    }

    return (
        /* list of the sidebar-menu */
        <div>
            <ul>
                <li>
                    <button onClick={() => handleMenuItemClick('menu1')}>Dapatkan Produk
                    </button>
                </li>

                <li>
                    <button onClick={() => handleMenuItemClick('menu2')}>Transfer
                    </button>
                </li>
            </ul>
        </div>  
    );
}

export default SidebarTokoBuku;
