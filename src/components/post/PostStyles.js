import styled from 'styled-components';

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

    p {
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
`;

export const PostText = styled.div`
  margin-bottom: 20px;
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
  }
`;
