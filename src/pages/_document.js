import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="title" content="Portfolio | Alexandre GHMIR" />
                <meta name="author" content="Alexandre GHMIR" />
                <meta name="description" content="Alexandre Ghmir's portfolio website. Multimedia student & web developer based in Paris, France." />
                <meta property="og:title" content="Portfolio | Alexandre GHMIR" />
                <meta property="og:description" content="Alexandre Ghmir's portfolio website. Multimedia student based in Paris, France." />
                <meta property="og:image" content="/favicon/android-chrome-512x512.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
