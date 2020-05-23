import styled from 'styled-components';
import variables from 'styles/variables';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: ${({ jc }) => jc || 'flex-start'};
`;

export const FlexBox = styled.div`
  display: flex;
  background: white;
  padding: ${({ pd }) => (pd ? '20px' : '0')};
  box-shadow: ${({ shadow }) =>
    shadow ? '0px 1px 15px 0px rgba(51, 51, 51, 0.2);' : 'none'};
  ${props => ({ ...props })};
`;

export const Wrapper = styled.main`
  background: ${variables['bg-color']};
  padding: 100px 0;
  min-height: 100vh;

  & > div > *:not(:last-child) {
    margin-right: 30px;
  }
`;
