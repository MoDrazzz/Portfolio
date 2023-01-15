import classNames from "classnames";
import Link from "next/link";
import NavLink from "./NavLink";

interface Props {
  isActive: boolean;
}

export default function Navigation({ isActive }: Props) {
  return (
    <nav
      className={classNames(
        "absolute top-full mt-5 w-full origin-top scale-y-0 rounded bg-light-secondary p-5 transition-transform dark:bg-dark-secondary",
        {
          "scale-y-100": isActive,
        }
      )}
    >
      <ul className="grid gap-3 text-light-primary dark:text-dark-primary">
        <NavLink href="/">About</NavLink>
        <NavLink href="projects">Projects</NavLink>
        <NavLink href="events">Events</NavLink>
        <NavLink href="contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
