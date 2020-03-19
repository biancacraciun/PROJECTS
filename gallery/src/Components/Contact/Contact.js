import React from 'react';
import './Contact.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFileDownload,
    faPhoneAlt,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const contact = (props) => {
    return (
        <div className="contact">
            <div className="contact-me">
                <h1>Contact</h1>
                <div id="line"/>
                <p>Reach me at:</p>
                <ul>
                    <li>
                        <FontAwesomeIcon focusable="true" className="email" icon={faEnvelope} />
                        <a id="e-mail" href="mailto:craciunbiancas@yahoo.com?Subject=front-end%20developer" target="_top">{props.email}</a>
                    </li>
                    <li>
                        <FontAwesomeIcon focusable="true" className="phone" icon={faPhoneAlt} />
                        <span>{props.phoneNr}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon focusable="true" className="download" icon={faFileDownload} />
                        <a id="download" href={props.cv} title="" download>Download my CV</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default contact;