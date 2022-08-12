import React from 'react';
import MessageWallMaker from '../../components/anniversary/message-wall-maker/MessageWallMaker';

export default function MessageWallMakerPage() {
  const isBrowser = typeof window !== 'undefined';
  return isBrowser && <MessageWallMaker />;
}
