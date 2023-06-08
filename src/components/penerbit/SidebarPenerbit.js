/* import(s) */
import React from 'react';

function SidebarPenerbit({setSelectedMenuItem}) {
    /* init */
    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    }

    return (
        /* list of the sidebar-menu */
        <div>
            <ul>
                <li>
                    <a href="#" onClick={() => handleMenuItemClick('menu1')}>Register Company
                    </a>
                </li>

                <li>
                    <a href="#" onClick={() => handleMenuItemClick('menu2')}>Tambah
                    </a>
                </li>

                <li>
                    <a href="#" onClick={() => handleMenuItemClick('menu3')}>Transfer
                    </a>
                </li>

                <li>
                    <a href="#" onClick={() => handleMenuItemClick('menu4')}>Dapatkan Produk
                    </a>
                </li>
            </ul>
        </div>  
    );
}

export default SidebarPenerbit;