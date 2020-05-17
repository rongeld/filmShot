import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  padding: 10px;
  border-bottom: ${props => `1px solid ${props.inverted ? 'white' : '#999'}`};
`;
export const InputForm = styled.input`
  color: ${props => `${props.inverted ? 'white' : '#999'}`};
`;
