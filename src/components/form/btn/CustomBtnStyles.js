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
  background-color: ${variables.white};
  color: ${variables['theme-color']};
`;
const sharedBtnStyles = css`
  position: absolute;
  border-radius: 50px;
  right: 30px;
  line-height: 28px;
  padding: 5px 20px;
`;
const editBtnStyles = css`
  border-radius: 50px;
  line-height: 24px;
  padding: 5px 20px;
  align-self: center;
  letter-spacing: 0.3px;
  font-weight: 300;
  font-size: 13px;
`;

const getButtonStyles = ({ inverted }) =>
  inverted ? invertedButtonStyles : buttonStyles;

const stylize = ({ share, edit }) => {
  if (share) return sharedBtnStyles;
  if (edit) return editBtnStyles;
};

export const CustomButtonContainer = styled.button`
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};
  border: none;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-weight: bolder;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  ${getButtonStyles}
  ${stylize}

  svg {
    margin-left: 5px;
  }

  &:hover {
    ${hoverStyles}
  }
`;
