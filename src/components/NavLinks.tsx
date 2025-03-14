import { NavLink } from "react-router-dom";
import { navLinks } from "../data.ts";
import { navLinkType } from "../types/types.tsx";

function NavLinks() {
  return (
    <nav>
      <ul>
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
      </ul>
      
      {/* resume */}
      <div className="btn">
        <a
          className="resume"
          href="https://drive.google.com/file/d/1tr48V3cwtuvgzfSVEGFZ_erPemcyqVCW/view"
          target="_blank"
          aria-label="Google drive link to teddythecreator's resume">
          Download My Resume
        </a>
      </div>
    </nav>
  );
}

export default NavLinks;
