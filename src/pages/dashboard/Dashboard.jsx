import React, { useCallback, useEffect } from 'react';

import { Wrapper, Container } from 'components/shared/SharedStyles';

import UserInfo from 'components/user-info-aside/UserInfo';
import SharePost from 'components/share-post/SharePost';
import Posts from 'components/posts/Posts';
import InfoBlock from 'components/info-block/InfoBlock';
import FriendsZone from 'components/friends-zone/FriendsZone';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsersData, selectUsersStatus } from 'redux/users/users-selector';
import { fetchUsersStart } from 'redux/users/users-actions';
import { Aside, Feed } from './DashboardStyles';

const WrappedInfo = InfoBlock(FriendsZone);

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsersData);
  const isFetching = useSelector(selectUsersStatus);

  const fetchAllUsers = useCallback(() => dispatch(fetchUsersStart()), [
    dispatch
  ]);
  useEffect(() => {
    if (!users.length) {
      fetchAllUsers();
    }
  }, [fetchAllUsers]);

  return (
    <Wrapper>
      <Container>
        <Aside>
          <UserInfo />
        </Aside>
        <Feed>
          <SharePost />
          <Posts />
        </Feed>
        <Aside>
          <WrappedInfo
            isFetching={isFetching}
            title="New members"
            data={users}
          />
        </Aside>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
