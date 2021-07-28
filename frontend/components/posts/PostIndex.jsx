import React, { Component } from 'react';
import PostIndexItem from './PostIndexItem';
import {AiOutlineSearch} from 'react-icons/ai'

export default class PostIndex extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllPosts()
    }

    render() {
        return (
            <section className="posts-index">
                <form action="">
                    <input placeholder="Search..." className="search-bar" type="search" />
                    <AiOutlineSearch className="search-icon" />
                </form>
                {this.props.posts.map(post => <PostIndexItem post={post} key={post.id} currentUser={this.props.currentUser} deletePost={this.props.deletePost }/>)}
            </section>
        )
    }
}
