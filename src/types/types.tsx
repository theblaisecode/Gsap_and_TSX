export type NavLinkType = {
  id: number;
  name: string;
  url: string;
  ariaLabel: string;
};

export type TestimonialSettings = {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
  responsive?: {
    breakpoint: number;
    settings: Partial<Omit<TestimonialSettings, "responsive">>;
  }[];
};


export type TestimonialType = {
  id: number;
  name: string;
  job: string;
  img: string;
  description: string;
};

export type ExperienceType = {
  id: number;
  jobTitle: string;
  company: string;
  year: string;
  workDid: string;
};

export type DesignsType = {
  id: number;
  img: string;
  imgAlt: string;
  title: string;
  info: string;
};

export type ContactSocialType = {
  id: number;
  icon: React.ElementType;
  href: string;
  ariaLabel: string;
  title: string;
};
