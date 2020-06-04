import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variables from 'styles/variables';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const Body = styled.div`
  padding: 20px;
  width: 100%;
  background: white;
  display: flex;
`;

export const UserMessage = styled(Link)`
  position: relative;
  margin-right: 10px;
  transition: 0.3s;
`;
export const NumberOfUnreadMessages = styled.span`
  position: absolute;
  height: 20px;
  width: 20px;
  background: ${variables['theme-color']};
  color: white;
  right: ${({ right }) => right || '-8px'};
  top: ${({ top }) => top || '-8px'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 10px;
`;
