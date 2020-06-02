import styled from 'styled-components';

export const MessageWrapper = styled.div`
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 30px;
  background: ${({ my }) => (my ? 'white' : '#0084FF')};
  color: ${({ my }) => (my ? 'black' : 'white')};
  align-self: ${({ my }) => (my ? 'flex-end' : 'flex-start')};
`;
