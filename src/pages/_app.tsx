import "styles/globals.css";
import type { AppProps } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Layout from "components/Layout";

import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
