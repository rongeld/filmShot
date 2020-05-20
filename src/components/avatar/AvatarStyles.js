import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  background: grey;
  border-radius: 50px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    fill: white;
    max-width: 17px;
    height: 17px;
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
