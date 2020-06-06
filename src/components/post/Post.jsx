import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosOptions, IoMdShare } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineWechat } from 'react-icons/ai';
import { selectCurrentUser } from 'redux/user/user-selector';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { deletePostStart } from 'redux/post/post-actions';

import { Header, PostText, Footer, IconDropdown } from './PostStyles';

const Post = ({
  description,
  author: { firstName, lastName, id, photo: postAuthorPhoto },
  photo,
  id: postId,
  createdAt
}) => {
  const currentDate = moment();
  const { _id: author } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

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

      {/* <FlexBox justify-content="space-between">
        <Footer>
          <BsHeart />
          <p>You and 201 others like this</p>
        </Footer>
        <Footer>
          <FlexBox>
            <AiOutlineWechat />
            54
          </FlexBox>
          <FlexBox>
            <IoMdShare />
            54
          </FlexBox>
        </Footer>
      </FlexBox> */}
    </FlexBox>
  );
};

Post.propTypes = {};

export default Post;
