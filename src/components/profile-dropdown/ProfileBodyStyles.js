import styled from 'styled-components';
import variables from 'styles/variables';

export const Wrapper = styled.div`
  box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
  position: absolute;
  transition: opacity 0.3s;
  transform: translateY(0);
  top: 70px;
  width: 100%;
  max-width: 250px;
  right: 0;
  background: white;

  &.fade-enter {
    opacity: 0;
    transform: translateY(-50px);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }

  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 300ms, transform 300ms;
  }
`;

export const Box = styled.div`
  border-bottom: 1px solid ${variables['light-gray']};
  color: ${variables['paragraph']};
`;
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const BoxBody = styled.div`
  padding: 20px;

  h3 {
    margin: 0;
    font-weight: 700;
  }

  p {
    margin: 5px 0;
    font-size: 12px;
  }

  a {
    color: ${variables['paragraph']};
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
    transition: all 0.3s ease;

    &:hover {
      color: ${variables['theme-color']};
    }
    svg {
      margin-right: 10px;
    }
  }
`;
