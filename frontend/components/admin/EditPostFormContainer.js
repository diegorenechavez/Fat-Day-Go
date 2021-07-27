import { connect } from 'react-redux'
import { updatePost, fetchPost } from '../../actions/blogPostActions';
import EditPostForm from './EditPostForm';

const mapStateToProps = (state, ownProps) => ({
    post: state.entities.posts[ownProps.match.params.postId],
    errors: state.errors
})

const mapDispatchToProps = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    updatePost: (post) => dispatch(updatePost(post))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditPostForm)
