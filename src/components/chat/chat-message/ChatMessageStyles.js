import styled from 'styled-components';

export const MessageWrapper = styled.div`
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 30px;
  background: ${({ my }) => (my ? 'white' : '#0084FF')};
  color: ${({ my }) => (my ? 'black' : 'white')};
  align-self: ${({ my }) => (my ? 'flex-end' : 'flex-start')};
  position: relative;

  /* &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: ${({ photo }) =>
      `url(${process.env.REACT_APP_FILES_API}/${photo})`};
    border-radius: 20px;
    background-size: cover;
    overflow: hidden;
    position: absolute;
    left: 0;
  } */
`;
