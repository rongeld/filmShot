import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import variables from 'styles/variables';

export const TabsComponent = styled(Tabs)`
  display: flex;
  margin-top: 30px;
  width: 100%;
  align-items: flex-start;
`;

export const TabListComponent = styled(TabList)`
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
  padding-top: 10px;
  margin-bottom: 0;
  width: 100%;
`;
export const TabComponent = styled(Tab)`
  font-weight: 500;
  border-bottom: 1px solid ${variables['light-gray']};
  padding-bottom: 5px;
  margin-bottom: 20px;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;

  &.react-tabs__tab--selected,
  &:hover {
    color: ${variables['theme-color']};
  }
`;

export const TabPanelComponent = styled(TabPanel)`
  opacity: 0;
  transition: opacity 0.9s ease;
  &.react-tabs__tab-panel--selected {
    flex: 20;
    background: white;
    opacity: 1;

    & > div:first-child {
      padding: 30px 50px 0px;
    }

    p {
      padding: 10px 50px;
    }

    h3 {
      border-bottom: 1px solid ${variables['light-gray']};
      padding-bottom: 10px;
      margin-top: 0;
      font-weight: 500;
    }
  }
`;
