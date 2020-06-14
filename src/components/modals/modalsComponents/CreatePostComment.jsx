import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector, useDispatch } from 'react-redux';
import { Title } from 'components/info-block/InfoBlockStyles';
import { selectCurrentUser } from 'redux/user/user-selector';
import Avatar from 'components/avatar/Avatar';
import CustomBtn from 'components/form/btn/CustomBtn';
import { createPostCommentStart } from 'redux/post/post-actions';
import { selectPostLoading } from 'redux/post/post-selector';
import { FlexBox } from 'components/shared/SharedStyles';
import { selectModalData } from 'redux/modal/modal-selector';
import { IoIosSend } from 'react-icons/io';
import { TextInput, Footer } from 'components/chat/ChatStyles';
import {
  Box,
  Image,
  CommentsWrapper,
  UserComments
} from '../create-post-comment/CreatePostCommentStyles';

const CreatePostComment = () => {
  const postDetails = useSelector(selectModalData);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async data => {
    data.post = postDetails.postId;
    await dispatch(createPostCommentStart(data));
    reset();
  };

  const handleUserKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };
  return (
    <Box>
      <Image imageUrl={postDetails.photo} />
      <CommentsWrapper imageUrl={postDetails.photo}>
        <UserComments>
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            {postDetails.comments.length ? (
              postDetails.comments.map(item => (
                <FlexBox
                  background="none"
                  flex-direction="column"
                  margin-bottom="20px"
                >
                  <FlexBox background="none">
                    <Avatar image={item.user.photo} id={item.user.id} />
                    <FlexBox
                      background="none"
                      margin-left="10px"
                      flex-direction="column"
                    >
                      <Link to={`profile/${item.user.id}`}>
                        {`${item.user.firstName} ${item.user.lastName}`}
                      </Link>
                      <span style={{ fontSize: '10px', color: '#797878' }}>
                        {moment(item.updatedAt).format('HH:mm DD.MM.YYYY')}
                      </span>
                    </FlexBox>
                  </FlexBox>
                  <div>
                    <span style={{ paddingLeft: '45px', fontSize: '14px' }}>
                      {item.body}
                    </span>
                  </div>
                </FlexBox>
              ))
            ) : (
              <p>Be the first at least somewhere!</p>
            )}
          </Scrollbars>
        </UserComments>
        <Footer noPadding noBackgound>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              type="text"
              name="body"
              noBackgound
              onKeyPress={handleUserKeyPress}
              ref={register({ required: true })}
              placeholder="Write a message"
            />
            <div>
              <button type="submit">
                <IoIosSend />
              </button>
            </div>
          </form>
        </Footer>
      </CommentsWrapper>
    </Box>
  );
};

export default CreatePostComment;
