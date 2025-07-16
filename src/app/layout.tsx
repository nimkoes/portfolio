import type { Metadata } from "next";
import Script from "next/script";
import "~/styles/index.scss";

export const metadata: Metadata = {
  title: "About nimkoes",
  description: "github pages for nimkoes",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-site-verification" content="qjAYKAWDvi1a8R2WjIvp8VV8QmEiYymdpjXx5nBcyak" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link href="https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css" rel="stylesheet" type="text/css" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          as="style"
        />
      </head>

      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-61Q4215G9K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-61Q4215G9K');
          `}
        </Script>
      </body>
    </html>
  );
}
