import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return ( 
    <Html lang="en">
      <Head>
      <meta name="description" content="guitarasLA - Venta de guitarras"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
      <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Saira+Extra+Condensed:wght@900&display=swap" rel="stylesheet"/>
      <link rel='stylesheet' href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
