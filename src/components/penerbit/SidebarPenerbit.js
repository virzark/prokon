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
                    <button onClick={() => handleMenuItemClick('menu1')}>Register Company
                    </button>
                </li>

                <li>
                    <button onClick={() => handleMenuItemClick('menu2')}>Tambah
                    </button>
                </li>

                <li>
                    <button onClick={() => handleMenuItemClick('menu3')}>Transfer
                    </button>
                </li>

                <li>
                    <button onClick={() => handleMenuItemClick('menu4')}>Dapatkan Produk
                    </button>
                </li>
            </ul>
        </div>  
    );
}

export default SidebarPenerbit;
