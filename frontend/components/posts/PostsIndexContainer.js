import { connect } from 'react-redux'
import { fetchAllPosts } from '../../actions/blogPostActions';
import { deletePost } from '../../actions/blogPostActions';

import PostIndex from './PostIndex';
const mapStateToProps = (state) => ({
    posts: Object.values(state.entities.posts),
    currentUser:state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    deletePost: (postId) => dispatch(deletePost(postId))
})

export default connect(mapStateToProps,mapDispatchToProps)(PostIndex)