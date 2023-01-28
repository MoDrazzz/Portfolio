interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return <main className="flex flex-col gap-5">{children}</main>;
}
