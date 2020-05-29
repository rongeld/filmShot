import styled from 'styled-components';
import variables from 'styles/variables';

export const Wrapper = styled.main`
  background: ${variables['bg-color']};
  padding: 100px 30px 30px;
  min-height: 100vh;
`;
export const Aside = styled.aside`
  flex: 1;
  &:not(:last-child) {
    margin-right: 30px;
  }
  & > * {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 665px) {
    display: none;
  }
`;
export const Feed = styled.div`
  flex: 2;
  margin-right: 30px;
  @media screen and (max-width: 665px) {
    margin-right: 0;
  }
`;
