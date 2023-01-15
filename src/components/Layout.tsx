import ThemeToggler from "./ThemeToggler";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div
      className={`${montserrat.variable} grid h-full grid-rows-[min-content_1fr_min-content] font-sans`}
    >
      {children}
      <ThemeToggler />
    </div>
  );
}
