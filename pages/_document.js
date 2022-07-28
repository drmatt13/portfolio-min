import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Matt Sweeney - Portfolio" />
        <meta
          property="og:description"
          content="Hi, I'm Matthew. I am a full-stack developing, 2022 Data Analytics graduate from SNHU"
        />
        <meta property="og:image" content="/images/ogimage.png" />
        <meta name="theme-color" content="#3c374a" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
