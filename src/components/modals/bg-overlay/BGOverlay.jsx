import React from 'react';
import { createPortal } from 'react-dom';

import Overlay from './BGOverlayStyles';

const BGOverlay = ({ onClick }) => {
  return createPortal(
    <Overlay onClick={onClick} />,
    document.getElementById('backdrop-hook')
  );
};

export default BGOverlay;
