import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addPost } from "../../actions/post"
import styled from "styled-components"
const Main = styled.section`
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  width: 100%;
  height: 60px;
  display: flex;
`
const Button = styled.input`
  width: 20%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  margin-top: 15px;
  margin-bottom: 30px;
`
const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
`
const Head = styled.div`
  background-color: #1775ee;
`
const H3 = styled.h3`
  color: #f4f4f4;
  margin-left: 5px;
`
const PostForm = ({ addPost }) => {
  const [text, setText] = useState("")

  return (
    <>
      <Main>
        {/* <Left></Left> */}

        <Head>
          <H3>Write new post</H3>
        </Head>
        {/* {" "}
          <div className="bg-primary p">
            <h3>Say Something...</h3>
          </div> */}
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            addPost({ text })
            setText("")
          }}
        >
          <Textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          <Button type="submit" value="Submit" />
        </Form>

        {/* <Right></Right> */}
      </Main>
    </>
  )
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
}

export default connect(null, { addPost })(PostForm)
