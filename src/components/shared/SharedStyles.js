import styled from 'styled-components';
import variables from 'styles/variables';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: ${({ jc }) => jc || 'flex-start'};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  height: 100%;
`;

export const FlexBox = styled.div`
  display: flex;
  background: white;
  padding: ${({ pd }) => (pd ? '20px' : '0')};
  box-shadow: ${({ shadow }) =>
    shadow ? '0px 1px 15px 0px rgba(51, 51, 51, 0.2);' : 'none'};
  ${props => ({ ...props })};
`;

export const Wrapper = styled.main`
  background: ${variables['bg-color']};
  padding: 100px 0;
  min-height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  a,
  p {
    display: block;
    cursor: pointer;
    color: ${variables['gray-color']};
    font-size: 16px;
    font-weight: ${({ small }) => (small ? '300' : '700')};
    line-height: 1;
    padding: ${({ small }) => (small ? '17px 0' : '21px 0')};
    text-transform: capitalize;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    @media (max-width: 665px) {
      font-size: 12px;
    }

    &:not(:last-child) {
      margin-right: ${({ small }) => (small ? '30px' : '50px')};

      @media (max-width: 665px) {
        margin-right: 30px;
      }
    }

    &.active,
    &:hover {
      color: ${variables['theme-color']};
    }
  }
`;
