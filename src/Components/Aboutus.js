import React, { useState } from "react";
import howToUseApp from "../API/howToUse";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);

  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutusImg" />
            </div>

            {/* 1section right side data */}

            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                --AVAILABLE @ GOOGLE AND IOS APP ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>
              {aboutData.map((currElem) => {
                const { id, title, info } = currElem;

                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />

              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of about us section */}
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">

            {/* 1section right side data */}

            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">
                --SUPPORT IN ANY LANGUAGES
              </h3>
              <h1 className="main-heading">World class support is available 24/7</h1>
              {aboutData.map((currElem) => {
                const { id, title, info } = currElem;

                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />

              <button className="btn-style btn-style-border">Learn More</button>

            </div>
              {/* Image Section */}

              <div className="col-12 col-lg-5 our-service-rightside-img">
              <img src="./images/callcenter.jpg" alt="aboutusImg" />
            </div>


          </div>
        </div>
      </section>


    </>
  );
};

export default Aboutus;
