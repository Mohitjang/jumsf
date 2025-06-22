import React from "react";

const Home = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <div className="header-inner">
              <div className="row align-items-center">
                <div className="col-4 col-md-3">
                  <a
                    className="navbar-brand"
                    href="https://flik.co.in/index.php"
                  >
                    <img src="/assets/images/logo.svg" alt="logo" />
                  </a>
                </div>
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <div
                    className="collapse navbar-collapse"
                    id="collapsibleNavbar"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://flik.co.in/index.php"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://flik.co.in/about.php"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://flik.co.in/how-it-works.php"
                        >
                          How it Works
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-8 col-md-3 order-1 order-md-2">
                  <div className="header-contact">
                    <a
                      href="https://flik.co.in/contact-us.php"
                      className="theme-button white-outline-btn"
                    >
                      Contact Us
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsibleNavbar"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="home-page">
        {/* home-banner start */}
        <section className="home-banner">
          <div className="container">
            <div className="section-innner">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="banner-left">
                    <h1>Redefine Paydays, Redefine Work</h1>
                    <p>
                      Give your employees control over their earnings with
                      Flik’s seamless Earned Wage Access platform. Improve
                      retention, reduce financial stress, and foster a motivated
                      workforce with zero-cost, plug-and-play payroll
                      integration.
                    </p>
                    <a
                      href="https://flik.co.in/contact-us.php"
                      className="theme-button primary-btn"
                    >
                      Let’s Talk
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hero-img">
                    <img src="/assets/images/hero-img.png" alt="hero-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Paydays start */}
        <section className="paydays-section">
          <div className="container">
            <div className="section-inner">
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-5">
                  <div className="section-left">
                    <h2>Paydays Shouldn't Be the Only Good Days</h2>
                    <p>
                      Many employees struggle to make ends meet between
                      paychecks, leading to stress and lower productivity. By
                      offering Flik’s Earned Wage Access, employers empower
                      their workforce with financial freedom, reducing stress
                      and boosting morale.
                    </p>
                    <a
                      href="https://flik.co.in/about.php"
                      className="theme-button primary-btn"
                    >
                      Read About Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="paydays-list">
                    <div className="list-item">
                      <span>59%</span>
                      <p>
                        Of workers prioritize flexible salary access when
                        choosing their next job.
                      </p>
                    </div>
                    <div className="list-item">
                      <span>42%</span>
                      <p>
                        Workers rely on their employers for financial security
                        and stability.
                      </p>
                    </div>
                    <div className="list-item">
                      <span>52%</span>
                      <p>
                        Of workers financial stress makes it harder for
                        employees to stay productive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits section */}
        <section className="home-benefits-section">
          <div className="container">
            <div className="section-heading">
              <h2>Effortless Payroll, Limitless Benefits</h2>
            </div>
            <div className="section-inner">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="benefit-card card-1">
                    <div className="card-img">
                      <img
                        src="/assets/images/interest.png"
                        alt="interest"
                      />
                    </div>
                    <div className="card-content">
                      <span>#1</span>
                      <h3>0% Interest</h3>
                      <p>Withdraw freely with no hidden fees.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="benefit-card card-2">
                    <div className="card-img">
                      <img
                        src="/assets/images/repayment.png"
                        alt="repayment"
                      />
                    </div>
                    <div className="card-content">
                      <span>#2</span>
                      <h3>Easy Repayment</h3>
                      <p>Withheld from employee salary by the employer.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="benefit-card card-3">
                    <div className="card-img">
                      <img src="/assets/images/digital.png" alt="Digital" />
                    </div>
                    <div className="card-content">
                      <span>#3</span>
                      <h3>Digital KYC</h3>
                      <p>Immediate disbursement, digital process.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="benefit-card card-4">
                    <div className="card-img">
                      <img
                        src="/assets/images/compliant.png"
                        alt="Compliant"
                      />
                    </div>
                    <div className="card-content">
                      <span>#4</span>
                      <h3>Fully Compliant</h3>
                      <p>Regulatory-Compliant Process by RBI Standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Solutions section */}
        <section className="home-solutions-section">
          <div className="container">
            <div className="section-heading">
              <h2>What Employees Get from our Solutions</h2>
            </div>
            <div className="section-inner">
              <div className="row">
                <div className="col-md-6">
                  <div className="solution-item">
                    <div className="item-img">
                      <img
                        src="/assets/images/calendar.png"
                        alt="calendar"
                      />
                    </div>
                    <div className="contant">
                      <h3>Access your pay anytime you need.</h3>
                      <p>Access your earned salary anytime, anywhere.</p>
                    </div>
                  </div>
                  <div className="solution-item">
                    <div className="item-img">
                      <img src="/assets/images/cycle.png" alt="calendar" />
                    </div>
                    <div className="contant">
                      <h3>Break free from the cycle of debt.</h3>
                      <p>
                        Take control of your finances and avoid high-interest
                        loans.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="solution-item">
                    <div className="item-img">
                      <img src="/assets/images/time.png" alt="calendar" />
                    </div>
                    <div className="contant">
                      <h3>Track your balance in real time.</h3>
                      <p>
                        Track your available earnings and spending patterns.
                      </p>
                    </div>
                  </div>
                  <div className="solution-item">
                    <div className="item-img">
                      <img
                        src="/assets/images/strengthen.png"
                        alt="calendar"
                      />
                    </div>
                    <div className="contant">
                      <h3>Strengthen your credit history.</h3>
                      <p>Timely repayments boost your credit profile.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Employers Solutions section */}
        <section className="employers-solutions">
          <div className="container">
            <div className="section-inner">
              <div className="row align-items-center">
                <div className="col-md-7 order-2 order-md-1">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="employers-card">
                        <div className="card-img">
                          <img
                            src="/assets/images/retention-benefits.png"
                            alt="retention-benefits"
                          />
                        </div>
                        <div className="name">
                          <h3>
                            Retention
                            <br /> Benefits
                          </h3>
                        </div>
                      </div>
                      <div className="employers-card">
                        <div className="card-img">
                          <img
                            src="/assets/images/employee-centric.png"
                            alt="employee-centric"
                          />
                        </div>
                        <div className="name">
                          <h3>
                            Employee
                            <br /> Centric
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="employers-card">
                        <div className="card-img">
                          <img
                            src="/assets/images/zero-risk.png"
                            alt="zero-risk"
                          />
                        </div>
                        <div className="name">
                          <h3>
                            Zero
                            <br /> Risk
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 order-1 order-md-2">
                  <div className="section-content">
                    <div className="heading">
                      <h2>What Employers Get from Our Solutions</h2>
                    </div>
                    <div className="brief">
                      <ul>
                        <li>Attract Top Talent and Reduce Turnover</li>
                        <li>Boost Employee Satisfaction and Productivity</li>
                        <li>Unlock Capital for Growth and Innovation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* home-security-section */}
        <section className="home-security-section">
          <div className="container">
            <div className="section-inner">
              <div className="section-heading">
                <h6>Security &amp; Privacy</h6>
                <h2>
                  Flik prioritizes data security and privacy with multiple
                  compliance certifications.
                </h2>
              </div>
              <div className="section-points">
                <ul>
                  <li>ISO 27001 certified company</li>
                  <li>Robust Cloud Security</li>
                  <li>Dedicated Security Team</li>
                  <li>Data encrypted in rest and transit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="/assets/images/footer-logo.svg" alt="logo" />
            </div>
          </div>
          <div className="footer-inner">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-about">
                  <h4>Address</h4>
                  <p>
                    Zymera Ventures Private Limited
                    <br />
                    1/510 Vidhyadhar Nagar,
                    <br />
                    Jaipur 302039
                    <br />
                    +91 89550 63572
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-nav">
                  <h4>Quick Links</h4>
                  <ul>
                    <li>
                      <a href="https://flik.co.in/index.php">Home</a>
                    </li>
                    <li>
                      <a href="https://flik.co.in/about.php">About Us</a>
                    </li>
                    <li>
                      <a href="https://flik.co.in/how-it-works.php">
                        How it Works
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-nav">
                  <h4>Other Links</h4>
                  <ul>
                    <li>
                      <a href="https://flik.co.in/contact-us.php">Contact Us</a>
                    </li>
                    <li>
                      <a href="https://flik.co.in/terms-of-use.php">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="https://flik.co.in/privacy-policy.php">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://flik.co.in/grievance_mechanism.php">
                        Grievance Mechanism
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-social">
                  <h4>Social Media</h4>
                  <div className="social-links">
                    <a
                      href="https://www.instagram.com/flikmoney?igsh=MWhyN3FjbTc2ZjEw"
                      target="_blank"
                    >
                      <img src="/assets/images/instagram.png" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/flikmoney/"
                      target="_blank"
                    >
                      <img src="/assets/images/linkedin.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Zymera Ventures Private Limited</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
