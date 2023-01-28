import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Paragraph from "./Paragraph";

interface Props {
  href: string;
  children: string;
}

export default function NavLink({ href, children }: Props) {
  const router = useRouter();

  return (
    <li
      className={classNames({
        "text-light-primary dark:text-dark-primary md:text-light-secondary md:dark:text-dark-secondary":
          router.pathname === href,
        "text-dark-gray dark:text-light-gray md:text-light-gray md:dark:text-dark-gray":
          router.pathname != href,
      })}
    >
      <Link href={href}>
        <Paragraph>{children}</Paragraph>
      </Link>
    </li>
  );
}
