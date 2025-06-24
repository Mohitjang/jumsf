import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="contact-page">
        {/* inner-page-banner */}
        <section className="inner-page-banner">
          <div className="container">
            <div className="section-inner">
              <h2>Contact Us</h2>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <div className="container">
            <div className="section-inner">
              <div className="section-top">
                <div className="row align-items-center">
                  <div className="col-md-9">
                    <div className="heading">
                      <span>Get Started</span>
                      <h2>Get in touch with us. We're here to assist you.</h2>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="contact-social">
                      <a href="https://www.linkedin.com/company/flikmoney/" target="_blank">
                        <img src="/assets/images/primary-linkedin.png" alt="linkedin" />
                      </a>
                      <a href="https://www.instagram.com/flikmoney?igsh=MWhyN3FjbTc2ZjEw" target="_blank">
                        <img src="/assets/images/primary-instagram.png" alt="instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <form action="https://flik.co.in/send_email.php" method="POST">
                <div className="section-mid">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" placeholder="Your Name" className="form-control" name="username" id="username" required />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="email" placeholder="Email Address" className="form-control" name="email" id="email" required />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" placeholder="Mobile No." className="form-control" name="mobile" id="mobile" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea placeholder="Message" className="form-control" rows={4} name="message" id="message" required defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="action-btn">
                  <button className="theme-button primary-btn" type="submit">
                    Leave us a Message
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={11} viewBox="0 0 16 11" fill="none">
                      <path d="M10.25 0.101807L9.1925 1.15931L12.6275 4.60181H0.5V6.10181H12.6275L9.185 9.54431L10.25 10.6018L15.5 5.35181L10.25 0.101807Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="contact-info-section">
          <div className="container">
            <div className="section-inner">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="heading">
                    <span>Contact Info</span>
                    <h2>We are always happy to assist you</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-right">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="info-item">
                          <h3>Email Address</h3>
                          <p>info@flik.co.in</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-item">
                          <h3>Mobile No.</h3>
                          <p>+91 89550 63572</p>
                        </div>
                      </div>
                    </div>
                    <div className="other-info">
                      <p>Assistance hours: Monday - Saturday 9am to 8pm</p>
                    </div>
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

export default ContactUs;
