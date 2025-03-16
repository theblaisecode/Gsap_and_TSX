import { RiDribbbleFill, RiBehanceLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { JSX } from "react";

export const navLinks: {
  id: number;
  name: string;
  url: string;
  ariaLabel: string;
}[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
    ariaLabel: "Link to home page",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
    ariaLabel: "Link to about page",
  },
  {
    id: 3,
    name: "Designs",
    url: "/designs",
    ariaLabel: "Link to designs page",
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
    ariaLabel: "Link to contact page",
  },
];

export const socials: {
  id: number;
  icon: React.ElementType;
  href: string;
  ariaLabel: string;
  title: string;
}[] = [
  {
    id: 1,
    icon: RiDribbbleFill,
    href: "https://dribbble.com/Teddy_016",
    ariaLabel: "Link to TeddyTheCreator's Dribbble page",
    title: "Dribbble",
  },
  {
    id: 2,
    icon: RiBehanceLine,
    href: "https://www.behance.net/nwachukcharles",
    ariaLabel: "Link to TeddyTheCreator's Behance page",
    title: "Behance",
  },
  {
    id: 3,
    icon: CiLinkedin,
    href: "https://linkedin.com/in/teddy016",
    ariaLabel: "Link to TeddyTheCreator's LinkedIN page",
    title: "LinkedIN",
  },
];
