import classNames from "classnames";
import Link from "next/link";
import { Dispatch } from "react";
import NavLink from "./NavLink";

interface Props {
  isActive?: boolean;
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({ isActive, setIsActive }: Props) {
  return (
    <nav
      className={classNames(
        "absolute top-full z-10 mt-5 w-full origin-top scale-y-0 rounded bg-light-secondary p-5 transition-transform dark:bg-dark-secondary",
        {
          "scale-y-100": isActive === true,
        },
        "md:static md:mt-0 md:w-auto md:scale-y-100 md:rounded-none md:bg-transparent md:p-0 md:dark:bg-transparent"
      )}
    >
      <ul className="grid gap-3 text-light-primary dark:text-dark-primary md:flex md:gap-12">
        <NavLink setIsActive={setIsActive} href="/">
          About
        </NavLink>
        <NavLink setIsActive={setIsActive} href="/projects">
          Projects
        </NavLink>
        <NavLink setIsActive={setIsActive} href="/events">
          Events
        </NavLink>
        <NavLink setIsActive={setIsActive} href="/contact">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}
