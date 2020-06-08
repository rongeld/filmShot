import styled, { css } from 'styled-components';

const loadingStyles = css`
  justify-content: center;
  align-items: center;
`;
const loadedStyles = css`
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.div`
  background: white;
  flex: 0;

  a {
    text-decoration: none;
    color: black;
  }
`;
export const ChatBody = styled.div`
  background: #edf4f6;
  padding: 30px;
  display: flex;
  flex: 16;
  max-height: 600px;
  overflow-y: scroll;
  flex-direction: column;
  -ms-overflow-style: none;
  ${({ direction }) => (direction ? loadingStyles : loadedStyles)}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled.div`
  padding: ${({ noPadding }) => (noPadding ? 'none' : '15px 15px 15px 60px')};
  background: ${({ noBackgound }) => (noBackgound ? 'none' : 'white')};
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;
    }

    button {
      margin-left: 20px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }

    svg {
      height: 30px;
      width: 30px;
      fill: #43337b;
    }
  }
`;
export const TextInput = styled.textarea`
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: none;
  outline: none;
  padding-top: 16px;
  resize: none;
  background: ${({ noBackgound }) => (noBackgound ? 'none' : 'white')};
  color: ${({ noBackgound }) => (noBackgound ? 'white' : 'black')};
`;
export const ChatWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;
