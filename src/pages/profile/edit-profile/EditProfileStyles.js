import styled from 'styled-components';
import variables from 'styles/variables';

export const FormWrapper = styled.div`
  padding: 10px 50px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 20px;
  outline: none;
  color: ${variables['gray-color']};
  border-color: ${variables['gray-color']};
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
export const Form = styled.form`
  margin-bottom: 50px;
  display: flex;

  & > div:first-child > div {
    margin-bottom: 20px;
  }
`;
export const FormLeft = styled.div`
  flex: 3;
  border-right: 1px solid lightgrey;
  padding-right: 50px;

  h4 {
    margin-bottom: 4px;
  }
`;

export const Col2 = styled.div`
  display: flex;

  & > div:first-child {
    margin-right: 60px;
  }

  & > div {
    flex: 1;
  }
`;
