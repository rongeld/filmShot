import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
  margin: 0 auto;
  padding-top: ${({ noPadding }) => (noPadding ? '0' : '200px')};
  color: transparent;

  svg {
    fill: transparent;
  }
`;
