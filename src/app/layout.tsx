import "styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import * as Contentful from "contentful";
import Layout from "components/Layout";
import { Metadata } from "next";
import Script from "next/script";

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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}}`}
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
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
    "MoDrazzz",
    "CV",
    "Curriculum Vitae",
    "Resume",
  ],
  openGraph: {
    title: "Grzegorz Pawlik - Front-End Developer",
    description:
      "I am a 17-year-old front-end developer based in Bielsko-Biała, Poland. Programming became my passion in October, 2022. I improved my React skills significantly. Now, as I continue to improve, I am looking for opportunities to grow, specifically with a company that can hire me for part-time work, as I am still a student.",
    images: {
      width: 1200,
      height: 630,
      alt: "Grzegorz Pawlik - Front-End Developer",
      url: "https://images.ctfassets.net/r9jzd3t9nura/6JfYHJnkE7k4EkUX2za2fE/1e4c4e05a576de22f7232a7154d98086/Open_Graph_Image.png",
    },
  },
};
