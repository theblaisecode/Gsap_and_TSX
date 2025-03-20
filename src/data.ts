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

export const experience: {
  id: number;
  jobTitle: string;
  company: string;
  year: string;
  workDid: string;
}[] = [
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
      "Designed collaboratively with a design team to create the UI/UX for Seenema, a cinema booking platform, ensuring seamless ticket reservations and an engaging movie-watching experience within the app.",
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
