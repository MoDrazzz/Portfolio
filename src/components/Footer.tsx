import Paragraph from "./Paragraph";

interface Props {
  portfolioLink: string;
}

export default function Footer({ portfolioLink }: Props) {
  return (
    <footer className="grid text-center text-light-gray dark:text-dark-gray">
      <p>
        2023 <strong className="">MoDrazzz</strong> © All rights Reserved
      </p>
      <a href={portfolioLink} rel="noreferrer" target="_blank">
        {"<"}ViewSourceCode{" />"}
      </a>
    </footer>
  );
}
