import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Paragraph from "./Paragraph";
import { Dispatch } from "react";

interface Props {
  href: string;
  children: string;
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
}

export default function NavLink({ href, children, setIsActive }: Props) {
  const pathname = usePathname();

  return (
    <li
      className={classNames({
        "text-light-primary dark:text-dark-primary md:text-light-secondary md:dark:text-dark-secondary":
          pathname === href,
        "text-dark-gray dark:text-light-gray md:text-light-gray md:dark:text-dark-gray":
          pathname != href,
      })}
    >
      <Link href={href} onClick={() => setIsActive(false)}>
        <Paragraph>{children}</Paragraph>
      </Link>
    </li>
  );
}
