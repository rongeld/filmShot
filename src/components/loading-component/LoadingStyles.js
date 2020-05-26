import styled from 'styled-components';
import variables from 'styles/variables';

export default styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
  margin: 0 auto;
  padding-top: 200px;

  svg {
    fill: ${variables['theme-color']};
  }
`;
