import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Knowledge.scss';


class KnowledgeAndSkills extends Component {
    constructor (props) {
        super(props);

        let skills = props.knowledge;

        this.state = {
            list: skills,
            itemsToShow: 7,
            expanded: false,
            loading: false,
        }
    }

    componentDidMount(){
        AOS.init({
          duration : 2000
        })
    }

    render() {
        let id = 1;

        const showMore = () => {

            if(this.state.itemsToShow === 7) {
                this.setState({
                    itemsToShow: 7,
                    expanded: false,
                    loading: true,
                })

                setTimeout(() => {
                    this.setState({
                        loading: false,
                        expanded: true,
                        itemsToShow: this.state.itemsToShow.length,
                    })
                }, 1000)

            } else {
                this.setState(
                    {
                        itemsToShow: 7,
                        expanded: false,
                        loading: false,
                    }
                )
            }
        }  
        
        return (

            <div className="knowledge">
                <h1>Knowledge and Skills</h1>
                <div id="line"/>

                <ul className="list" data-aos="zoom-in">
                    {this.state.list.slice(0, this.state.itemsToShow).map(skill => <li key={id++}>{skill}</li>)}
                </ul>

                <button 
                    type="button" 
                    className="show-more" 
                    onClick={showMore}
                    disabled={this.state.loading}
                >   
                    {this.state.loading && 
                        <FontAwesomeIcon icon={faSpinner} className="fa-spin"/>
                    }

                    {/* {!loading && <span> Show more </span>} */}
                    {this.state.expanded ? (<span> Show less</span>) : (<span> Show more </span>)}
                </button>

            </div>
        )
    }
};

export default KnowledgeAndSkills;