import styled, { css } from 'styled-components';
import variables from '../../../styles/variables';

const borderStyles = css`
  border-bottom: ${({ invert }) => `1px solid ${colorChangeHandler(invert)}`};
`;
const borderStylesInvalid = css`
  border: 1px solid ${variables['error']};
`;

const colorChangeHandler = invert => {
  return invert ? variables['light-gray'] : variables['gray-color'];
};

export const Icon = styled.div`
  position: absolute;
  right: 0;
  color: ${variables['gray-color']};
  top: 50%;
  transform: translateY(-45%);
`;

export const InputWrapper = styled.div`
  padding: 10px;
  position: relative;
  width: ${({ width }) => (width ? `${width}%` : 'auto')};
  border: 1px solid transparent;
  flex: ${({ flex }) => flex || 'initial'};
  ${({ error }) => (error ? borderStylesInvalid : borderStyles)}
`;
export const InputForm = styled.input`
  color: ${({ invert }) => colorChangeHandler(invert)};
  background: none;
  border: none;
  outline: none;
  width: 100%;

  ::placeholder {
    color: ${({ invert }) => colorChangeHandler(invert)};
  }

  :-ms-input-placeholder {
    color: ${({ invert }) => colorChangeHandler(invert)};
  }

  ::-ms-input-placeholder {
    color: ${({ invert }) => colorChangeHandler(invert)};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 13px;
`;

export const DeleteBtn = styled.input`
  position: absolute !important;
  width: 30px !important;
  height: 30px;
  top: 0;
  right: 0;
  background: white !important;
`;
