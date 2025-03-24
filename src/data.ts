import { RiDribbbleFill, RiBehanceLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import {
  DesignsType,
  ExperienceType,
  NavLinkType,
  TestimonialType,
} from "./types/types.tsx";

import design1 from "./assets/seenema.png";
import design2 from "./assets/see.png";
import design3 from "./assets/tessaract.png";
import design4 from "./assets/logistics.png";
import design5 from "./assets/game.png";
import design6 from "./assets/beach.png";
import design7 from "./assets/animation.png";
import design8 from "./assets/music.png";
import design9 from "./assets/medicare.png";
import design10 from "./assets/seenemaApp.png";
import design11 from "./assets/shop.png";

export const navLinks: NavLinkType[] = [
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

export const testimonial: TestimonialType[] = [
  {
    id: 1,
    name: "Amaka N.",
    job: "FrontEnd Developer",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHECYFDxWlNtw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690489382129?e=1747872000&v=beta&t=0wy5Kt4dQU-SmEO5Om8u1yXjLDyQcZGtN6mVm0wLF34",
    description:
      "Teddy is an exceptional designer. Working with him has been a major plus to me and my team. He always has new inspiring ideas and when he sets his mind on something he’s always sure to go all out in accomplishing it.",
  },
  {
    id: 2,
    name: "J Grand",
    job: "Graphics Designer",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQFFDSUgXCkYtg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1667490441820?e=1747872000&v=beta&t=TUnF7O87vfl0eSqIfwFv79sZKi4AN1O4pLzJ3aMdYQo",
    description:
      "Working with Teddy has been an amazing experience, his design etiquettes are top notch and i dare say on par with any top designer with higher years of designing experience than him. Truly an amazing designer.",
  },
  {
    id: 3,
    name: "Ahmed Yusuf",
    job: "Product Designer",
    img: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Teddy has been an amazing addon to our company, despite it being a short term contract, he has managed to tremendously improve our services to better suite the taste of our users and also increased our userbase.",
  },
  // {
  //   id: 4,
  //   name: "Linda Adegoke",
  //   job: "UX/UI Designer",
  //   img: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
  //   description:
  //     "I really enjoyed the process working alongside Teddy. I am confident to say he is passionate about what he does, he has a sharp eye for detail and creativity. He is very professional with his work. I highly recommend his services.",
  // },
];

export const experience: ExperienceType[] = [
  {
    id: 1,
    jobTitle: "Product Design Intern",
    company: "Druids Academy",
    year: "Jan 2021 - Jul 2021",
    workDid:
      "Worked along a team of designers and gained foundational knowledge in UI/UX design, learning design principles, wireframing, prototyping, and user research while working on practical projects.",
  },
  {
    id: 2,
    jobTitle: "Product Designer",
    company: "Freelance",
    year: "Jun 2021 - Present",
    workDid:
      "Focusing on user interface and user experience design, product design, visual design, prototyping, research, testing, motion design, graphic design and simple 3D design.",
  },
  {
    id: 3,
    jobTitle: "Product Design Intern",
    company: "Zuri Internship",
    year: "May 2022 - Aug 2022",
    workDid:
      "Collaborated with a team to design and refine user interfaces, focusing on usability, accessibility, and responsive layouts for various digital products.",
  },
  {
    id: 4,
    jobTitle: "Product Designer",
    company: "Seenema (Contract)",
    year: "Jul 2022 - Dec 2022",
    workDid:
      "Designed collaboratively with a design team to create the UI/UX for Seenema, a cinema booking platform, ensuring seamless ticket reservations and an engaging in app movie-watching experience.",
  },
  {
    id: 5,
    jobTitle: "Product Designer",
    company: "Minwo",
    year: "Jul 2023 - Present",
    workDid:
      "Contributing to product strategy, UI/UX design, and design systems, focusing on enhancing user engagement and optimizing workflows for Minwo’s digital platforms.",
  },
];

export const designs: DesignsType[] = [
  {
    id: 1,
    img: design1,
    title: "Seenema (Case Study)",
    info: "A movie streaming platform designed to help local cinemas stay competitive in the digital era, standing alongside major streaming services like Netflix.",
  },
  {
    id: 2,
    img: design2,
    title: "See (Case Study)",
    info: "A video conferencing and collaboration tool for large and small teams with whiteboarding, task management, and notes for seamless teamwork.",
  },
  {
    id: 3,
    img: design3,
    title: "Tesseract (Case Study)",
    info: "A versatile crypto wallet and trading platform allowing users manage, buy, sell, send, and receive digital assets. It offers real time news for accurate insights.",
  },
  {
    id: 4,
    img: design4,
    title: "Alma Logistics",
    info: "Alma Logistics is a smart tracking app for real-time order monitoring across air, sea, and land, with easy rider and package status contact—all in one  app.",
  },
  {
    id: 5,
    img: design5,
    title: "Blizzard Games",
    info: "A gaming hub for tournaments, match-finding, in-game content and competitions. Connect with the community and stay updated—all in one place.",
  },
  {
    id: 6,
    img: design6,
    title: "Coconut Beach",
    info: "A sleek and modern e-commerce design featuring beachwear, surf gear, and summer events, with bright visuals, tropical vibe and smooth navigation.",
  },
  {
    id: 7,
    img: design7,
    title: "Medusa Studios",
    info: "An award-winning animation agency crafting high-quality 2D and 3D animations for series, games, websites, and apps. Bringing ideas to life.",
  },
  {
    id: 8,
    img: design8,
    title: "VibeStream",
    info: "Discover, stream, and vibe to your favorite tunes with VibeStream. Features curated playlists, seamless playback, and an intuitive design. Music + Vibes.",
  },

  {
    id: 9,
    img: design10,
    title: "Seenema Movie App",
    info: "Buy tickets, explore upcoming releases, and stream movies currently airing in cinemas—from the comfort of your home. Bringing the big screen to your fingertips.",
  },
  {
    id: 10,
    img: design9,
    title: "Medicare",
    info: "A modern healthcare app designed to connect users with medical professionals while managing medical records and prescriptions effortlessly.",
  },
  {
    id: 11,
    img: design11,
    title: "ShopEase",
    info: "Your go-to app for trendy fashion and footwear. Browse a curated collection of shoes, clothing, and accessories. Save favorites, and shop effortlessly with ShopEase.",
  },
];
