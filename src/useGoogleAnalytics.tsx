import { useEffect } from "react";

const useGoogleAnalytics = (trackingId: string) => {
  useEffect(() => {
    if (!trackingId) return;

    // Check if gtag is available
    if (!window.gtag) {
      console.warn("Google Analytics script is not loaded.");
      return;
    }

    // Ensure dataLayer is initialized
    window.dataLayer = window.dataLayer || [];

    // Get the current path from window.location.pathname
    const currentPath = window.location.pathname;

    // Push pageview event to dataLayer for GTM
    window.dataLayer.push({
      event: "pageview",
      page_path: currentPath,
    });

    // Use gtag to configure the page view
    window.gtag("config", trackingId, {
      page_path: currentPath,
    });
  }, [trackingId]); // No need to track location, just use window.location.pathname
};

export { useGoogleAnalytics };
