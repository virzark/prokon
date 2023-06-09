/* import(s) */
import React from 'react';
import Dapatkan from "./Dapatkan";

function ContentKonsumen({selectedMenuItem}) {
    /* init */
    let content = null;

    /* if state based on selected-menu */
    if (selectedMenuItem === 'menu1') {
        content = <div><Dapatkan /></div>;
    } 

    /* pass the selected menu */
    return <div>{content}</div>;
}

export default ContentKonsumen;