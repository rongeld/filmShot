import styled from 'styled-components';
import variables from 'styles/variables';

export const Wrapper = styled.main`
  background: ${variables['bg-color']};
  padding: 30px;
  min-height: calc(100vh - 70px);
`;
export const Aside = styled.aside`
  flex: 1;
`;
export const Feed = styled.div`
  flex: 2;
`;
