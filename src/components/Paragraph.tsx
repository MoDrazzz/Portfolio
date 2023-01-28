interface Props {
  children: React.ReactNode;
}

export default function Paragraph({ children }: Props) {
  return <p className="sm:text-lg md:text-xl xl:text-2xl">{children}</p>;
}
