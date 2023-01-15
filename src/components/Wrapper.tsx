interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return <div className="mt-5 flex flex-col gap-5">{children}</div>;
}
