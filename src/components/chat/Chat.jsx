/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import { IoIosSend } from 'react-icons/io';
import { animateScroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchDialogStart,
  sendMessageStart
} from 'redux/messages/messages-actions';
import Avatar from 'components/avatar/Avatar';
import Loading from 'components/loading-component/Loading';
import {
  selectDialogData,
  selectDialogStatus,
  selectDialogCoSpeaker
} from 'redux/messages/messages-selector';
import { selectCurrentUser } from 'redux/user/user-selector';
import { FlexBox } from 'components/shared/SharedStyles';
import ChatMessage from './chat-message/ChatMessage';

import { Header, ChatBody, Footer, ChatWrapper, TextInput } from './ChatStyles';

const Chat = () => {
  const { register, handleSubmit, reset } = useForm();
  const currentUser = useSelector(selectCurrentUser);
  const { id } = useParams();
  const dialogData = useSelector(selectDialogData);
  const isLoading = useSelector(selectDialogStatus);
  const coSpeaker = useSelector(selectDialogCoSpeaker);
  const dispatch = useDispatch();
  const fetchDialog = useCallback(i => dispatch(fetchDialogStart(i)), [
    dispatch
  ]);
  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'body',
      duration: 200
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [dialogData]);

  useEffect(() => {
    if (id) {
      fetchDialog(`userId=${id}`);
    }
  }, [fetchDialog, id]);

  const onSubmit = async data => {
    data.to = id;
    await dispatch(sendMessageStart(data));
    reset();
  };

  const handleUserKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <ChatWrapper>
      <Header>
        {coSpeaker ? (
          <Link to={`/profile/${coSpeaker._id}`}>
            <FlexBox align-items="center" padding="20px">
              <Avatar image={coSpeaker.photo} id={coSpeaker._id} />
              <h5 style={{ margin: '0 0 0 20px' }}>
                {`${coSpeaker.firstName} ${coSpeaker.lastName}`}
              </h5>
            </FlexBox>
          </Link>
        ) : (
          <Link to={`/profile/${currentUser.id}`}>
            <FlexBox align-items="center" padding="20px">
              <Avatar image={currentUser.photo} id={currentUser._id} />
              <h5 style={{ margin: '0 0 0 20px' }}>
                {`${currentUser.firstName} ${currentUser.lastName}`}
              </h5>
            </FlexBox>
          </Link>
        )}
      </Header>
      <ChatBody direction={isLoading || !id} id="body">
        {isLoading ? (
          <Loading noPadding />
        ) : id ? (
          dialogData.length ? (
            dialogData.map(item => (
              <ChatMessage
                key={item._id}
                my={item.from === currentUser.id}
                {...item}
              >
                {item.body}
              </ChatMessage>
            ))
          ) : (
            <p>Start dialog!</p>
          )
        ) : (
          <p>Select person to chat with!</p>
        )}
      </ChatBody>
      <Footer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            type="text"
            name="body"
            onKeyPress={handleUserKeyPress}
            ref={register({ required: true })}
            placeholder="Write a message"
          />
          <div>
            <button type="submit" disabled={!id}>
              <IoIosSend />
            </button>
          </div>
        </form>
      </Footer>
    </ChatWrapper>
  );
};

export default Chat;
