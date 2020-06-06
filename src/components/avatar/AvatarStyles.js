import styled, { css } from 'styled-components';

const onlineCircle = css`
  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: green;
    position: absolute;
    bottom: 0;
    right: 0%;
  }
`;

export const Wrapper = styled.div`
  background: ${({ imageUrl }) =>
    imageUrl
      ? `url(${process.env.REACT_APP_FILES_API}/${imageUrl})`
      : '#bcbcbc'};
  border-radius: 35px;
  background-size: cover;
  background-position: center;
  width: 35px;
  height: 35px;
  flex: 0 0 35px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${props => ({ ...props })}

  svg {
    fill: white;
    max-width: 17px;
    height: 17px;
    width: 100%;
  }

  ${({ isOnline }) => isOnline && onlineCircle}
`;
