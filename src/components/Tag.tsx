import classNames from "classnames";
import Paragraph from "./Paragraph";

interface Props {
  children: React.ReactNode;
  onClick: React.Dispatch<React.SetStateAction<{}>>;
  state: boolean;
}

export default function Tag({ children, onClick, state }: Props) {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "rounded-[5px] border-2 border-light-gray py-[5px] px-6 text-xs dark:border-dark-gray md:text-sm lg:text-base",
        {
          "bg-light-gray dark:bg-dark-gray": state,
          "bg-transparent text-light-gray dark:bg-transparent dark:text-dark-gray":
            !state,
        }
      )}
    >
      {children}
    </div>
  );
}
