import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link, useParams } from "react-router-dom"
import { connect } from "react-redux"
import Spinner from "../layout/Spinner"
import PostItem from "../posts/PostItem"
import CommentForm from "../post/CommentForm"
import CommentItem from "../post/CommentItem"
import { getPost } from "../../actions/post"
import styled from "styled-components"
const Linkbtn = styled(Link)`
  width: 130px;
  height: 40px;
  padding: 10px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  /* margin-top: 15px;
  margin-bottom: 30px;
  margin-left: 10px; */
  cursor: pointer;
  align-items: center;
  :hover {
    background-color: #80d8ff;
  }
`
const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams()
  useEffect(() => {
    getPost(id)
  }, [getPost, id])

  return loading || post === null ? (
    <Spinner />
  ) : (
    <section className="container">
      <Linkbtn to="/posts" className="btn">
        Back To Posts
      </Linkbtn>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </section>
  )
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPost })(Post)
