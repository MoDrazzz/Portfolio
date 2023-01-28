interface Props {
  children: React.ReactNode;
}

export default function ProjectTags({ children }: Props) {
  return <p className="text-xs lg:text-sm">{children}</p>;
}
