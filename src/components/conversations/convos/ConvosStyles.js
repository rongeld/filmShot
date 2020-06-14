import styled from 'styled-components';

export const Wrapper = styled.div`
  -ms-overflow-style: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 552px) {
    display: flex;
  }
`;
