/* import(s) */
import React from 'react';
import Transfer from "./Transfer";
import Dapatkan from "./Dapatkan";

function ContentTokoBuku({selectedMenuItem}) {
    /* init */
    let content = null;

    /* if state based on selected-menu */
    if (selectedMenuItem === 'menu1') {
        content = <div><Dapatkan /></div>;
    } else if (selectedMenuItem === 'menu2') {
        content = <div><Transfer /></div>;
    }

    /* pass the selected menu */
    return <div>{content}</div>;
}

export default ContentTokoBuku;