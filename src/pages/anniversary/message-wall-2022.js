import React from 'react';
import MessageWall from '../../components/anniversary/message-wall-2022/MessageWall';
import Head from '../../components/common/Head';

export default function MessageWall2022Page() {
  const isBrowser = typeof window !== 'undefined';
  return (
    isBrowser && (
      <>
        <Head title='Message Wall 2022' />
        <MessageWall />
      </>
    )
  );
}
