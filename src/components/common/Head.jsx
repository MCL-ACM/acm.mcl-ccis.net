import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({ title }) {
  return (
    <Helmet defaultTitle='MCL-ACM' title={title} titleTemplate='%s | MCL-ACM' />
  );
}
