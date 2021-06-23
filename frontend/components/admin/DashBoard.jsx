import React, { Component } from 'react';
import { FaShoppingCart} from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { MdInsertPhoto } from 'react-icons/md';
import {AiTwotoneSetting} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';


export default class DashBoard extends Component {

    constructor(props) {
        super(props)
        
    
    }

   

    render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard-links">
                    <button className="dashboard-nav-links"><FaShoppingCart className="dash-icon"/>Orders</button>
                    <NavLink activeClassName="selected-dash-link" to ="/dashboard/createPost"className="dashboard-nav-links"><AiFillEdit className="dash-icon"/> Blog Posts</NavLink>
                    <button className="dashboard-nav-links" ><MdInsertPhoto className="dash-icon"/>Gallery</button>
                    <button className="dashboard-nav-links"><MdInsertPhoto className="dash-icon"/>Customer Service</button>
                    <button className="dashboard-nav-links"><AiTwotoneSetting className="dash-icon"/>Settings</button>
                </div>
                
            </div>
        )
    }
}
