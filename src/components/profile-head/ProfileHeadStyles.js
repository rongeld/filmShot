import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 325px;
  padding-right: 30px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  background: white;
  display: flex;

  @media screen and (max-width: 900px) {
    padding-left: 40px;
  }
`;
