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

export type TestimonialSettings = {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
};

export const testimonial: {
  id: number;
  name: string;
  job: string;
  img: string;
  description: string;
}[] = [
  {
    id: 1,
    name: "Amaka N.",
    job: "FrontEnd Developer",
    img: "",
    description:
      "Teddy is an exceptional designer. Working with him has been a major plus to me and my team. He always has new inspiring ideas and when he sets his mind on something he’s always sure to go all out in accomplishing it.",
  },
  {
    id: 2,
    name: "J Grand",
    job: "Senior Graphics Designer",
    img: "",
    description:
      "Working with Teddy has been an amazing experience, his design etiquettes are top notch and i dare say on par with any top designer with higher years of designing experience than him. Truly an amazing designer.",
  },
  {
    id: 3,
    name: "Ahmed Yusuf",
    job: "Product Designer",
    img: "",
    description:
      "Teddy has been an amazing addon to our company, despite it being a short term contract, he has managed to tremendously improve our services to better suite the taste of our users and also increased our userbase.",
  },
  {
    id: 4,
    name: "Ayo Adegoke",
    job: "UX/UI Designer",
    img: "",
    description:
      "I really enjoyed the process working alongside Teddy. I am confident to say he is passionate about what he does, he has a sharp eye for detail and creativity. He is very professional with his work. I highly recommend his services.",
  },
];
