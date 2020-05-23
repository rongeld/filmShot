import styled from 'styled-components';
import variables from 'styles/variables';

export const Title = styled.h4`
  position: relative;
  margin-top: 0;
  margin-bottom: 40px;
  &::before {
    bottom: -12px;
    left: 0;
    width: 30px;
    height: 1px;
    content: '';
    position: absolute;
    background-color: ${variables['theme-color']};
  }
`;
