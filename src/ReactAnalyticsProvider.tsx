// components/GoogleAnalyticsProvider.tsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadGoogleAnalytics } from "./gtag";
import { analyticsProvider } from "../types/component";

interface GoogleAnalyticsProviderProps extends analyticsProvider {
  children: React.ReactNode;
}

const GoogleAnalyticsProvider: React.FC<GoogleAnalyticsProviderProps> = ({
  trackingId,
  children,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!trackingId) {
      console.error("Google Analytics tracking ID is required.");
      return;
    }

    // Load Google Analytics script dynamically
    loadGoogleAnalytics(trackingId);

    const handlePageView = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", trackingId, {
          page_path: location.pathname + location.search,
        });
      }
    };

    // Track the pageview when location changes
    handlePageView();
  }, [trackingId, location]);

  return <>{children}</>;
};

export { GoogleAnalyticsProvider };
