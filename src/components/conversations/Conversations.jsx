import React from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import Users from './users/Users';
import Convos from './convos/Convos';
import { Body, TabListComponent, TabComponent } from './ConversationStyles';

const Conversation = () => {
  return (
    <Body>
      <Tabs>
        <TabListComponent>
          <TabComponent>
            <h5>Conversations</h5>
          </TabComponent>
          <TabComponent>
            <h5>Users</h5>
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
