import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addPost } from "../../actions/post"
import styled from "styled-components"

const Main = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const Form = styled.form`
  width: 100%;
  height: 60px;
  display: flex;
  /* flex-direction: column; */
`
const Button = styled.input`
  width: 100px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  margin: 15px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 5px;
  :hover {
    background-color: #80d8ff;
  }
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
const Anonymous = styled.input`
  width: 100px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  margin: 15px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 5px;
  :hover {
    background-color: #80d8ff;
  }
`
const Btn = styled.div``
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

          {/* <TextareaAutosize
            name="text"
            cols="10"
            aria-label="minimum height"
            minRows={7}
            placeholder="Create a post"
            style={{ width: "100%", overflow: scroll }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          /> */}
          <Btn>
            <Button type="submit" value="Submit" />
            <Anonymous type="submit" value="Anomymus" />
          </Btn>
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
