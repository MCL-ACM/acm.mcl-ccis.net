/* eslint-disable import/prefer-default-export */
import './src/styles/global.css';
import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => {
  if (props.location.pathname.includes('anniversary')) {
    return element;
  }

  return <Layout>{element}</Layout>;
};
