import styled from 'styled-components';

export const ImagesGrid = styled.div`
  margin-top: 20px;
  line-height: 0;
  column-count: 4;
  column-gap: 5px;

  @media screen and (max-width: 650px) {
    column-count: 2;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 5px;
  }
`;
