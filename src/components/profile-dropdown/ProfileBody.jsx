import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Box, BoxBody, List } from './ProfileBodyStyles';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { FiActivity, FiSettings } from 'react-icons/fi';

const ProfileBody = () => (
  <Wrapper>
    <Box>
      <BoxBody>
        <h3>Madison Howard</h3>
        <p>mail@mail.com</p>
      </BoxBody>
    </Box>
    <Box>
      <BoxBody>
        <List>
          <li>
            <Link to="/">
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
            <Link to="/">
              <FiSettings />
              Settings
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiOutlineUnlock />
              Sign out
            </Link>
          </li>
        </List>
      </BoxBody>
    </Box>
  </Wrapper>
);

export default ProfileBody;
