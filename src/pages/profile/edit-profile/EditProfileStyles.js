import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding: 10px 50px;
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
