import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import Spinner from '../ui/ButtonSpinner';
import ButtonSpinner from '../ui/ButtonSpinner';

export default function PostIndexItem(props) {
    const [feedBack, setFeedback] = useState(false);
    const [menu, setMenu] = useState(false);
    const [loader, setloader] = useState(false);

    const handleLoader = () => {
        if (loader === true) {
            setloader(false)
            
        } else if(loader === false) {
            setloader(true)
            
        }
    }

     const handleFeedback = () => {
        if (feedBack === true) {
            setFeedback(false)
            
        } else if(feedBack === false) {
            setFeedback(true)
            
        }
         setMenu(false)
     }
    
    const renderLoader = () => {
        if (!loader) return "Delete"
        return <ButtonSpinner/>
    }

    useEffect(() => {
        setloader(false)
        
    }, [props.post])
    
    const handleDelete = () => {
       setloader(true)
        props.deletePost(props.post.id)
        
    }

    const handleMenu = ()=>{
        if (menu === false) return null
        return (
            <div className="edit-menu">
                <button className="edit-close-button" onClick={()=>setMenu(false) }>✕</button>
                <Link className="edit-options" to={`dashboard/posts/edit/${props.post.id}`} style={{textDecoration:"none"}}>Edit Post</Link>
                <button className="edit-options" onClick={() => handleFeedback()}>Delete Post</button>
            </div>
        )
    }

    const renderFeedBack = () => {
        console.log(feedBack)
        if (feedBack === false) return null

        return (
            <div className="feeback-screen" >
                <div className="feedback-menu">
                    <button className="edit-close-button" style={{marginTop:"-1rem"} } onClick={()=>setFeedback(false) }>✕</button>
                    <h3>Are You Sure You want to Delete Post?</h3>
                    <div className="button-wrapper-feedback">
                        <button className="feedback-button" onClick={()=>handleFeedback() }>Cancel</button>
                        <button className="feedback-button delete-post" onClick={() => handleDelete()}>{renderLoader()}</button>
                    </div>
                </div>
            </div>
        )
    }

    const renderMenu = () => {
        if (menu === true) {
            setMenu(false)
            return
        } else if(menu === false) {
            setMenu(true)
            return
        }
    }
    


    const authenticateUser =()=>{
        if (props.currentUser.cook) {
            return (<div className="edit-post-wrapper">
                        <BsThreeDots className="edit-post-button" onClick={()=>renderMenu()} />
                        {handleMenu()}
                    </div>)
        }
        return null;
    }
    return (
        <article className="post-card">
            {renderFeedBack()}
            {authenticateUser()}
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
