import React from "react";

const About = () => {
  return (
    <div className="about-page">
      {/* inner-page-banner */}
      <section className="inner-page-banner">
        <div className="container">
          <div className="section-inner">
            <h2>Empowering India's MSME Workforce with Financial Wellness Solutions</h2>
          </div>
        </div>
      </section>
      {/* about-flik */}
      <section className="about-flik pb-0">
        <div className="container">
          <h2>About Flik</h2>
          <p>At Flik, we believe financial well-being shouldn't wait for payday. Our platform gives employees the freedom
            to access their earned wages whenever they need them—no more waiting, no more stress. With seamless
            integration and zero overhead, we empower employers to create workplaces where everyone thrives.</p>
        </div>
      </section>
      <section className="about-flik">
        <div className="container">
          <h2>Our Official NBFC Partner</h2>
          <h3><a href="https://saloracapital.com/">Lender: Salora Capital Limited</a></h3>
          <br />
          <div className="text-center">
            <img src="/assets/images/salora-capital.jpeg" alt="salora-capital" />
          </div>
        </div>
      </section>
      {/* mission-section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-inner">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="section-img">
                  <img src="/assets/images/mission-img.png" alt="mission-img" />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 offset-lg-1">
                <div className="section-content">
                  <h2>Our Mission</h2>
                  <p>We’re here to transform paydays by making them flexible, stress-free, and accessible. Flik is built
                    for businesses that value their employees and want to create a positive, productive environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* stand-for-section */}
      <section className="stand-for-section">
        <div className="container">
          <div className="section-inner">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="section-content">
                  <h2>What We Stand For</h2>
                  <p><b>Empowerment:</b> Giving employees the tools they need to stay financially secure.</p>
                  <p><b>Simplicity:</b> Making payroll easy with a plug-and-play system.</p>
                  <p><b>Innovation:</b> Staying ahead with smart financial solutions that benefit everyone.</p>
                  <p><b>Growth:</b> Helping companies reinvest in what matters—people and progress.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-img">
                  <img src="/assets/images/stand-for.png" alt="mission-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
