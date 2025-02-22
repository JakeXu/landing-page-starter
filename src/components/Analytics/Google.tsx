'use client'
import Script from 'next/script'

export const GoogleAnalytics = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ID && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`} />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ID}', {
                page_path: window.location.pathname,
                });
              `
            }}
          />
        </>
      )}
    </>
  )
}
