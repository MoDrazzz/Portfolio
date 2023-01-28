import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";

export default function Header() {
  const [isNavigationActive, setIsNavigationActive] = useState(false);

  return (
    <header className="grid gap-5">
      <div className="relative flex justify-between">
        <Hamburger
          isActive={isNavigationActive}
          setIsActive={setIsNavigationActive}
        />
        <Navigation isActive={isNavigationActive} />
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
    </header>
  );
}
