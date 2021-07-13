import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { SITE_DOMAIN } from "constants/urls";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render(): JSX.Element {
    const title = "芸工展2021 プレサイト";
    const description = "芸工展2021のプレサイト！部署の特徴や芸工展における様々なコンテンツの紹介をします。";

    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={SITE_DOMAIN} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/logo.png" />
          <meta name="twitter:card" content="summary" />
          <link rel="icon" sizes="48x48" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="preload" href="/fonts/Genuine/Genuine400.ttf" as="font" type="font" crossOrigin="" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
