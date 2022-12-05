/* eslint-disable import/prefer-default-export */
import './src/styles/global.css';
import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => {
  if (
    props.location.pathname.includes('anniversary') ||
    props.location.pathname.includes('hoc2022')
  ) {
    return element;
  }

  return <Layout>{element}</Layout>;
};
