import classNames from "classnames";
import { Dispatch, useState } from "react";
import Navigation from "./Navigation";

interface Props {
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}

export default function Hamburger({ setIsActive, isActive }: Props) {
  return (
    <>
      <button
        className={classNames(
          "flex h-4 w-4 flex-col justify-between sm:h-5 sm:w-5 md:hidden"
        )}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span
          className={classNames(
            "block h-0.5 w-full bg-light-secondary transition-transform dark:bg-dark-secondary",
            {
              "translate-y-[7px] rotate-45 sm:translate-y-[9px]": isActive,
            }
          )}
        />
        <span
          className={classNames(
            "block h-0.5 w-full bg-light-secondary transition-opacity dark:bg-dark-secondary",
            {
              "opacity-0": isActive,
            }
          )}
        />
        <span
          className={classNames(
            "block h-0.5 w-full bg-light-secondary transition-transform dark:bg-dark-secondary",
            {
              "-translate-y-[7px] -rotate-45 sm:-translate-y-[9px]": isActive,
            }
          )}
        />
      </button>
    </>
  );
}
