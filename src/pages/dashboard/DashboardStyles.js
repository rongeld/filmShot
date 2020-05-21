import styled from 'styled-components';
import variables from 'styles/variables';

export const Wrapper = styled.main`
  background: ${variables['bg-color']};
  padding: 100px 30px 30px;
  min-height: 100vh;

  & > div > *:not(:last-child) {
    margin-right: 30px;
  }
`;
export const Aside = styled.aside`
  flex: 1;
`;
export const Feed = styled.div`
  flex: 2;
`;
