import { designs } from "../data.ts";
import { DesignsType } from "../types/types.tsx";

function DesignsPage() {
  return (
    <div id="design">
      <div className="designContent">
        <div className="contentTop">
          {designs.map((item: DesignsType) => {
            const { id, img, imgAlt, title, info }: DesignsType = item;

            return (
              <div key={id} className="items designBox">
                <div className="image">
                  <img src={img} alt={imgAlt} />
                </div>

                <div className="designDescription">
                  <h3 className="designTitle">{title}</h3>

                  <p className="info">{info}</p>
                </div>
              </div>
            );
          })}

          <div className="designBox seeMore">
            <a
              className="more"
              href="https://dribbble.com/Teddy_016"
              target="_blank"
              aria-label="Link to teddythecreator's dribbble page">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignsPage;
