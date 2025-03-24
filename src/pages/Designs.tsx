import DesignsPage from "../components/DesignsPage.tsx";
import DesignsWrapper from "../styles/DesignsWrapper.ts";

function Designs() {
  return (
    <DesignsWrapper>
      <div className="container">
        <div className="designsContent">
          <div className="top">
            <DesignsPage />
          </div>
        </div>
      </div>
    </DesignsWrapper>
  );
}

export default Designs;
