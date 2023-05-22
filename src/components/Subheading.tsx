interface Props {
  children: React.ReactNode;
}

export default function Subheading({ children }: Props) {
  return <h2 className="sm:text-lg lg:text-xl">{children}</h2>;
}
