import React from 'react';
import ContentDisplay from '../common/ContentDisplay';
import DesktopMessageToAspiringMembersContent from '../content/DesktopMessageToAspiringMembersContent';
import MessageToAspiringMembersContent from '../content/MessageToAspiringMembersContent';
import Page from './Page';

export default function MessageToAspiringMembers({ isPortrait }) {
  return (
    <Page color='#005C7A'>
      <ContentDisplay
        contents={
          isPortrait
            ? MessageToAspiringMembersContent
            : DesktopMessageToAspiringMembersContent
        }
      />
    </Page>
  );
}
