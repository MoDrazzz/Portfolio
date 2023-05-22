import Paragraph from "./Paragraph";
import * as Contentful from "contentful";

interface Props {
  children: React.ReactNode;
  link: Contentful.EntryFields.Text;
}

export default function ProjectName({ children, link }: Props) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Paragraph>
        <strong>{children}</strong>
      </Paragraph>
    </a>
  );
}
