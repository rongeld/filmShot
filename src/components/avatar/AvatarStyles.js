import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  background: #bcbcbc;
  border-radius: 35px;
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

  img {
    width: 100%;
  }
`;
