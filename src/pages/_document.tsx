import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-light-primary p-5 text-light-secondary dark:bg-dark-primary dark:text-dark-secondary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
