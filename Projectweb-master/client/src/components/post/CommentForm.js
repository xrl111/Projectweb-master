import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addComment } from "../../actions/post"
import styled from "styled-components"
const Main = styled.div``
const Head = styled.div`
  background-color: #1775ee;
`
const H3 = styled.h3`
  padding: 5px;
`
const Button = styled.input`
  width: 100px;
  height: 40px;
  padding: 10px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  margin-top: 15px;
  margin-bottom: 30px;

  cursor: pointer;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #80d8ff;
  }
`
const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("")

  return (
    <div className="post-form">
      <Head>
        <H3>Leave a Comment</H3>
      </Head>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault()
          addComment(postId, { text })
          setText("")
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Give your opinions about the post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Button type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
}

export default connect(null, { addComment })(CommentForm)
