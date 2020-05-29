import React from 'react';
import moment from 'moment';
import { IoIosOptions, IoMdShare } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineWechat } from 'react-icons/ai';

import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';

import { Header, PostText, Footer } from './PostStyles';

const Post = ({
  description,
  author: { firstName, lastName },
  photo,
  createdAt
}) => {
  const currentDate = moment();
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
          <Avatar />
          <div>
            <h5>{`${firstName} ${lastName}`}</h5>
            <p>{moment.duration(currentDate.diff(createdAt)).humanize()} ago</p>
          </div>
        </div>

        <div>
          <IoIosOptions />
        </div>
      </Header>
      <div>
        <img src={`${process.env.REACT_APP_FILES_API}/${photo}`} alt="" />
      </div>
      <PostText>{description}</PostText>

      <FlexBox justify-content="space-between">
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
      </FlexBox>
    </FlexBox>
  );
};

Post.propTypes = {};

export default Post;
