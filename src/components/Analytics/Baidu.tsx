'use client'
import Script from 'next/script'

export const BaiDuAnalytics = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_BAIDU_TONGJI && (
        <>
          <Script
            id="baidu-tongji"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?${process.env.NEXT_PUBLIC_BAIDU_TONGJI}";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `
            }}
          />
        </>
      )}
    </>
  )
}
