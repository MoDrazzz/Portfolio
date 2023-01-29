import "styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Layout from "components/Layout";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="h-[100vh] bg-light-primary text-light-secondary transition-colors dark:bg-dark-primary dark:text-dark-secondary">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
