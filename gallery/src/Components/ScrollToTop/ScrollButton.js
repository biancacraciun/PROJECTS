import React, { Component } from 'react'; 
import Home from '../Home/Home';

import './ScrollButton.scss';

class ScrollButton extends Component {
    
    // scrollFunction = () => {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

    scrollToTop = () => {
        let Scroll = require("react-scroll");
        let scroll = Scroll.animateScroll;

        scroll.scrollToTop(<Home />)
    }

    render() {
        return (
            <p className="top" onClick={this.scrollToTop}>Go top</p>
        )
    }
};

export default ScrollButton;