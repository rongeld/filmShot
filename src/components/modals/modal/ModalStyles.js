import styled from 'styled-components';
import variables from 'styles/variables';

export const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 14vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${({ widthBox }) =>
    widthBox === 'CreatePostModal' ? '700px' : '70vw'};
  padding: ${({ widthBox }) => (widthBox === 'CreatePostModal' ? '40px' : '0')};
  background: white;

  @media (min-width: 1200px) {
    max-width: ${({ widthBox }) =>
      widthBox === 'CreatePostModal' ? '700px' : '1200px'};
  }

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

export const FileUpload = styled.input`
  display: inline-block;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  opacity: 0;
`;
export const Description = styled.div`
  textarea {
    width: 100%;
    padding: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  max-width: 50%;
  text-align: center;
  margin-bottom: 20px;

  span {
    position: relative;
    z-index: 0;
    display: inline-block;
    width: 100%;
    background: ${variables['theme-color']};
    color: #fff;
    padding: 10px 0;
    font-size: 12px;
  }
`;
