import { connect } from 'react-redux';
import PostForm from './PostForm';
import {createPost,clearErrors} from '../../actions/blogPostActions'


const mapStateToProps = (state) => ({
    errors: state.errors.postErrors
})

const mapDispatchToProps =(dispatch)=> ({
    createPost: (post) => dispatch(createPost(post)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);