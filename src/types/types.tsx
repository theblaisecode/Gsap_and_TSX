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

/**
 * <div className="designBox">
      <div className="image">
        <img src={design1} alt="Seenema casestudy image" />
      </div>

      <div className="designDescription">
        <h3 className="designTitle">Seenema</h3>

        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          reprehenderit eos impedit odio odit reiciendis cupiditate
          aperiam laboriosam eveniet. Ullam.
        </p>
      </div>
    </div>
 */

export type DesignsType = {
  id: number;
  img: string;
  title: string;
  info: string;
};
