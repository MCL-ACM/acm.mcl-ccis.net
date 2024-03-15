import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({ title }) {
  return (
    <Helmet
      defaultTitle='Mapúa MCL-ACM'
      title={title}
      titleTemplate='%s | Mapúa MCL-ACM'
    />
  );
}
