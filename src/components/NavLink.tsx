import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

interface Props {
  href: string;
  children: string;
}

export default function NavLink({ href, children }: Props) {
  const router = useRouter();

  return (
    <li
      className={classNames({
        "text-dark-secondary dark:text-dark-primary": router.pathname === href,
        "text-dark-gray dark:text-light-gray": router.pathname != href,
      })}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
