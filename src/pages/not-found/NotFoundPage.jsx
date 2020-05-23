import React from 'react';
import page404 from 'assets/404page.gif';

const NotFoundPage = () => {
  return (
    <div style={{ width: '600px', margin: '0 auto', padding: '120px 0' }}>
      <img src={page404} alt="" />
    </div>
  );
};

export default NotFoundPage;
