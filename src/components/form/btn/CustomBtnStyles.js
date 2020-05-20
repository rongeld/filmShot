import styled, { css } from 'styled-components';
import variables from 'styles/variables';

const hoverStyles = css`
  background-color: ${variables['black-soft']};
`;

const buttonStyles = css`
  background: ${variables['theme-color']};
  color: white;
`;

const invertedButtonStyles = css`
  background-color: ${variables['white']};
  color: ${variables['theme-color']};
`;

const getButtonStyles = ({ inverted }) =>
  inverted ? invertedButtonStyles : buttonStyles;

export const CustomButtonContainer = styled.button`
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};
  border: none;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;
  ${getButtonStyles}

  &:hover {
    ${hoverStyles}
  }
`;
