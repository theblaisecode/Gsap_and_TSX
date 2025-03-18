import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial, TestimonialSettings } from "../data.ts";
import { testimonialType } from "../types/types.tsx";

function Testimonial() {
  const settings: TestimonialSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  /**
   *  id: number;
      name: string;
      job: string;
      img: string;
   */

  return (
    <div className="item testimonial">
      <div className="slider-container">
        <Slider {...settings}>
          {testimonial.map((testimonialItem: testimonialType) => {
            const { id, name, job, img, description }: testimonialType =
              testimonialItem;

            return (
              <div key={id} className="testimonialSliderItem">
                <div className="sliderContent">
                  <div className="contentTop">
                    <img src={img} alt={`${name}'s photo`} />
                    <div className="identity">
                      <h4>{name}</h4>
                      <span>{job}</span>
                    </div>
                  </div>

                  <div className="contentBottom">{description}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
