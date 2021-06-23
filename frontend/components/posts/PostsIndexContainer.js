import { connect } from 'react-redux'
import { fetchAllPosts } from '../../actions/blogPostActions';
import PostIndex from './PostIndex';
const mapStateToProps = (state) => ({
    posts: Object.values(state.entities.posts)
})

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: ()=> dispatch(fetchAllPosts())  
})

export default connect(mapStateToProps,mapDispatchToProps)(PostIndex)