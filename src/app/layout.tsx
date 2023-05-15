import "styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import * as Contentful from "contentful";

import Layout from "components/Layout";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  keywords: [
    "Grzegorz",
    "Pawlik",
    "Grzegorz Pawlik",
    "Software Engineer",
    "Front-End Developer",
    "Front-End",
    "Developer",
    "Front-End Engineer",
    "Bielsko-Biała",
    "Web development",
    "HTML",
    "CSS",
    "JavaScript",
    "User interface",
    "UI",
    "User experience",
    "UX",
    "Responsive design",
    "Portfolio",
    "Website development",
    "Front-End projects",
    "Code samples",
    "Web design",
    "Website optimization",
    "Cross-browser compatibility",
    "Mobile-friendly",
    "Performance optimization",
    "HTML5",
    "CSS3",
    "React",
    "Tailwind CSS",
    "Next.js",
    "Browser extensions",
    "Web accessibility",
    "SEO-friendly coding",
    "Version control",
    "GIT",
    "Debugging",
    "Troubleshooting",
  ],
  openGraph: {
    title: "Grzegorz Pawlik - Front-End Developer",
    description:
      "I am a 17-year-old front-end developer based in Bielsko-Biała, Poland. Programming became my passion in October, 2022. I improved my React skills significantly. Now, as I continue to improve, I am looking for opportunities to grow, specifically with a company that can hire me for part-time work, as I am still a student.",
  },
};
