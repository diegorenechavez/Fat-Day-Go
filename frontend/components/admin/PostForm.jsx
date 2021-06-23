import React, { Component } from 'react'

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
            type:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({[field]:e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        let newPost = this.state;
        this.props.createPost(newPost)
    }

    render() {
        return (
            <div className="form-wrapper">
                <form className="create-post-form" onSubmit={(e)=>this.handleSubmit(e)}>
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
                    <select className="input-label" onChange={this.handleChange("type")}>
                        <option value="Dessert">Dessert</option> 
                        <option value="Cocktail">Cocktail</option>      
                        <option value="Entree">Entree</option>       
                    </select>
                    <input type="submit" value="Post" className="action-button " style={{ width: "75%", alignSelf: "center", marginTop: "3rem" } } />
                </form>
                
            </div>
        )
    }
}
