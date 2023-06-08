/* import(s) */
import React from 'react';
import Register from "./Register";
import Tambah from "./Tambah";
import Transfer from "./Transfer";
import Dapatkan from "./Dapatkan";

function ContentPenerbit({selectedMenuItem}) {
    /* init */
    let content = null;

    /* if state based on selected-menu */
    if (selectedMenuItem === 'menu1') {
        content = <div><Register /></div>;
    } else if (selectedMenuItem === 'menu2') {
        content = <div><Tambah /></div>;
    } else if (selectedMenuItem === 'menu3') {
        content = <div><Transfer /></div>;
    } else if (selectedMenuItem === 'menu4') {
        content = <div><Dapatkan /></div>;
    }

    /* pass the selected menu */
    return <div>{content}</div>;
}

export default ContentPenerbit;