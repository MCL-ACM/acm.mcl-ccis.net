import React from 'react';
import MessageWall from '../../components/anniversary/message-wall-2022/MessageWall';

export default function MessageWall2022Page() {
  const isBrowser = typeof window !== 'undefined';
  return isBrowser && <MessageWall />;
}
