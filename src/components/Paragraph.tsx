interface Props {
  children: React.ReactNode;
}

export default function Paragraph({ children }: Props) {
  return <p className="sm:text-lg lg:text-xl">{children}</p>;
}
