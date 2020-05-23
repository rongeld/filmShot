import React from 'react';
import { IoIosOptions, IoMdShare } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineWechat } from 'react-icons/ai';

import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import photo from 'assets/post-large-1.jpg';

import { Header, PostText, Footer } from './PostStyles';

const Post = props => {
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
            <h5>Marry Watson</h5>
            <p>20 min ago</p>
          </div>
        </div>

        <div>
          <IoIosOptions />
        </div>
      </Header>
      <PostText>
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy.
      </PostText>
      <div>
        <img src={photo} alt="" />
      </div>
      <FlexBox justify-content="space-between">
        <Footer>
          <BsHeart />
          <p>You and 201 others like this</p>
        </Footer>
        <Footer>
          <FlexBox>
            <AiOutlineWechat /> 54
          </FlexBox>
          <FlexBox>
            <IoMdShare /> 54
          </FlexBox>
        </Footer>
      </FlexBox>
    </FlexBox>
  );
};

Post.propTypes = {};

export default Post;
