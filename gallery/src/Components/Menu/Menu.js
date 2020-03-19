import React, { Component } from 'react';
import { Link } from 'react-scroll';

import './Menu.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu">
                <Link
                    className="option"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                > Home </Link>
                
                <Link 
                    className="option"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                > About </Link>
                <Link 
                    className="option"
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                > Resume </Link>
                <Link 
                    className="option"
                    activeClass="active"
                    to="knowledge"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                > Knowledge and skills </Link>
                <Link 
                    className="option"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                > Contact </Link>

            </div>
        )
    }
}

export default Menu;