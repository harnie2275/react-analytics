# JS-REACT-ANALYTICS

This is a react/next library that allows you to integrate google analytics easily.

## Installation
using yarn
yarn add js-react-analytics

using npm
npm install js-react-analytics

## Usage
### Using Component for NextJs
import React from 'react';
import {GoogleAnalyticsProvider} from 'js-react-analytics/next;

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GoogleAnalytics trackingId="G-EEN44L4H8F" />
      <Component {...pageProps} />
    </>
  );
}
