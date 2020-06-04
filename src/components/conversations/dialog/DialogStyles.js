import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from 'styles/variables';

export const UserName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: white;

  @media (max-width: 995px) {
    display: none;
  }
`;
export const Time = styled.span`
  font-size: 10px;
  margin-left: 10px;
  color: rgba(99, 99, 99, 0.7);
  @media (max-width: 995px) {
    margin-left: 0;
  }
  @media (max-width: 700px) {
    position: absolute;
    bottom: 0;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;
export const LastMessage = styled.p`
  margin: 0;
  color: white;
  opacity: 0.65;
  font-weight: 200;
  font-size: 13px;
  margin-top: 4px;
`;
export const Wrapper = styled(NavLink)`
  padding: 16px 30px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  position: relative;

  @media (max-width: 700px) {
    padding: 16px 10px;
  }

  &.active,
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
