import { navLinks } from "../data.ts";
import { navLinkType } from "../types/types.tsx";

function NavLinks() {
  return (
    <nav>
      {navLinks.map((navLinks) => {
        const { id, name, url, ariaLabel }:navLinkType = navLinks;

        return (
          <a key={id} href={url} aria-label={ariaLabel}>
            {name}
          </a>
        );
      })}
    </nav>
  );
}

export default NavLinks;
