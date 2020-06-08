import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60vh;

  & > div:first-child {
    flex: 2;
  }
  & > div:last-child {
    flex: 1;
    padding: 20px;
  }
`;
export const Image = styled.div`
  background: ${({ imageUrl }) =>
    imageUrl
      ? `url(${process.env.REACT_APP_FILES_API}/${imageUrl})`
      : '#bcbcbc'};
  background-size: cover;
  background-position: center;
`;
export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #272f37;
`;
export const UserComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  flex: 7;
  max-height: 50vh;
  a {
    color: white;
    font-weight: bold;
  }
`;
