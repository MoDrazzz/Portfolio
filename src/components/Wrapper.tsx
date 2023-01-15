interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return <main className="mt-5 h-max w-full">{children}</main>;
}
