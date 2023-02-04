"use client";

import classNames from "classnames";
import Paragraph from "./Paragraph";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "rounded bg-light-gray py-1 px-6 dark:bg-dark-gray",
        {
          "opacity-70": disabled,
        }
      )}
    >
      <Paragraph>{children}</Paragraph>
    </button>
  );
}
