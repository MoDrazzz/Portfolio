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
    <main className={`${montserrat.variable} font-sans`}>
      {children}
      <ThemeToggler />
    </main>
  );
}
