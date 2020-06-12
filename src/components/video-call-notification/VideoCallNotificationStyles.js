import styled from 'styled-components';
import variables from 'styles/variables';

export const Wrapper = styled.div`
  background: #272f37;
  padding: 5px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 12;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  color: white;

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
    transform: translate(-50%, -50%);
    transition: opacity 300ms, transform 300ms;
  }
`;
export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  & > div {
    position: relative;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 500px;
    animation: pulse 3s infinite linear;
  }
  & > div:first-child::before {
    background: #7fbfc8;
  }
  & > div:last-child::before {
    background: #ef2558;
  }

  svg {
    width: 20px;
    height: 100%;
    position: relative;
    cursor: pointer;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
