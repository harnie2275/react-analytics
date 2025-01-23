import React, { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { analyticsProvider } from "../types/component";
import Script from "next/script";

const GoogleAnalyticsProvider: FunctionComponent<analyticsProvider> = ({
  trackingId,
}) => {
  const isAppRouter = typeof usePathname !== "undefined";
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!trackingId) return;

    const handleRouteChange = (url: string) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", trackingId, {
          page_path: url,
        });
      }
    };

    if (isAppRouter && pathname) {
      handleRouteChange(pathname);
    }

    if (!isAppRouter && router) {
      router.events.on("routeChangeComplete", handleRouteChange);
    }

    return () => {
      if (!isAppRouter && router) {
        router.events.off("routeChangeComplete", handleRouteChange);
      }
    };
  }, [router, trackingId, pathname, isAppRouter]);

  return (
    <>
      {/* Load the gtag.js script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      {/* Initialize gtag.js */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalyticsProvider;
