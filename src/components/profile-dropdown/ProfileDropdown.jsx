import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import Avatar from 'components/avatar/Avatar';
import ProfileBody from './ProfileBody';

const ProfileDropdown = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDropdownVisibility(false);
  }, [location]);

  const dropdownVisibilityHandler = () => {
    setDropdownVisibility(prevState => !prevState);
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <div
        onClick={dropdownVisibilityHandler}
        onKeyDown={dropdownVisibilityHandler}
        role="button"
        tabIndex={0}
        style={{ outline: 'none' }}
      >
        <Avatar />
      </div>

      <CSSTransition
        in={dropdownVisibility}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        {() => <ProfileBody />}
      </CSSTransition>
    </div>
  );
};

export default React.memo(ProfileDropdown);
