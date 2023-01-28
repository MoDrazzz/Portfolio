import Paragraph from "./Paragraph";

export default function Footer() {
  return (
    <footer className="grid text-center text-light-gray dark:text-dark-gray">
      <Paragraph>2023 MoDrazzz © All rights Reserved</Paragraph>
      <Paragraph>
        {"<"}View source code{" />"}
      </Paragraph>
    </footer>
  );
}
