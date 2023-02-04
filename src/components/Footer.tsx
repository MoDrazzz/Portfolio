import Paragraph from "./Paragraph";

interface Props {
  portfolioLink: string;
}

export default function Footer({ portfolioLink }: Props) {
  return (
    <footer className="grid text-center text-light-gray dark:text-dark-gray">
      2023 MoDrazzz © All rights Reserved
      <br />
      <a href={portfolioLink} rel="noreferrer" target="_blank">
        {"<"}ViewSourceCode{" />"}
      </a>
    </footer>
  );
}
