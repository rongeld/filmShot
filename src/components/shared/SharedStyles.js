import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: ${({ jc }) => jc || 'flex-start'};
`;

export const FlexBox = styled.div`
  display: flex;
  ${props => ({ ...props })};
`;
