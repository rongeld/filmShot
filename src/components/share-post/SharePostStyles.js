import styled from 'styled-components';
import variables from 'styles/variables';

export const Textarea = styled.textarea`
  border: none;
  border-radius: 50px;
  box-shadow: inset 0px 1px 10px 0px rgba(85, 85, 85, 0.2);
  padding: 13px 90px 13px 20px;
  position: relative;
  width: 100%;
  outline: none;
  resize: none;
`;
export const AddWrapper = styled.div`
  color: ${variables['theme-color']};
  width: 40px;
  height: 40px;
  border-radius: 40px;
  /* background: ${variables['theme-color']}; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  cursor: pointer;
`;
