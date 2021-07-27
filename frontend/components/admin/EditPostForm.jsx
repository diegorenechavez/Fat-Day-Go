import React, { Component } from 'react'
import ButtonSpinner from '../ui/ButtonSpinner'
import {Link} from 'react-router-dom'




export default class EditPostForm extends Component {
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
                id: "",
                renderSpinner: false,
                showConfirm:false
            
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.spinnerToggle = this.spinnerToggle.bind(this);
        this.confirmToggle = this.confirmToggle.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId).then(() => {
            this.setState({title: this.props.post.title,
                body: this.props.post.body,
                ingredients: this.props.post.ingredients,
                directions: this.props.post.directions,
                equipment_needed: this.props.post.equipment_needed,
                tips: this.props.post.tips,
                description: this.props.post.description,
                cuisine: this.props.post.cuisine,
                food_type: this.props.post.food_type,
                id: this.props.post.id
                
                })
        })
        
    }



    componentWillUnmount() {
        // this.props.clearErrors();
    }



    confirmToggle() {
        if (!this.state.showConfirm) return null;
        return (
            <div className="show-confirm-screen">
                <div className="confirmation-wrapper">
                    <h2 className="action-header">Recipe Has Been updated!</h2>
                    <div className="create-link-wrapper">
                        <Link className="action-button secondary" to="/dashboard/createPost" onClick={ ()=>this.setState({showConfirm:false})}>Create New Post</Link>
                        <Link className="action-button new-post" to="/posts">View Recipes</Link>
                    </div>
                </div>
            </div>
        )
    }

    spinnerToggle() {
        if (!this.state.renderSpinner) return "Update Post";
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
                id: this.state.id,
            food_type: this.state.food_type
                
        }
        
        this.setState({ renderSpinner: true }, () => this.props.updatePost(newPost)
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
    
    checkType() {
        
    }


    render() {
        if(!this.props.post) return null
        return (
            <div className="form-wrapper">
                <form className="create-post-form" onSubmit={(e) => this.handleSubmit(e)}>
                    {this.confirmToggle() }
                    <h1 className="action-title">Edit Post</h1>
                    <h3 className="input-label"> Title</h3>
                    <input type="text" className="title post-input" value={this.state.title} onChange={this.handleChange("title")} />
                    <h3 className="input-label">Description</h3>
                    <input type="text" className="title post-input" placeholder="Post Description" value={this.state.description } onChange={this.handleChange("description")} />
                    <h3 className="input-label">Body</h3>
                    <textarea className="body post-input" placeholder="Post Body"  value={this.state.body }  onChange={this.handleChange("body")} />
                    <h3 className="input-label">Ingredients seperated by comma</h3>
                    <textarea className="ingredients post-input" value={this.state.ingredients }   onChange={this.handleChange("ingredients")} placeholder="ex: 1/4 cup Flour, 1tsp Vanilla Extract" />
                    <h3 className="input-label">Instructions</h3>
                    <textarea className="instructions post-input" value={this.state.directions }  placeholder="Post Instructions" onChange={this.handleChange("instuctions")} />
                    <h3 className="input-label">Equipment seperated by comma</h3>
                    <textarea className="equipment post-input" value={this.state.equipment_needed } onChange={this.handleChange("equipment_needed")} placeholder="ex: Mixer, Bowl, Cookie Sheet" />
                    <h3 className="input-label">Tips</h3>
                    <textarea className="tips post-input" value={this.state.tips } onChange={this.handleChange("tips")} placeholder="Post Tips" />
                     <h3 className="input-label">Cuisine</h3>
                    <input type="text" className="title post-input" value={this.state.cuisine } placeholder="ex: Italian" onChange={this.handleChange("cuisine")} />
                    <h3 className="input-label">Type</h3>
                    <select className="input-label" onChange={this.handleChange("food_type")}>
                        <option  value="Dessert">Dessert</option>
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
