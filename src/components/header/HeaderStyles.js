import styled from 'styled-components';
import variables from 'styles/variables';

export const HeaderWrapper = styled.header`
  background: white;
  box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
  height: 70px;
  position: fixed;
  z-index: 5;
  width: 100%;
`;
export const LogoWrapper = styled.div`
  margin-left: -45px;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    display: block;
    color: ${variables['gray-color']};
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    padding: 21px 0;
    text-transform: capitalize;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:not(:last-child) {
      margin-right: 50px;
    }

    &.active,
    &:hover {
      color: ${variables['theme-color']};
    }
  }
`;
