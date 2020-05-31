/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, FlexBox } from 'components/shared/SharedStyles';
import ProfileHead from 'components/profile-head/ProfileHead';

import {
  TabListComponent,
  TabsComponent,
  TabPanelComponent,
  TabComponent
} from './AboutPageStyles';

const AboutPage = ({ about, camera, interests }) => {
  return (
    <Container column>
      <ProfileHead title="About" navs={['Facebook', 'Twitter', 'Pinterest']} />
      <TabsComponent>
        <FlexBox shadow margin-right="30px" max-width="290px" width="100%" pd>
          <TabListComponent>
            <TabComponent>About me</TabComponent>
            <TabComponent>Camera</TabComponent>
            <TabComponent>Interests</TabComponent>
            {/* <TabComponent>Contact Details</TabComponent> */}
          </TabListComponent>
        </FlexBox>

        <TabPanelComponent>
          <div>
            <h3>About me</h3>
          </div>

          <p>{about}</p>
        </TabPanelComponent>
        <TabPanelComponent>
          <div>
            <h3>Camera</h3>
          </div>
          <p>{camera}</p>
        </TabPanelComponent>
        <TabPanelComponent>
          <div>
            <h3>Interests</h3>
          </div>
          <p>{interests}</p>
        </TabPanelComponent>
        {/* <TabPanelComponent>
          <div>
            <h3>Contact Details</h3>
          </div>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search
          </p>
        </TabPanelComponent> */}
      </TabsComponent>
    </Container>
  );
};

export default AboutPage;
