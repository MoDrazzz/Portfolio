import Paragraph from "./Paragraph";

interface Props {
  children: React.ReactNode;
}

export default function ProjectName({ children }: Props) {
  return <Paragraph>{children}</Paragraph>;
}
