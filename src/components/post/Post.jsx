import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosOptions, IoMdShare } from 'react-icons/io';
import { openModal } from 'redux/modal/modal-actions';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineWechat } from 'react-icons/ai';
import { selectCurrentUser } from 'redux/user/user-selector';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { deletePostStart } from 'redux/post/post-actions';

import { Header, PostText, Footer, IconDropdown, Box } from './PostStyles';

const Post = ({
  description,
  comments,
  author: { firstName, lastName, id, photo: postAuthorPhoto },
  photo,
  id: postId,
  createdAt
}) => {
  const currentDate = moment();
  const { _id: author } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const openModalHandler = useCallback(
    () =>
      dispatch(
        openModal({
          name: 'CreatePostComment',
          additionalData: {
            photo,
            firstName,
            lastName,
            postAuthorPhoto,
            comments,
            postId
          }
        })
      ),
    [dispatch]
  );

  const deletePost = useCallback(() => dispatch(deletePostStart(postId)), [
    dispatch,
    postId
  ]);
  const deletePostHandler = () => {
    deletePost();
  };
  return (
    <FlexBox
      shadow
      flex-direction="column"
      padding="20px"
      margin="30px 0"
      background="white"
    >
      <Header>
        <div>
          <Avatar image={postAuthorPhoto} id={id} />
          <div>
            <h5>
              <Link to={`/profile/${id}`}>{`${firstName} ${lastName}`}</Link>
            </h5>
            <p>{moment.duration(currentDate.diff(createdAt)).humanize()} ago</p>
          </div>
        </div>
        {author === id && (
          <div>
            <IconDropdown>
              <IoIosOptions />
              <div>
                {/* <p>Edit</p> */}
                <p onClick={deletePostHandler}>Delete</p>
              </div>
            </IconDropdown>
          </div>
        )}
      </Header>
      <div style={{ margin: '0 -20px' }}>
        <img src={`${process.env.REACT_APP_FILES_API}/${photo}`} alt="" />
      </div>
      <PostText>{description}</PostText>

      <FlexBox justify-content="space-between">
        <Footer>
          {/* <BsHeart />
          <p>You and 201 others like this</p> */}
        </Footer>
        <Footer>
          <Box onClick={openModalHandler}>
            <AiOutlineWechat />
            {comments.length}
          </Box>
        </Footer>
      </FlexBox>
    </FlexBox>
  );
};

Post.propTypes = {};

export default Post;
