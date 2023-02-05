"use client";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Mail } from "react-feather";
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";

interface Props {
  github: string;
  linkedin: string;
  mail: string;
}

export default function Header({ github, linkedin, mail }: Props) {
  const [isNavigationActive, setIsNavigationActive] = useState(false);

  return (
    <header className="grid gap-5">
      <div className="relative flex justify-between">
        <Hamburger
          isActive={isNavigationActive}
          setIsActive={setIsNavigationActive}
        />
        <Navigation
          setIsActive={setIsNavigationActive}
          isActive={isNavigationActive}
        />
        <div className="flex gap-7 text-light-gray dark:text-dark-gray sm:text-lg md:text-xl xl:text-2xl">
          <a
            href={github}
            className="flex items-center"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={linkedin}
            className="flex items-center"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={`mailto:${mail}`} className="flex items-center">
            <Mail className="h-4 w-auto sm:h-5 md:h-6 xl:h-7" />
          </a>
        </div>
      </div>
    </header>
  );
}
