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
import React from "react";
import { GoogleAnalyticsProvider } from "js-react-analytics/next";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GoogleAnalytics trackingId="G-XXXXXXXXXXX" />
      <Component {...pageProps} />
    </>
  );
}
```

### Using Component for ReactJs

```js
import React from "react";
import { GoogleAnalyticsProvider, trackEvent } from "js-react-analytics/react";
import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => {
  const handleClick = () => {
    trackEvent("click", "button", "cta-button");
  };

  return (
    <Router>
      <GoogleAnalyticsProvider trackingId="G-XXXXXXXXXX">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <button onClick={handleClick}>Track Event</button>
      </GoogleAnalyticsProvider>
    </Router>
  );
};

export default App;
```

### Using hooks

```js
import React from "react";
import { GoogleAnalyticsProvider } from "js-react-analytics/next";

useGoogleAnalytics("trackingIDs");
```
