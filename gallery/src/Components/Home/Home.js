import React from 'react'; 
import './Home.scss';

const home = (props) => { 
    console.log(props.occupation)
    return (
        <div className="Home">
            <div className="intro">
                <div id="hi">
                    <p> Hi, I am </p>
                    <span>{props.name}</span>
                </div>
                <div id="line"/>
                <p>{props.occupation}</p>
            </div>
            <img src={props.img_me} alt="Bianca Craciun" name="Bianca Craciun" />
        </div>
    )
};

export default home;