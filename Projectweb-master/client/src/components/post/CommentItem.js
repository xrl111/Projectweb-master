import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import formatDate from "../../utils/formatDate"
import { deleteComment } from "../../actions/post"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import styled from "styled-components"
const Main = styled.div`
  display: flex;
  padding-top: 30px;
`
const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
const H4 = styled.h4`
  color: #1775ee;
  padding: 5px;
`
const Text = styled.p`
  display: flex;
  padding: 10px;
`
const Date = styled.p`
  font-size: 16px;
  padding: 20px 10px;
  font-weight: bold;
`
const Deletebtn = styled.button`
  width: 35px;
  height: 35px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #dd2c00;
  margin: 10px;

  cursor: pointer;
  /* display: flex; */
  :hover {
    background-color: #ff3d00;
  }
`
const MBtn = styled.div`
  display: flex;
  flex-direction: row;
`
const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <Main>
    <div>
      <Link to={`/profile/${user}`}>
        <Img className="round-img" src={avatar} alt="" />
        <H4>{name}</H4>
      </Link>
    </div>
    <div>
      <Text>{text}</Text>
      <MBtn>
        <Date>Posted on {formatDate(date)}</Date>
        {!auth.loading && user === auth.user._id && (
          <Deletebtn
            onClick={() => deleteComment(postId, _id)}
            type="button"
            className="btn btn-danger"
          >
            <DeleteForeverIcon />
          </Deletebtn>
        )}
      </MBtn>
    </div>
  </Main>
)

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { deleteComment })(CommentItem)
