import React, { Component } from 'react';
import PostIndexItem from './PostIndexItem';

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
                {this.props.posts.map(post => <PostIndexItem post={post}/>)}
            </section>
        )
    }
}
