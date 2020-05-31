import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
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
`;
