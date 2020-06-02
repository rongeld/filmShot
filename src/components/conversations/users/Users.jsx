import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsersData, selectUsersStatus } from 'redux/users/users-selector';
import { fetchUsersStart } from 'redux/users/users-actions';
import Loading from 'components/loading-component/Loading';
import Dialog from '../dialog/Dialog';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsersData);
  const isFetching = useSelector(selectUsersStatus);

  const fetchAllUsers = useCallback(() => dispatch(fetchUsersStart()), [
    dispatch
  ]);
  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <div>
      {isFetching ? (
        <Loading noPadding />
      ) : (
        users.map(item => <Dialog {...item} noConvo />)
      )}
    </div>
  );
};

export default Users;
