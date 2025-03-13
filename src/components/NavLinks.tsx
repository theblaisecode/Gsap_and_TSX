import { NavLink } from "react-router-dom";
import { navLinks } from "../data.ts";
import { navLinkType } from "../types/types.tsx";

function NavLinks() {
  return (
    <nav>
      {navLinks.map((navLinks: navLinkType) => {
        const { id, name, url, ariaLabel }: navLinkType = navLinks;

        return (
          <NavLink
            key={id}
            to={url}
            aria-label={ariaLabel}
            className={({ isActive }) => (isActive ? "activeNav" : "")}>
            {name}
            <div className="active"></div>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavLinks;
