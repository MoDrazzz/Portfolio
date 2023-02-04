"use client";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
        <Navigation
          setIsActive={setIsNavigationActive}
          isActive={isNavigationActive}
        />
        <div className="flex gap-7 text-light-gray dark:text-dark-gray sm:text-lg md:text-xl xl:text-2xl">
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
