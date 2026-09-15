import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SW6LXY29P7');
        `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SW6LXY29P7"
        strategy="afterInteractive"
      />
    </>
  );
}
