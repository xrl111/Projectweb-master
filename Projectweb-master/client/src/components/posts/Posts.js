import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import PostItem from "./PostItem"
import PostForm from "./PostForm"
import { getPosts } from "../../actions/post"
import styled from "styled-components"
import PersonIcon from "@mui/icons-material/Person"
const Main = styled.section`
  display: flex;
`
const Mid = styled.div`
  flex: 10;
  width: 100%;
  margin: 20px;
`
const Left = styled.div`
  display: flex;
  flex: 2;
`
const Right = styled.div`
  display: flex;
  flex: 2;
`
const H1 = styled.h1`
  color: #1775ee;
  font-size: 30px;
`
const P = styled.p`
  padding: 5px;
  display: flex;
  font-size: 20px;
`
const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <>
      <Main>
        <Left></Left>
        <Mid>
          {" "}
          <H1>Posts</H1>
          <P>
            <PersonIcon sx={{ fontSize: 30 }} />
            Welcome
          </P>
          <PostForm />
          <div>
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </Mid>
        <Right></Right>
      </Main>
    </>
  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPosts })(Posts)
