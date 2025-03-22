import direc from "../../assets/direc.png";
import cover from "../../assets/cover.png";
import Services from "./Services";

const Body = () => {
  return (
    <>
    <div className="body">
      {/* Background Images */}
      <img src={direc} className="background-image direction" alt="Direction" />
      <img
        src={cover}
        className="background-image finance-main"
        alt="Finance"
      />

      {/* Foreground Content */}
      <div className="row" style={{marginLeft: '5rem'}}>
        <div class="col-12 text-box d-flex align-items-center">
          <div class="left-text">
            <p>TRADING.</p>
            <p>INVESTING.</p>
            <p>INSURING.</p>
          </div>
          <div class="right-text">
            <p>ALL IN</p>
            <p>ONE</p>
            <p>PLACE</p>
          </div>
        </div>

        <div class="col-12 container text-center mt-4">
          <div class="row">
            <div class="col-md-3 col-6">
              <button class="custom-btn w-100">
                OUR SERVICES <span>&#x2193;</span>
              </button>
            </div>
            <div class="col-md-3 col-6">
              <button class="custom-btn w-100">
                TESTIMONIALS <span>&#x2193;</span>
              </button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-3 col-6">
              <button class="custom-btn w-100">
                ABOUT US <span>&#x2193;</span>
              </button>
            </div>
            <div class="col-md-3 col-6">
              <button class="custom-btn w-100">
                CONTACT US <span>&#x2193;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <Services />
    </>
  );
};

export default Body;
