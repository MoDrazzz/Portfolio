import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import Hamburger from "./Hamburger";

interface Props {
  children: ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <header className="grid gap-5">
      <div className="flex justify-between">
        <Hamburger />
        <div className="flex gap-7 text-light-gray dark:text-dark-gray">
          <a href="#" className="flex">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="flex">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" className="flex">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <h1 className="text-3xl">{children}</h1>
    </header>
  );
}
