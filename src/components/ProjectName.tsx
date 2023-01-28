interface Props {
  children: React.ReactNode;
}

export default function ProjectName({ children }: Props) {
  return <h2 className="lg:text-lg 2xl:text-xl">{children}</h2>;
}
