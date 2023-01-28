interface Props {
  children: React.ReactNode;
}

export default function Heading({ children }: Props) {
  return (
    <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl">
      {children}
    </h1>
  );
}
