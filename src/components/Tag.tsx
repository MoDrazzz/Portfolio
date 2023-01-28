import Paragraph from "./Paragraph";

interface Props {
  children: React.ReactNode;
}

export default function Tag({ children }: Props) {
  return (
    <div className="rounded-[5px] bg-light-gray py-[5px] px-6 dark:bg-dark-gray">
      {children}
    </div>
  );
}
