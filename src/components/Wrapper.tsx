interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return (
    <main className="flex h-full flex-col gap-5 overflow-y-auto pb-12 md:px-20 xl:px-28 2xl:px-48">
      {children}
    </main>
  );
}
