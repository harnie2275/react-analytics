# JS-REACT-ANALYTICS

This is a react/next library that allows you to integrate google analytics easily.

## Installation
using yarn

```bash
yarn add js-react-analytics
```
using npm

```bash
npm install js-react-analytics
```

## Usage
### Using Component for NextJs
```js
import React from 'react';
import {GoogleAnalyticsProvider} from 'js-react-analytics/next;

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GoogleAnalytics trackingId="G-XXXXXXXXXXX" />
      <Component {...pageProps} />
    </>
  );
}
```
