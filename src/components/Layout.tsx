import ThemeToggler from "./ThemeToggler";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      {children}
      <ThemeToggler />
    </>
  );
}
