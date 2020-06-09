/* eslint-disable no-nested-ternary */
import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosOptions } from 'react-icons/io';
import { openModal } from 'redux/modal/modal-actions';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineWechat } from 'react-icons/ai';
import { FaHeartbeat } from 'react-icons/fa';
import { selectCurrentUser } from 'redux/user/user-selector';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { deletePostStart, likeUnlikeStart } from 'redux/post/post-actions';
import { selectPostLiking } from 'redux/post/post-selector';

import { Header, PostText, Footer, IconDropdown, Box } from './PostStyles';

const Post = ({
  description,
  comments,
  author: { firstName, lastName, id, photo: postAuthorPhoto },
  photo,
  likes,
  id: postId,
  createdAt,
  currentUserId
}) => {
  const currentDate = moment();
  const { _id: author } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const isLiking = useSelector(selectPostLiking);
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

  const memoizedValue = useMemo(() =>
    likes.some(item => item.user === currentUserId)
  );

  const deletePost = useCallback(() => dispatch(deletePostStart(postId)), [
    dispatch,
    postId
  ]);
  const likeUnlike = useCallback(() =>
    dispatch(
      likeUnlikeStart({
        status: memoizedValue,
        id: postId
      }),
      [dispatch, postId]
    )
  );
  const deletePostHandler = () => {
    deletePost();
  };

  const likeUnlikeHandler = async () => {
    if (!isLiking) {
      likeUnlike();
    }
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
        <Footer isActive={memoizedValue}>
          <div onClick={likeUnlikeHandler}>
            {memoizedValue ? <FaHeartbeat /> : <BsHeart />}
          </div>

          <p>
            {memoizedValue
              ? likes.length > 1
                ? `You and ${likes.length - 1} like this`
                : 'Only you like this'
              : `${likes.length} like this`}
          </p>
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
