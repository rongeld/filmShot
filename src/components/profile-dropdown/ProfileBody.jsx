import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { FiActivity, FiSettings } from 'react-icons/fi';
import { signOut } from 'redux/user/user-actions';
import { selectCurrentUser } from 'redux/user/user-selector';
import { Wrapper, Box, BoxBody, List } from './ProfileBodyStyles';

const ProfileBody = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const signOutHandler = useCallback(() => dispatch(signOut()), [dispatch]);

  return (
    <Wrapper>
      <Box>
        <BoxBody>
          <h3>{`${currentUser?.firstName} ${currentUser?.lastName}`}</h3>
          <p>{currentUser?.email}</p>
        </BoxBody>
      </Box>
      <Box>
        <BoxBody>
          <List>
            <li>
              <Link to="/profile">
                <BsPerson />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiOutlineMail />
                Inbox
              </Link>
            </li>
            <li>
              <Link to="/">
                <FiActivity />
                Activity
              </Link>
            </li>
          </List>
        </BoxBody>
      </Box>
      <Box>
        <BoxBody>
          <List>
            <li>
              <Link to="/profile/edit-profile">
                <FiSettings />
                Settings
              </Link>
            </li>
            <li>
              <Link to="/" onClick={signOutHandler}>
                <AiOutlineUnlock />
                Sign out
              </Link>
            </li>
          </List>
        </BoxBody>
      </Box>
    </Wrapper>
  );
};

export default React.memo(ProfileBody);
