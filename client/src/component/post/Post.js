import React,{Fragment,useEffect} from 'react';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getPost} from '../../action/PostAction';
import PostItem from  '../posts/PostItem';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';


 const Post = ({getPost,post: {post,loading},match}) => {
     useEffect(() => {
        getPost(match.params.id);
     }, [])
    return loading || post === null ? <Spinner/> : 
    <Fragment>
        <Link to='/posts'>Back To Posts</Link>
        <PostItem post = {post} showActions = {false}/>
        <CommentForm postId =  {post._id}/>
        {post.comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={post._id}/>
        ))}

    </Fragment>
}
const mapStateToProps = (state) => ({
    post:state.post
})

export default connect(mapStateToProps,{getPost})(Post);
