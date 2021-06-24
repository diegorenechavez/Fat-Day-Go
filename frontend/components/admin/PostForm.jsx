import React, { Component } from 'react';
import ButtonSpinner from '../ui/ButtonSpinner';
import { Link } from 'react-router-dom';

export default class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
                title: "",
                body: "",
                ingredients: "",
                directions: "",
                equipment_needed: "",
                tips: "",
                description: "",
                cuisine: "",
                food_type: "",
                renderSpinner: false,
                showConfirm:false
            
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.spinnerToggle = this.spinnerToggle.bind(this);
        this.confirmToggle = this.confirmToggle.bind(this);
    }



    componentWillUnmount() {
        this.props.clearErrors();
    }



    confirmToggle() {
        if (!this.state.showConfirm) return null;
        return (
            <div className="show-confirm-screen">
                <div className="confirmation-wrapper">
                    <h2 className="action-header">Recipe Has Been Posted!</h2>
                    <div className="create-link-wrapper">
                        <Link className="action-button secondary" to="/dashboard/createPost" onClick={ ()=>this.setState({showConfirm:false})}>Create New Post</Link>
                        <Link className="action-button new-post" to="/posts">View Recipes</Link>
                    </div>
                </div>
            </div>
        )
    }

    spinnerToggle() {
        if (!this.state.renderSpinner) return "Create Post";
        return <ButtonSpinner/>
    }

    handleChange(field) {
        return (e) => {
            this.setState({[field]:e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        
        let newPost = {
                title: this.state.title,
                body: this.state.body,
                ingredients: this.state.ingredients,
                directions: this.state.directions,
                equipment_needed: this.state.equipment_needed,
                tips: this.state.tips,
                description: this.state.description,
                cuisine: this.state.cuisine,
                food_type: this.state.food_type
        }
        
        this.setState({ renderSpinner: true }, () => this.props.createPost(newPost)
            .then(() => this.setState({ renderSpinner: false },()=>this.setState({showConfirm:true})), () => this.setState({ renderSpinner: false })))    
    }


     renderErrors() {
        if (this.props.errors.length) {
            return (
                <ul className="session-errors">
                    {this.props.errors.map(error => <li className="error-message">{error }</li>)}
                </ul>
            )
        }
        return null
    }


    render() {
        return (
            <div className="form-wrapper">
                <form className="create-post-form" onSubmit={(e) => this.handleSubmit(e)}>
                    {this.confirmToggle() }
                    <h1 className="action-title">Create Post</h1>
                    <h3 className="input-label"> Title</h3>
                    <input type="text" className="title post-input" placeholder="Post Title" onChange={this.handleChange("title")} />
                    <h3 className="input-label">Description</h3>
                    <input type="text" className="title post-input" placeholder="Post Description" onChange={this.handleChange("description")} />
                    <h3 className="input-label">Body</h3>
                    <textarea className="body post-input" placeholder="Post Body" onChange={this.handleChange("body")} />
                    <h3 className="input-label">Ingredients seperated by comma</h3>
                    <textarea className="ingredients post-input" onChange={this.handleChange("ingredients")} placeholder="ex: 1/4 cup Flour, 1tsp Vanilla Extract" />
                    <h3 className="input-label">Instructions</h3>
                    <textarea className="instructions post-input" placeholder="Post Instructions" onChange={this.handleChange("instuctions")} />
                    <h3 className="input-label">Equipment seperated by comma</h3>
                    <textarea className="equipment post-input" onChange={this.handleChange("equipment_needed")} placeholder="ex: Mixer, Bowl, Cookie Sheet" />
                    <h3 className="input-label">Tips</h3>
                    <textarea className="tips post-input" onChange={this.handleChange("tips")} placeholder="Post Tips" />
                     <h3 className="input-label">Cuisine</h3>
                    <input type="text" className="title post-input" placeholder="ex: Italian" onChange={this.handleChange("cuisine")} />
                    <h3 className="input-label">Type</h3>
                    <select className="input-label" onChange={this.handleChange("food_type")}>
                        <option value="Dessert">Dessert</option> 
                        <option value="Cocktail">Cocktail</option>      
                        <option value="Entree">Entree</option>       
                    </select>
                    {this.renderErrors()}
                    <button className="action-button " style={{ width: "75%", alignSelf: "center", marginTop: "3rem", minHeight:"3rem" }} >{this.spinnerToggle() }</button>
                </form>
                
            </div>
        )
    }
}
