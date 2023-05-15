"use client";

import ThemeToggler from "./ThemeToggler";
import { Montserrat } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";
import * as gtag from "../lib/gtag";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const montserrat = Montserrat({
  weight: ["300"],
  subsets: ["latin-ext", "latin"],
  variable: "--font-montserrat",
});

interface Props {
  children: React.ReactNode;
  content: {
    github: string;
    linkedin: string;
    mail: string;
    portfolio: string;
  };
}

export default function Layout({ children, content }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    handleRouteChange(pathname);
  }, [pathname]);

  return (
    <div
      className={`${montserrat.variable} grid h-full grid-rows-[min-content_1fr_min-content] gap-8 p-6 font-sans max-[450px]:pb-10 sm:gap-10 sm:p-10 md:gap-14 md:p-14 md:pb-12 lg:p-20 lg:pb-12 xl:gap-16 xl:p-32 xl:pb-12 2xl:gap-20 2xl:px-60 2xl:pb-12 2xl:pt-[20vh]`}
    >
      <Header
        github={content.github}
        linkedin={content.linkedin}
        mail={content.mail}
      />
      <div className="after:bg-[linear-gradient(to_bottom,_rgba(255,255,255,0),_rgba(255,255,255, 1)_90%)] relative overflow-hidden from-transparent to-light-primary after:pointer-events-none after:absolute after:bottom-0 after:h-12 after:w-full after:bg-gradient-to-b dark:to-dark-primary">
        {children}
      </div>
      <ThemeToggler />
      <Footer portfolioLink={content.portfolio} />
    </div>
  );
}
