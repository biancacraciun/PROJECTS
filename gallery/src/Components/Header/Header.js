import React from 'react';

import './Header.scss';
import DrawerToggleButton from '../Menu/Button/DrawerToggleMenu';

const header = (props) => { 
    return (
        <div className="header">
            <DrawerToggleButton className="button" clickButton={props.drawerClickHandler} />
            <p>One Page Resume</p>
        </div>
    )
}

export default header;