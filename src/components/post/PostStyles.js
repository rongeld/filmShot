import styled from 'styled-components';
import variables from 'styles/variables';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > div {
    &:first-child {
      display: flex;
    }

    h5,
    p {
      margin: 0;
      margin-left: 10px;
    }

    h5 {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s;

        &:hover {
          color: ${variables['theme-color']};
        }
      }
    }

    p {
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
`;

export const PostText = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const IconDropdown = styled.div`
  position: relative;

  svg {
    transition: 0.3s;
  }
  &:hover svg {
    fill: ${variables['theme-color']};
  }
  cursor: pointer;
  & > div {
    right: 0;
    top: 100%;
    width: 200px;
    background-color: #fff;
    position: absolute;
    padding: 10px;
    z-index: 9;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    transform: translateY(30px);

    &::after {
      right: 10px;
      bottom: 100%;
      content: "";
      position: absolute;
      height: 20px;
      border-bottom: 20px solid #fff;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;

    }
    p {
      margin: 0;
      padding: 15px;
      font-size: 13px;
      font-weight: 500;
      transition: 0.3s;
      &:hover {
        color: ${variables['theme-color']};
      }
      &:first-child {
        border-bottom: 1px solid lightgrey;
      }
    }
}
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(20px);

    
  }
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;

  &:last-child {
    & > div:not(:last-child) {
      margin-right: 20px;
    }
  }

  svg {
    margin-right: 6px;
    position: relative;
    top: 2px;

    fill: ${variables['theme-color']};
  }

  &:first-child {
    svg {
      cursor: pointer;
      fill: ${({ isActive }) => (isActive ? variables['theme-color'] : 'grey')};

      &:hover {
        fill: ${({ isActive }) =>
          !isActive ? variables['theme-color'] : 'grey'};
      }
    }
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
