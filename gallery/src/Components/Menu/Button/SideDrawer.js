import React from 'react';
import { Link } from 'react-scroll';

import './SideDrawer.scss';

const sideDrawer = (props) => {
    let drawerClasses = 'side-drawer';

    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul className="toggle__menu">
                <Link
                    id="home"
                    className="option"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    {/* <FontAwesomeIcon className="home" icon={faHome} /> */}
                    Home
                </Link>
                
                <Link 
                    className="option"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    {/* <FontAwesomeIcon className="user" icon={faUser} /> */}
                    About
                </Link>

                <Link 
                    className="option"
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={0}
                    duration={1000}
                >
                    {/* <FontAwesomeIcon className="resume" icon={faUserGraduate} /> */}
                    Resume
                </Link>

                <Link 
                    className="option"
                    activeClass="active"
                    to="knowledge"
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={0}
                    duration={1000}
                >
                    {/* <FontAwesomeIcon className="knowledge" icon={faCogs} /> */}
                    Knowledge
                </Link>

                <Link 
                    className="option"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    {/* <FontAwesomeIcon className="contact" icon={faIdCard} /> */}
                    Contact
                </Link>
            </ul>
        </nav>
    )
};

export default sideDrawer;