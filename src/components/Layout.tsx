import ThemeToggler from "./ThemeToggler";
import { Montserrat } from "@next/font/google";
import Footer from "./Footer";
import Header from "./Header";

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin-ext", "latin"],
  variable: "--font-montserrat",
});

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div
      className={`${montserrat.variable} grid h-full grid-rows-[min-content_1fr_min-content] gap-8 p-6 font-sans max-[450px]:pb-10 sm:gap-10 sm:p-10 md:gap-14 md:p-14 md:pb-12 lg:p-20 lg:pb-12 xl:gap-16 xl:p-32 xl:pb-12 2xl:gap-20 2xl:px-60 2xl:pb-12 2xl:pt-[20vh]`}
    >
      <Header />
      {children}
      <ThemeToggler />
      <Footer />
    </div>
  );
}
