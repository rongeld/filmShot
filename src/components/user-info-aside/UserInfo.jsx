import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FlexBox } from 'components/shared/SharedStyles';
import Avatar from 'components/avatar/Avatar';
import { selectCurrentUser } from 'redux/user/user-selector';
import { selectAllPosts } from 'redux/post/post-selector';
import { Header, Quote, Grid } from './UserInfoStyles';

const UserInfo = () => {
  const [postsCount, setPostsCount] = useState('');
  const currentUser = useSelector(selectCurrentUser);
  const posts = useSelector(selectAllPosts);
  useEffect(() => {
    let amount;
    if (posts) {
      amount = posts.reduce((num, post) => {
        if (post.author.id === currentUser.id) {
          return num + 1;
        }
        return num;
      }, 0);
    }
    setPostsCount(amount);
  }, [posts]);

  return (
    <FlexBox flex-direction="column" background="white" shadow>
      <Header
        bg={`${process.env.REACT_APP_FILES_API}/${currentUser.profileCover}`}
      >
        <Avatar image={currentUser.photo} id={currentUser._id} />
      </Header>
      <Quote>
        <h3
          style={{ marginTop: '30px' }}
        >{`${currentUser?.firstName} ${currentUser?.lastName}`}</h3>
        <Grid>
          <h5>Posts</h5>
          <span>{postsCount}</span>
        </Grid>
      </Quote>
    </FlexBox>
  );
};

export default UserInfo;
