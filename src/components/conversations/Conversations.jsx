import React from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import { TiMessages } from 'react-icons/ti';
import { FiUsers } from 'react-icons/fi';
import useWindowWidth from 'utils/windowWidthHook';
import Users from './users/Users';
import Convos from './convos/Convos';
import { Body, TabListComponent, TabComponent } from './ConversationStyles';

const Conversation = () => {
  const width = useWindowWidth();
  return (
    <Body>
      <Tabs>
        <TabListComponent>
          <TabComponent>
            {width < 700 ? <TiMessages /> : <h5>Conversations</h5>}
          </TabComponent>
          <TabComponent>
            {width < 700 ? <FiUsers /> : <h5>Users</h5>}
          </TabComponent>
        </TabListComponent>

        <TabPanel>
          <Convos />
        </TabPanel>
        <TabPanel>
          <Users />
        </TabPanel>
      </Tabs>
    </Body>
  );
};

export default Conversation;
