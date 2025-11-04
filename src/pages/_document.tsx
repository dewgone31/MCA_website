import Document, { Html, Head, Main, NextScript } from 'next/document';
import { colors } from '../styles/colors';

class MyDocument extends Document {
  render() {
    const faviconPath = process.env.NEXT_PUBLIC_FAVICON_PATH || "/favicon.svg";
    
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/svg+xml" href={faviconPath} />
          <link rel="icon" type="image/png" href={faviconPath} />
          <link rel="apple-touch-icon" href={faviconPath} />
          <meta name="theme-color" content={colors.goldPrimary} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 