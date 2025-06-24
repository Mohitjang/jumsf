import React from "react";

const HowWorks = () => {
  return (
    <>
      <div className="works-page">
        {/* inner-page-banner */}
        <section className="inner-page-banner">
          <div className="container">
            <div className="section-inner">
              <h2>How It Works</h2>
            </div>
          </div>
        </section>
        <section className="how-it-work-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-6">
                <div className="work-card">
                  <div className="card-content">
                    <span>01</span>
                    <h3>Partner with Flik</h3>
                    <p>Seamless setup with your payroll system.</p>
                  </div>
                  <div className="card-img">
                    <img src="/assets/images/1.png" alt="work-img" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="work-card card-2">
                  <div className="card-content">
                    <span>02</span>
                    <h3>Employee Onboarding</h3>
                    <p>One-time digital KYC unlocks access to earned wages.</p>
                  </div>
                  <div className="card-img">
                    <img src="/assets/images/2.png" alt="work-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-6">
                <div className="work-card card-2">
                  <div className="card-content">
                    <span>03</span>
                    <h3>Request Advances</h3>
                    <p>Employees request pay via Flik app</p>
                  </div>
                  <div className="card-img">
                    <img src="/assets/images/3.png" alt="work-img" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="work-card card-2">
                  <div className="card-content">
                    <span>04</span>
                    <h3>Instant Payouts</h3>
                    <p>Flik credits wages directly to employees' accounts.</p>
                  </div>
                  <div className="card-img">
                    <img src="/assets/images/4.png" alt="work-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-6">
                <div className="work-card card-2">
                  <div className="card-content">
                    <span>05</span>
                    <h3>Monthly Settlement</h3>
                    <p>Employers settle advances with Flik at month-end.</p>
                  </div>
                  <div className="card-img">
                    <img src="/assets/images/5.png" alt="work-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowWorks;
