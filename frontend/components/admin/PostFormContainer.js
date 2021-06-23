import { connect } from 'react-redux';
import PostForm from './PostForm';
import {createPost} from '../../actions/blogPostActions'


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps =(dispatch)=> ({
    createPost : (post) => dispatch(createPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);