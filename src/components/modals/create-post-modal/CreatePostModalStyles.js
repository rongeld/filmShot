import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  padding: 40px;
  background: white;

  &.fade-enter {
    opacity: 0;
    transform: translate(-50%, -50px);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translate(-50%, 0);
    transition: opacity 300ms, transform 300ms;
  }

  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translate(-50%, -50px);
    transition: opacity 300ms, transform 300ms;
  }
`;
