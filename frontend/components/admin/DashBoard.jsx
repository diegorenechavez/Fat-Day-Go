import React, { Component } from 'react';
import { FaShoppingCart} from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { MdInsertPhoto } from 'react-icons/md';
import {AiTwotoneSetting} from 'react-icons/ai'


export default class DashBoard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard-links">
                    <button className="dashboard-nav-links"><FaShoppingCart className="dash-icon"/>Orders</button>
                    <button className="dashboard-nav-links"><AiFillEdit className="dash-icon"/> Blog Posts</button>
                    <button className="dashboard-nav-links"><MdInsertPhoto className="dash-icon"/>Gallery</button>
                    <button className="dashboard-nav-links"><AiTwotoneSetting className="dash-icon"/>Settings</button>
                </div>
                
            </div>
        )
    }
}
