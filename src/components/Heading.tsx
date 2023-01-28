interface Props {
  children: React.ReactNode;
}

export default function Heading({ children }: Props) {
  return <h1 className="text-3xl">{children}</h1>;
}
