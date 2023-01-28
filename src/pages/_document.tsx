import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-[100vh] bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
