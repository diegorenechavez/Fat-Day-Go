import React from 'react';
import { Link } from 'react-router-dom';

export default function PostIndexItem(props) {


    const formatedIngredient = () => {
        
            let ingredientsArray = props.post.ingredients.split(",");
            return ingredientsArray.map(ingredient => <li >{ingredient}</li>)
        
        
    }
    return (
        <article className="post-card">
            <figure className="post-wrapper">
                <img className="post-image" src={window.testURL} alt={props.post.description} />
                <div>
                    <header className="post-title">{props.post.title}</header>
                    <figcaption className="post-cuisine">{props.post.cuisine}</figcaption>
                    <figcaption className="post-description">{props.post.description}</figcaption>
                    <Link className="action-button" id="recipe-link" to="/">View Recipe</Link>
                </div>
            </figure>


        </article>
    )
}
