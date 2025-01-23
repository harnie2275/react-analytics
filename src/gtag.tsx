export const loadGoogleAnalytics = (trackingId: string) => {
  if (typeof window === "undefined") return;

  if (
    document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${trackingId}"]`
    )
  ) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    window.gtag("js", new Date());
    window.gtag("config", trackingId);
  };
};
