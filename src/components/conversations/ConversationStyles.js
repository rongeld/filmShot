import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const Body = styled.div`
  padding: 30px 0;
  background: #272f37;
  height: 80vh;
  max-width: 400px;
  /* overflow-y: scroll; */
  width: 100%;
  flex: 2;

  & > * {
    color: white;
  }

  @media screen and (max-width: 552px) {
    max-width: 100%;
    overflow-y: auto;
    overflow-x: scroll;
    order: 2;
  }
`;

export const TabsComponent = styled(TabList)`
  display: flex;
`;
export const TabListComponent = styled(TabList)`
  list-style-type: none;
  display: flex;
  padding-left: 0;
`;

export const TabComponent = styled(Tab)`
  flex: 1;
  cursor: pointer;
  transition: 0.3s;

  &:hover,
  &.react-tabs__tab--selected {
    background: rgba(255, 255, 255, 0.1);
  }

  h5 {
    text-align: center;
  }

  @media (max-width: 700px) {
    text-align: center;
    padding: 10px;
  }
`;
