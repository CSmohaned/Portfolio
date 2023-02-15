import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

function Document() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap" rel="stylesheet"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"/>
        </body>
      </Html>
    )
  }
  export default Document;