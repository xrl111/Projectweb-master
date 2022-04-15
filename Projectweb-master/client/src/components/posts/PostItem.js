import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import formatDate from "../../utils/formatDate"
import { connect } from "react-redux"
import { addLike, removeLike, deletePost } from "../../actions/post"
import styled from "styled-components"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt"
const Main = styled.div`
  display: flex;
  padding-top: 30px;
`
const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
const Text = styled.p`
  display: flex;
  padding: 10px;
`
const H4 = styled.h4`
  color: #1775ee;
  padding: 5px;
`
const Combtn = styled(Link)`
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
  margin-left: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #9e9e9e;
  }
`
const Deletebtn = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: red;
  margin-top: 15px;
  margin-bottom: 30px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* display: flex; */
  :hover {
    background-color: #9e9e9e;
  }
`
const ButtonLike = styled.button`
  display: flex;
  margin: 5px;
  border: none;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: #9e9e9e;
  }
`
const MBtn = styled.div`
  display: flex;
  flex-direction: row;
`
const Date = styled.p`
  font-size: 16px;
  padding: 5px;
  font-weight: bold;
`
const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => (
  <Main>
    <div>
      <Link to={`/profile/${user}`}>
        <Img src={avatar} alt="" />
        <H4>{name}</H4>
      </Link>
    </div>
    <div>
      <Text>{text}</Text>
      <Date>Posted on {formatDate(date)}</Date>

      {showActions && (
        <Fragment>
          <MBtn>
            <ButtonLike onClick={() => addLike(_id)} type="button">
              <ThumbUpIcon />
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </ButtonLike>
            <ButtonLike onClick={() => removeLike(_id)} type="button">
              <ThumbDownAltIcon />
            </ButtonLike>
            <Combtn to={`/posts/${_id}`}>
              Comment{" "}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Combtn>
            {!auth.loading && user === auth.user._id && (
              <Deletebtn onClick={() => deletePost(_id)} type="button">
                <DeleteForeverIcon />
              </Deletebtn>
            )}
          </MBtn>
        </Fragment>
      )}
    </div>
  </Main>
)

PostItem.defaultProps = {
  showActions: true,
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
)
