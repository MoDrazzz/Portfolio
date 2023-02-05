import "styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import * as Contentful from "contentful";

import Layout from "components/Layout";

async function getContent() {
  const client = Contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN,
  });

  const { fields } = await client.getEntry("FFfzjyHiC0O6opTiqdxxP");

  return {
    github: fields.github,
    linkedin: fields.linkedin,
    mail: fields.mail,
    portfolio: fields.portfolio,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = await getContent();

  return (
    <html lang="en" className="dark h-full">
      <body className="h-full bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary">
        <Layout content={content}>{children}</Layout>
      </body>
    </html>
  );
}
